# Makefile for example schemas

DOMAIN = examples
PUBLISH_VERSION = 2025-10
SCHEMA_BASE_URL = https://notify.nhs.uk/cloudevents/schemas
ROOT_DIR = $(shell cd ../.. && pwd)

# Output targets
OUTPUT_DIR = $(ROOT_DIR)/output/$(DOMAIN)/$(PUBLISH_VERSION)
SCHEMAS_DIR = $(ROOT_DIR)/schemas/$(DOMAIN)/$(PUBLISH_VERSION)
EVENTS_DIR = $(ROOT_DIR)/output/$(DOMAIN)/events
SRC_DIR = $(ROOT_DIR)/src/$(DOMAIN)/$(PUBLISH_VERSION)

# Profile schema paths for testing
PROFILE_SCHEMA = $(ROOT_DIR)/output/common/$(PUBLISH_VERSION)/nhs-notify-profile.schema.json
PROFILE_BUNDLED = $(ROOT_DIR)/output/common/$(PUBLISH_VERSION)/nhs-notify-profile.bundle.schema.json
PROFILE_FLATTENED = $(ROOT_DIR)/output/common/$(PUBLISH_VERSION)/nhs-notify-profile.flattened.schema.json

.PHONY: build publish generate test deploy clean

build:
	@echo "Building $(DOMAIN) schemas to output/..."
	@cd $(ROOT_DIR) && npm run build -- $(SRC_DIR)/nhs-notify-example-event-data.schema.yaml $(OUTPUT_DIR)
	@cd $(ROOT_DIR) && npm run build -- $(SRC_DIR)/nhs-notify-example-event.schema.yaml $(OUTPUT_DIR)
	@cd $(ROOT_DIR) && npm run bundle -- $(OUTPUT_DIR)/nhs-notify-example-event.schema.json $(OUTPUT_DIR)/nhs-notify-example-event.bundle.schema.json
	@cd $(ROOT_DIR) && npm run bundle -- --flatten $(OUTPUT_DIR)/nhs-notify-example-event.schema.json $(OUTPUT_DIR)/nhs-notify-example-event.flattened.schema.json

publish:
	@echo "Publishing $(DOMAIN) schemas with public URLs..."
	@cd $(ROOT_DIR) && npm run build -- $(SRC_DIR)/nhs-notify-example-event-data.schema.yaml $(SCHEMAS_DIR) $(SCHEMA_BASE_URL)
	@cd $(ROOT_DIR) && npm run build -- $(SRC_DIR)/nhs-notify-example-event.schema.yaml $(SCHEMAS_DIR) $(SCHEMA_BASE_URL)
	@cd $(ROOT_DIR) && npm run bundle -- $(OUTPUT_DIR)/nhs-notify-example-event.schema.json $(SCHEMAS_DIR)/nhs-notify-example-event.bundle.schema.json
	@cd $(ROOT_DIR) && npm run bundle -- --flatten $(OUTPUT_DIR)/nhs-notify-example-event.schema.json $(SCHEMAS_DIR)/nhs-notify-example-event.flattened.schema.json

generate:
	@echo "Generating $(DOMAIN) events..."
	@cd $(ROOT_DIR) && npm run generate -- $(OUTPUT_DIR)/nhs-notify-example-event.schema.json $(EVENTS_DIR)/output-example-event.json

test:
	@echo "Testing $(DOMAIN) events..."
	@$(ROOT_DIR)/tests/run-validations.sh \
		$(ROOT_DIR)/output \
		$(EVENTS_DIR)/output-example-event.json \
		$(OUTPUT_DIR)/nhs-notify-example-event.schema.json \
		$(OUTPUT_DIR)/nhs-notify-example-event.bundle.schema.json \
		$(OUTPUT_DIR)/nhs-notify-example-event.flattened.schema.json \
		$(PROFILE_SCHEMA) \
		$(PROFILE_BUNDLED) \
		$(PROFILE_FLATTENED)

deploy:
	@echo "=== Deploying $(DOMAIN) schemas ==="
	$(MAKE) build
	$(MAKE) generate
	$(MAKE) test
	$(MAKE) publish
	@echo ""

clean:
	@echo "Cleaning $(DOMAIN) output..."
	rm -rf $(OUTPUT_DIR)/*
	rm -rf $(SCHEMAS_DIR)/*
	rm -rf $(EVENTS_DIR)/*
