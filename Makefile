
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
