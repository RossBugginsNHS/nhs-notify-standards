# =============================================================================
# NHS Notify – FHIR Letter Printing IG  —  Makefile
# Place this file at the FHIR PROJECT ROOT (same level as the /tools folder)
# =============================================================================

SHELL := /bin/bash
.ONESHELL:
.SHELLFLAGS := -eu -o pipefail -c
.RECIPEPREFIX := >

IG_DIR         ?= .
OUT_DIR        := $(IG_DIR)/output

# =============================================================================
# Build (SUSHI + IG Publisher)
# =============================================================================
.PHONY: build
build:
> ./tools/build.sh

# =============================================================================
# Serve output locally
# =============================================================================
.PHONY: serve
serve:
> echo "▶ Serving $(OUT_DIR) on http://localhost:8080 (Ctrl+C to stop)…"
> cd $(OUT_DIR)
> python3 -m http.server 8080

# =============================================================================
# Clean build artefacts
# =============================================================================
.PHONY: clean
clean:
> echo "▶ Cleaning build artefacts…"
> ./tools/clean.sh
> echo "OK"
