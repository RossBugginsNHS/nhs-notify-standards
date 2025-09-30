#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."
rm -rf output fsh-generated qa temp template *.tgz
echo "🧹 Cleaned build artefacts."
