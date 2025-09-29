# =============================================================================
# NHS Notify – FHIR Letter Printing IG  —  Makefile
# Place this file at the REPO ROOT (same level as the /fhir folder)
# =============================================================================

SHELL := /bin/bash
.ONESHELL:
.SHELLFLAGS := -eu -o pipefail -c
.RECIPEPREFIX := >

IG_DIR         ?= fhir
OUT_DIR        := $(IG_DIR)/output

# =============================================================================
# Build (SUSHI + IG Publisher)
# =============================================================================
.PHONY: build
build:
> cd $(IG_DIR)
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
> rm -rf $(OUT_DIR) $(IG_DIR)/fsh-generated $(IG_DIR)/qa $(IG_DIR)/temp $(IG_DIR)/template
> find $(IG_DIR) -maxdepth 1 -name '*.tgz' -delete
> echo "OK"

# =============================================================================
# Help
# =============================================================================
.PHONY: help
help:
> echo ""
> echo "NHS Notify – FHIR IG (Make targets)"
> echo "-----------------------------------"
> echo "make build      # run SUSHI + IG Publisher (one-shot)"
> echo "make serve      # serve ./fhir/output on http://localhost:8080"
> echo "make clean      # remove build artefacts"
> echo "make help       # show this help message"
> echo ""
