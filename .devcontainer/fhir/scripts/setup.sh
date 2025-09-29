#!/usr/bin/env bash
set -euo pipefail

log() { printf "▶ %s\n" "$*"; }

# -----------------------------
# Paths (from devcontainer.json)
# -----------------------------
IG_ROOT="${IG_ROOT:-/workspaces/nhs-notify-standards/fhir}"
IG_TOOLS="${IG_TOOLS:-/workspaces/nhs-notify-standards/fhir/tools}"

# --------------------------------
# Ensure workspace folders exist
# --------------------------------
log "Ensuring workspace paths exist…"
mkdir -p "${IG_ROOT}" "${IG_TOOLS}" "${IG_ROOT}/txCache"

# --------------------------------
# Fix npm permissions (mounted vol)
# --------------------------------
log "Fixing npm permissions…"
sudo mkdir -p /home/vscode/.npm /home/vscode/.npm-global
sudo chown -R vscode:vscode /home/vscode/.npm /home/vscode/.npm-global
npm config set cache /home/vscode/.npm --global
npm config set prefix /home/vscode/.npm-global --global
# Ensure global bin on PATH for future shells
if ! grep -q 'npm-global/bin' /home/vscode/.bashrc; then
  echo 'export PATH="$HOME/.npm-global/bin:$PATH"' >> /home/vscode/.bashrc
fi
export PATH="$HOME/.npm-global/bin:$PATH"

# --------------------------------
# Base utilities (quiet apt runs)
# --------------------------------
log "Installing base utilities…"
sudo apt-get update -y
sudo apt-get install -y --no-install-recommends \
  git-lfs curl wget unzip ca-certificates jq graphviz \
  libxtst6 libxi6 libxrender1 \
  python3-full \
  ruby-full build-essential zlib1g-dev
sudo apt-get clean
sudo rm -rf /var/lib/apt/lists/*

# -----------------------------
# Install Jekyll (for IG Publisher)
# -----------------------------
log "Installing Jekyll (for IG Publisher)…"
# From: https://jekyllrb.com/docs/installation/ubuntu/
# Note: we use 'sudo gem install' to avoid permission issues in the container
sudo gem install jekyll bundler




# -----------------------------
# Install SUSHI globally
# -----------------------------
log "Installing SUSHI globally…"
npm install -g fsh-sushi

# -------------------------------------------
# Download IG Publisher & FHIR Validator jars
# -------------------------------------------
# IG Publisher: use the canonical 'publisher.jar' (HL7 docs) with retries
# Fallback to org.hl7.fhir.publisher.jar if HL7 ever posts with that name.
log "Downloading IG Publisher…"
PRIMARY_URL="https://github.com/HL7/fhir-ig-publisher/releases/latest/download/publisher.jar"
ALT_URL="https://github.com/HL7/fhir-ig-publisher/releases/latest/download/org.hl7.fhir.publisher.jar"
PUBLISHER_JAR="${IG_TOOLS}/publisher.jar"

if ! curl -fSLo "${PUBLISHER_JAR}" --retry 5 --retry-all-errors --retry-delay 3 "${PRIMARY_URL}"; then
  echo "Primary asset not found, trying alternate asset name…"
  curl -fSLo "${IG_TOOLS}/org.hl7.fhir.publisher.jar" --retry 5 --retry-all-errors --retry-delay 3 "${ALT_URL}"
  mv "${IG_TOOLS}/org.hl7.fhir.publisher.jar" "${PUBLISHER_JAR}"
fi

# FHIR Validator: canonical 'validator_cli.jar' latest link with retries
log "Downloading FHIR Validator…"
curl -fSLo "${IG_TOOLS}/validator_cli.jar" \
  --retry 5 --retry-all-errors --retry-delay 3 \
  "https://github.com/hapifhir/org.hl7.fhir.core/releases/latest/download/validator_cli.jar"

# -----------------------------
# Helper scripts in /fhir/tools
# -----------------------------
log "Creating helper scripts…"

cat > "${IG_TOOLS}/build.sh" <<'EOF'
#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."
echo "▶ Running SUSHI…"
sushi .
echo "▶ Running IG Publisher…"
java -jar "./tools/publisher.jar" -ig ig.ini
echo "✅ Build complete. Output at: ./output"
EOF
chmod +x "${IG_TOOLS}/build.sh"

cat > "${IG_TOOLS}/validate.sh" <<'EOF'
#!/usr/bin/env bash
set -euo pipefail
if [ $# -lt 1 ]; then
  echo "Usage: tools/validate.sh <file-to-validate.json> [extra validator args]"
  exit 1
fi
cd "$(dirname "$0")/.."
FILE="$1"; shift || true
java -jar "./tools/validator_cli.jar" "$FILE" -version 4.0.1 -ig ./output/package.tgz "$@"
EOF
chmod +x "${IG_TOOLS}/validate.sh"

cat > "${IG_TOOLS}/clean.sh" <<'EOF'
#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."
rm -rf output fsh-generated qa temp template *.tgz
echo "🧹 Cleaned build artefacts."
EOF
chmod +x "${IG_TOOLS}/clean.sh"

# -----------------------------
# Final summary
# -----------------------------
log "Setup complete."
echo "Try:   cd ${IG_ROOT} && ./tools/build.sh"