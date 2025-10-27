#!/bin/bash

# run-validations.sh
# Runs validation tests against multiple schemas
# Usage: run-validations.sh <base_dir> <data_file> <schema1> [schema2] [schema3] ...

# Parse arguments
BASE_DIR="$1"
DATA_FILE="$2"
shift 2

# Remaining arguments are schema paths
SCHEMAS=("$@")

# Extract a friendly name from schema path
get_schema_name() {
    local path="$1"
    # Get filename without path
    local filename=$(basename "$path")
    # Remove .schema.json extension
    local name="${filename%.schema.json}"
    echo "$name"
}

echo ""
echo "=== Running Validation Tests ==="
echo "Data file: $(basename "$DATA_FILE")"
echo ""

failed=0
passed=0
total=${#SCHEMAS[@]}
index=1

for schema_path in "${SCHEMAS[@]}"; do
    schema_name=$(get_schema_name "$schema_path")
    
    echo "[$index/$total] Validating against: $schema_name"
    
    # Capture the validation output
    validation_output=$(npm run validate -- --base "$BASE_DIR" "$schema_path" "$DATA_FILE" 2>&1)
    
    if echo "$validation_output" | grep -q "Valid!"; then
        echo "✅ PASS"
        ((passed++))
    else
        echo "❌ FAIL"
        # Show the actual error output
        echo "$validation_output" | grep -v "^>" | grep -v "^$" | head -20
        failed=1
    fi
    
    echo ""
    ((index++))
done

echo "========================================"
echo "Test Summary: $passed/$total passed"
if [ $failed -eq 0 ]; then
    echo "✅ All validations passed!"
else
    echo "❌ Some validations failed"
fi
echo "========================================"
echo ""

exit $failed
