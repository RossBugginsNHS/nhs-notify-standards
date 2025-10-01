#!/usr/bin/env bash
set -euo pipefail

# Simple wrapper to generate the OpenAPI spec from the built IG artifacts.
# Ensure you have run `make build` first (or equivalent) so that the CapabilityStatement
# and OperationDefinition JSON files exist in the chosen version directory.

CAP_PATH="v1/CapabilityStatement-LettersServer.json"
OUT_PATH="openapi/letters-api.yaml"
VERSION_DIR="v1"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "${SCRIPT_DIR}/.." && pwd)"

usage() {
  cat <<EOF
Usage: $0 [-c capabilityStatementPath] [-o outputPath] [-V versionDir]

Defaults:
  -c ${CAP_PATH}
  -o ${OUT_PATH}
  -V ${VERSION_DIR}

Examples:
  $0                      # use defaults
  $0 -c v1/CapabilityStatement-LettersServer.json -o openapi/letters-api.yaml
EOF
}

while getopts ":c:o:V:h" opt; do
  case $opt in
    c) CAP_PATH="$OPTARG" ;;
    o) OUT_PATH="$OPTARG" ;;
    V) VERSION_DIR="$OPTARG" ;;
    h) usage; exit 0 ;;
    *) usage; exit 1 ;;
  esac
done
shift $((OPTIND-1))

cd "${REPO_ROOT}" || { echo "Cannot cd to repo root" >&2; exit 1; }

if [[ ! -f "$CAP_PATH" ]]; then
  echo "CapabilityStatement not found: $CAP_PATH" >&2
  echo "Run 'make build' first if artifacts are missing." >&2
  exit 1
fi

if ! command -v python3 >/dev/null 2>&1; then
  echo "python3 not found on PATH" >&2
  exit 1
fi

if ! python3 - <<'EOF'
try:
    import yaml  # noqa: F401
except Exception:
    raise SystemExit("PyYAML not installed. Install with: pip install pyyaml")
EOF
then
  exit 1
fi

echo "▶ Generating OpenAPI from $CAP_PATH -> $OUT_PATH"
python3 fhirtools/generate-openapi.py --cap "$CAP_PATH" --out "$OUT_PATH" --version-dir "$VERSION_DIR"

echo "✔ OpenAPI written to $OUT_PATH"
