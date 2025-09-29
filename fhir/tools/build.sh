#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."
echo "▶ Running SUSHI…"
sushi .
echo "▶ Running IG Publisher…"
java -jar "./tools/publisher.jar" -ig ig.ini -tx https://tx.fhir.org/r4
echo "✅ Build complete. Output at: ./output"
