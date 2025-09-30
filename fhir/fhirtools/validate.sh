#!/usr/bin/env bash
set -euo pipefail
if [ $# -lt 1 ]; then
	echo "Usage: tools/validate.sh <file-to-validate.json> [extra validator args]"
	exit 1
fi
cd "$(dirname "$0")/.."
FILE="$1"; shift || true
java -jar "./tools/validator_cli.jar" "$FILE" -version 4.0.1 -ig ./output/package.tgz "$@"
