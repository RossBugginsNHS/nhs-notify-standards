#!/usr/bin/env bash
# find-ukcore.sh
# -----------------------------------------------------------------------------
# Probe likely UK Core (or other) FHIR package IDs + versions across registries
# and report response classification.
# -----------------------------------------------------------------------------
set -euo pipefail

CANDIDATE_PACKAGES=(
  hl7.fhir.uk.core
  fhir.r4.ukcore.stu2
  hl7.uk.fhir.core
  fhir.uk.core
  ukcore.r4
  hl7.fhir.ukcore.r4
)
CANDIDATE_VERSIONS=(2.4.0 2.3.0 2.2.0 2.1.0 2.0.0 1.7.0)
TIMEOUT=12
USER_AGENT="ukcore-probe/1.0"

while [[ $# -gt 0 ]]; do
  case "$1" in
    -p|--packages) IFS=' ' read -r -a CANDIDATE_PACKAGES <<<"$2"; shift 2 ;;
    -v|--versions) IFS=' ' read -r -a CANDIDATE_VERSIONS <<<"$2"; shift 2 ;;
    -t|--timeout) TIMEOUT="$2"; shift 2 ;;
    -h|--help)
      grep -n '^#' "$0" | sed 's/^# \{0,1\}//'; exit 0 ;;
    *) echo "Unknown arg: $1" >&2; exit 2 ;;
  esac
done

ENDPOINT_TEMPLATES=(
  "https://packages.fhir.org/%s/%s"
  "https://packages2.fhir.org/packages/%s/%s"
  "https://registry.fhir.org/packages/%s/%s"
  "https://simplifier.net/packages/%s/%s/download"
)

echo "Probing candidate packages..."
echo "Packages: ${CANDIDATE_PACKAGES[*]}"
echo "Versions: ${CANDIDATE_VERSIONS[*]}"
echo
printf '%-22s %-9s %-58s %-14s %-12s\n' PACKAGE VERSION ENDPOINT STATUS NOTE
printf '%-22s %-9s %-58s %-14s %-12s\n' ------- ------- ---------------------------------------------------------- -------------- ------------

have_positive=false

for pkg in "${CANDIDATE_PACKAGES[@]}"; do
  for ver in "${CANDIDATE_VERSIONS[@]}"; do
    for tmpl in "${ENDPOINT_TEMPLATES[@]}"; do
      url=$(printf "$tmpl" "$pkg" "$ver")
      body=$(mktemp)
      code=$(curl -A "$USER_AGENT" --connect-timeout "$TIMEOUT" -m "$TIMEOUT" -s -o "$body" -w '%{http_code}' -L "$url" || true)
      note=""; status="HTTP_$code"
      if [[ $code == 000 ]]; then status=NO_CONNECT; note=network; fi
      if [[ $code == 200 ]]; then
        if grep -qi '<html' "$body"; then
          status=200_HTML; note=HTML_PAGE
        else
          # Detect gzip magic (1f8b)
          if head -c2 "$body" | od -An -tx1 | grep -q '1f 8b'; then
            status=200_OK; note=TAR_GZIP; have_positive=true
          else
            note=MISC_CONTENT; status=200_MISC
          fi
        fi
      fi
      printf '%-22s %-9s %-58s %-14s %-12s\n' "$pkg" "$ver" "${url:0:58}" "$status" "$note"
      rm -f "$body"
    done
  done
done

echo
if $have_positive; then
  echo "At least one endpoint returned a non-HTML 200 (potential package)."
  exit 0
else
  echo "No definitive package tarball located. Try manual browser fetch or auth." >&2
  exit 1
fi
