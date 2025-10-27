# Makefile for supplier-allocation schemas

DOMAIN = supplier-allocation
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
	@cd $(ROOT_DIR) && npm run build -- $(SRC_DIR)/supplier-allocation.schema.yaml $(OUTPUT_DIR)
	@cd $(ROOT_DIR) && npm run bundle -- $(OUTPUT_DIR)/supplier-allocation.schema.json $(OUTPUT_DIR)/supplier-allocation.bundle.schema.json
	@cd $(ROOT_DIR) && npm run bundle -- --flatten $(OUTPUT_DIR)/supplier-allocation.schema.json $(OUTPUT_DIR)/supplier-allocation.flattened.schema.json
	@cd $(ROOT_DIR) && npm run build -- $(SRC_DIR)/file-received.schema.yaml $(OUTPUT_DIR)
	@cd $(ROOT_DIR) && npm run bundle -- $(OUTPUT_DIR)/file-received.schema.json $(OUTPUT_DIR)/file-received.bundle.schema.json
	@cd $(ROOT_DIR) && npm run bundle -- --flatten $(OUTPUT_DIR)/file-received.schema.json $(OUTPUT_DIR)/file-received.flattened.schema.json

publish:
	@echo "Publishing $(DOMAIN) schemas with public URLs..."
	@cd $(ROOT_DIR) && npm run build -- $(SRC_DIR)/supplier-allocation.schema.yaml $(SCHEMAS_DIR) $(SCHEMA_BASE_URL)
	@cd $(ROOT_DIR) && npm run bundle -- $(OUTPUT_DIR)/supplier-allocation.schema.json $(SCHEMAS_DIR)/supplier-allocation.bundle.schema.json
	@cd $(ROOT_DIR) && npm run bundle -- --flatten $(OUTPUT_DIR)/supplier-allocation.schema.json $(SCHEMAS_DIR)/supplier-allocation.flattened.schema.json
	@cd $(ROOT_DIR) && npm run build -- $(SRC_DIR)/file-received.schema.yaml $(SCHEMAS_DIR) $(SCHEMA_BASE_URL)
	@cd $(ROOT_DIR) && npm run bundle -- $(OUTPUT_DIR)/file-received.schema.json $(SCHEMAS_DIR)/file-received.bundle.schema.json
	@cd $(ROOT_DIR) && npm run bundle -- --flatten $(OUTPUT_DIR)/file-received.schema.json $(SCHEMAS_DIR)/file-received.flattened.schema.json

generate:
	@echo "Generating $(DOMAIN) events..."
	@cd $(ROOT_DIR) && npm run generate -- $(OUTPUT_DIR)/supplier-allocation.schema.json $(EVENTS_DIR)/output-supplier-allocation-event.json
	@cd $(ROOT_DIR) && npm run generate -- $(OUTPUT_DIR)/file-received.schema.json $(EVENTS_DIR)/file-received-event.json

test:
	@echo "Testing $(DOMAIN) events..."
	@FAILED=0; \
	$(ROOT_DIR)/tests/run-validations.sh \
		$(ROOT_DIR)/output \
		$(EVENTS_DIR)/output-supplier-allocation-event.json \
		$(OUTPUT_DIR)/supplier-allocation.schema.json \
		$(OUTPUT_DIR)/supplier-allocation.bundle.schema.json \
		$(OUTPUT_DIR)/supplier-allocation.flattened.schema.json \
		$(PROFILE_SCHEMA) \
		$(PROFILE_BUNDLED) \
		$(PROFILE_FLATTENED) || FAILED=1; \
	$(ROOT_DIR)/tests/run-validations.sh \
		$(ROOT_DIR)/output \
		$(EVENTS_DIR)/file-received-event.json \
		$(OUTPUT_DIR)/file-received.schema.json \
		$(OUTPUT_DIR)/file-received.bundle.schema.json \
		$(OUTPUT_DIR)/file-received.flattened.schema.json \
		$(PROFILE_SCHEMA) \
		$(PROFILE_BUNDLED) \
		$(PROFILE_FLATTENED) || FAILED=1; \
	exit $$FAILED

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
