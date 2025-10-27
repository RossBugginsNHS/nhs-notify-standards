# Makefile for common schemas

DOMAIN = common
PUBLISH_VERSION = 2025-10
SCHEMA_BASE_URL = https://notify.nhs.uk/cloudevents/schemas
ROOT_DIR = $(shell cd ../.. && pwd)

# Source files
SOURCES = $(wildcard $(PUBLISH_VERSION)/*.schema.yaml)

# Output targets
OUTPUT_DIR = $(ROOT_DIR)/output/$(DOMAIN)/$(PUBLISH_VERSION)
SCHEMAS_DIR = $(ROOT_DIR)/schemas/$(DOMAIN)/$(PUBLISH_VERSION)
SRC_DIR = $(ROOT_DIR)/src/$(DOMAIN)/$(PUBLISH_VERSION)

.PHONY: build publish deploy clean test

build:
	@echo "Building $(DOMAIN) schemas to output/..."
	@cd $(ROOT_DIR) && npm run build -- $(SRC_DIR)/nhs-notify-metadata.schema.yaml $(OUTPUT_DIR)
	@cd $(ROOT_DIR) && npm run build -- $(SRC_DIR)/nhs-notify-payload.schema.yaml $(OUTPUT_DIR)
	@cd $(ROOT_DIR) && npm run build -- $(SRC_DIR)/nhs-notify-profile.schema.yaml $(OUTPUT_DIR)
	@cd $(ROOT_DIR) && npm run build -- $(SRC_DIR)/nhs-number.schema.yaml $(OUTPUT_DIR)
	@cd $(ROOT_DIR) && npm run bundle -- $(OUTPUT_DIR)/nhs-notify-profile.schema.json $(OUTPUT_DIR)/nhs-notify-profile.bundle.schema.json
	@cd $(ROOT_DIR) && npm run bundle -- --flatten $(OUTPUT_DIR)/nhs-notify-profile.schema.json $(OUTPUT_DIR)/nhs-notify-profile.flattened.schema.json

publish:
	@echo "Publishing $(DOMAIN) schemas with public URLs..."
	@cd $(ROOT_DIR) && npm run build -- $(SRC_DIR)/nhs-notify-metadata.schema.yaml $(SCHEMAS_DIR) $(SCHEMA_BASE_URL)
	@cd $(ROOT_DIR) && npm run build -- $(SRC_DIR)/nhs-notify-payload.schema.yaml $(SCHEMAS_DIR) $(SCHEMA_BASE_URL)
	@cd $(ROOT_DIR) && npm run build -- $(SRC_DIR)/nhs-notify-profile.schema.yaml $(SCHEMAS_DIR) $(SCHEMA_BASE_URL)
	@cd $(ROOT_DIR) && npm run build -- $(SRC_DIR)/nhs-number.schema.yaml $(SCHEMAS_DIR) $(SCHEMA_BASE_URL)
	@cd $(ROOT_DIR) && npm run bundle -- $(OUTPUT_DIR)/nhs-notify-profile.schema.json $(SCHEMAS_DIR)/nhs-notify-profile.bundle.schema.json
	@cd $(ROOT_DIR) && npm run bundle -- --flatten $(OUTPUT_DIR)/nhs-notify-profile.schema.json $(SCHEMAS_DIR)/nhs-notify-profile.flattened.schema.json

deploy:
	@echo "=== Deploying $(DOMAIN) schemas ==="
	$(MAKE) build
	$(MAKE) publish
	@echo ""

clean:
	@echo "Cleaning $(DOMAIN) output..."
	rm -rf $(OUTPUT_DIR)/*
	rm -rf $(SCHEMAS_DIR)/*
