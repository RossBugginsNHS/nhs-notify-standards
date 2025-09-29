#!/usr/bin/env bash
# -----------------------------------------------------------------------------
# check-ukcore.sh
# Probe common FHIR package registry endpoints to discover available versions
# of a given UK Core (or any) FHIR NPM package and optionally cache one locally.
#
# Default package: hl7.fhir.uk.core
# Default version candidates: 2.4.0 2.3.0 2.2.0 2.1.0 2.0.0 1.7.0
#
# Endpoints probed (in order):
#  1. packages.fhir.org/<pkg>/<ver>
#  2. packages2.fhir.org/packages/<pkg>/<ver>
#  3. registry.fhir.org/packages/<pkg>/<ver>
#  4. simplifier.net/packages/<pkg>/<ver>/download (direct package)
#  5. simplifier.net/packages/<pkg>/<ver>       (page HTML – last resort)
#
# For each successful fetch of a .tgz we:
#  - verify it is a gzip archive
#  - list key files inside (package/package.json, ImplementationGuide-*.json)
#  - optionally install it into a cache directory (FHIR default or supplied)
#
# Usage:
#   ./tools/check-ukcore.sh                 # probe defaults
#   ./tools/check-ukcore.sh -p hl7.fhir.uk.core -v "2.3.0 2.2.0" \
#       -c ~/.fhir/packages                 # cache successes
#   ./tools/check-ukcore.sh -p some.pkg -e          # only list endpoints (dry run)
#
# Exit codes:
#   0 – at least one version found & validated
#   1 – none succeeded
#   2 – usage error
# -----------------------------------------------------------------------------
set -euo pipefail

PACKAGE="hl7.fhir.uk.core"
VERSIONS=(2.4.0 2.3.0 2.2.0 2.1.0 2.0.0 1.7.0)
CACHE_DIR=""
DRY_ENDPOINTS_ONLY=false
KEEP_TMP=false
COLOR=true

while [[ $# -gt 0 ]]; do
  case "$1" in
    -p|--package) PACKAGE="$2"; shift 2 ;;
    -v|--versions) IFS=' ' read -r -a VERSIONS <<<"$2"; shift 2 ;;
    -c|--cache-dir) CACHE_DIR="$2"; shift 2 ;;
    -e|--endpoints-only) DRY_ENDPOINTS_ONLY=true; shift ;;
    -k|--keep-temp) KEEP_TMP=true; shift ;;
    -n|--no-color) COLOR=false; shift ;;
    -h|--help)
      sed -n '1,80p' "$0"; exit 0 ;;
    *) echo "Unknown arg: $1" >&2; exit 2 ;;
  esac
done

if $COLOR; then
  GREEN='\033[32m'; RED='\033[31m'; YELLOW='\033[33m'; CYAN='\033[36m'; BOLD='\033[1m'; RESET='\033[0m'
else
  GREEN=''; RED=''; YELLOW=''; CYAN=''; BOLD=''; RESET=''
fi

echo -e "${BOLD}▶ Probing package:${RESET} $PACKAGE"

declare -a ENDPOINT_TEMPLATES=(
  "https://packages.fhir.org/%s/%s"
  "https://packages2.fhir.org/packages/%s/%s"
  "https://registry.fhir.org/packages/%s/%s"
  # Direct download on Simplifier returns the tgz (if logged-in sometimes; often public for UK Core)
  "https://simplifier.net/packages/%s/%s/download"
  # Fallback page (HTML) – we will not attempt to unpack, just record status
  "https://simplifier.net/packages/%s/%s"
)

status_table=()
found_any=false

# Create temp workspace
WORK_ROOT="$(mktemp -d -t fhir-pkg-probe-XXXXXX)"
trap '[[ $KEEP_TMP == true ]] || rm -rf "$WORK_ROOT"' EXIT

curl_common=(--silent --show-error --location --fail --connect-timeout 10 --retry 2)

if $DRY_ENDPOINTS_ONLY; then
  echo "Endpoints that will be probed (per version):"
  for e in "${ENDPOINT_TEMPLATES[@]}"; do
    printf '  %s\n' "$(printf "$e" "$PACKAGE" '<version>')"
  done
  exit 0
fi

echo -e "${CYAN}Versions to try:${RESET} ${VERSIONS[*]}"

for ver in "${VERSIONS[@]}"; do
  echo -e "\n${BOLD}== Version $ver ==${RESET}"
  for tmpl in "${ENDPOINT_TEMPLATES[@]}"; do
    url=$(printf "$tmpl" "$PACKAGE" "$ver")
    echo -e "  • Checking: $url"
    fname="${WORK_ROOT}/$(echo "$url" | tr '/' '_').bin"
    if curl "${curl_common[@]}" -o "$fname" "$url" 2>/dev/null; then
      mime=$(file -b --mime-type "$fname" || echo 'unknown')
      size=$(stat -c %s "$fname" 2>/dev/null || echo 0)
      if [[ $mime == application/gzip || $mime == application/x-gzip || $fname == *download ]]; then
        echo "    - Appears to be a tgz (mime=$mime, size=${size}B). Validating..."
        # Try to list key entries
        if tar -tzf "$fname" >/dev/null 2>&1; then
          has_pkg_json=$(tar -tzf "$fname" | grep -c 'package/package.json' || true)
          if [[ $has_pkg_json -gt 0 ]]; then
            echo -e "    ${GREEN}✓ Valid package archive${RESET}"
            found_any=true
            status_table+=("$ver|$url|OK|$size")
            if [[ -n $CACHE_DIR ]]; then
              target_dir="$CACHE_DIR/$PACKAGE/$ver"
              mkdir -p "$target_dir"
              cp "$fname" "$target_dir/package.tgz"
              echo "    - Cached to $target_dir/package.tgz"
            fi
            # Stop after first success for this version
            break
          else
            echo -e "    ${YELLOW}! Archive missing package/package.json${RESET}"
            status_table+=("$ver|$url|BAD_ARCHIVE|$size")
          fi
        else
          echo -e "    ${YELLOW}! Could not list archive contents${RESET}"
          status_table+=("$ver|$url|CORRUPT|$size")
        fi
      else
        # If HTML page – just record success of reachability
        if grep -qi '<html' "$fname" 2>/dev/null; then
          echo -e "    ${YELLOW}! HTML page (not a tgz)${RESET}"
          status_table+=("$ver|$url|HTML_PAGE|$size")
        else
          echo -e "    ${YELLOW}! Unexpected mime: $mime${RESET}"
          status_table+=("$ver|$url|UNEXPECTED_MIME:$mime|$size")
        fi
      fi
    else
      echo -e "    ${RED}✗ Fetch failed${RESET}"
      status_table+=("$ver|$url|FETCH_FAILED|0")
    fi
  done
done

echo -e "\n${BOLD}Summary:${RESET}"
printf '%-10s %-55s %-14s %10s\n' VERSION URL STATUS SIZE
printf '%-10s %-55s %-14s %10s\n' -------- ------------------------------------------------------- -------------- ----------
for row in "${status_table[@]}"; do
  IFS='|' read -r v u s z <<<"$row"
  printf '%-10s %-55s %-14s %10s\n' "$v" "${u:0:55}" "$s" "$z"
done

if $found_any; then
  echo -e "\n${GREEN}At least one version successfully validated.${RESET}"
  exit 0
else
  echo -e "\n${RED}No versions could be downloaded & validated.${RESET}"
  echo "You may need: network access, VPN/proxy config, or manual download." >&2
  exit 1
fi
