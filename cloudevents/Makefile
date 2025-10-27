# Makefile for cloudevents-example-generator

.PHONY: generate clean docs bundle-example bundle-profile bundle-all validate validate-default validate-bundle generate-default build-common build-examples build-all build-local

config:
	echo "All started"

publish_version = 2025-10
schema_base_url = https://notify.nhs.uk/cloudevents/schemas

nhs_notify_profile_schema = ./output/common/$(publish_version)/nhs-notify-profile.schema.json
nhs_notify_profile_bundled_schema = ./output/common/$(publish_version)/nhs-notify-profile.bundle.schema.json
nhs_notify_profile_flattened_schema = ./output/common/$(publish_version)/nhs-notify-profile.flattened.schema.json

example_event_output = ./output/examples/events/output-example-event.json
example_event_schema = ./output/examples/$(publish_version)/nhs-notify-example-event.schema.json
example_event_bundled_schema = ./output/examples/$(publish_version)/nhs-notify-example-event.bundle.schema.json
example_event_flattened_schema = ./output/examples/$(publish_version)/nhs-notify-example-event.flattened.schema.json

supplier_allocation_event_output = ./output/supplier-allocation/events/output-supplier-allocation-event.json
supplier_allocation_schema = ./output/supplier-allocation/$(publish_version)/supplier-allocation.schema.json
supplier_allocation_bundled_schema = ./output/supplier-allocation/$(publish_version)/supplier-allocation.bundle.schema.json
supplier_allocation_flattened_schema = ./output/supplier-allocation/$(publish_version)/supplier-allocation.flattened.schema.json

# Local build targets (output/ directory, relative $id)
build-local-common:
	@echo "Building common schemas to output/..."
	npm run build -- ./src/common/$(publish_version)/nhs-notify-metadata.schema.json ./output/common/$(publish_version)
	npm run build -- ./src/common/$(publish_version)/nhs-notify-payload.schema.json ./output/common/$(publish_version)
	npm run build -- ./src/common/$(publish_version)/nhs-notify-profile.schema.json ./output/common/$(publish_version)
	npm run build -- ./src/common/$(publish_version)/nhs-number.schema.json ./output/common/$(publish_version)
	npm run bundle -- ./output/common/$(publish_version)/nhs-notify-profile.schema.json ./output/common/$(publish_version)/nhs-notify-profile.bundle.schema.json
	npm run bundle -- --flatten ./output/common/$(publish_version)/nhs-notify-profile.schema.json ./output/common/$(publish_version)/nhs-notify-profile.flattened.schema.json

build-local-examples:
	@echo "Building example schemas to output/..."
	npm run build -- ./src/examples/$(publish_version)/nhs-notify-example-event-data.schema.json ./output/examples/$(publish_version)
	npm run build -- ./src/examples/$(publish_version)/nhs-notify-example-event.schema.json ./output/examples/$(publish_version)
	npm run bundle -- ./output/examples/$(publish_version)/nhs-notify-example-event.schema.json ./output/examples/$(publish_version)/nhs-notify-example-event.bundle.schema.json
	npm run bundle -- --flatten ./output/examples/$(publish_version)/nhs-notify-example-event.schema.json ./output/examples/$(publish_version)/nhs-notify-example-event.flattened.schema.json

build-local-supplier-allocation:
	@echo "Building supplier-allocation schemas to output/..."
	npm run build -- ./src/supplier-allocation/$(publish_version)/supplier-allocation.schema.json ./output/supplier-allocation/$(publish_version)
	npm run bundle -- ./output/supplier-allocation/$(publish_version)/supplier-allocation.schema.json ./output/supplier-allocation/$(publish_version)/supplier-allocation.bundle.schema.json
	npm run bundle -- --flatten ./output/supplier-allocation/$(publish_version)/supplier-allocation.schema.json ./output/supplier-allocation/$(publish_version)/supplier-allocation.flattened.schema.json

build:
	@echo "=== Building local schemas ==="
	make build-local-common
	make build-local-examples
	make build-local-supplier-allocation
	@echo ""

	@echo "=== All schemas built to output/ successfully! ==="

generate_example_event: 
	@echo "=== Generating example event ==="
	npm run generate -- $(example_event_schema) $(example_event_output)
	@echo ""

generate_supplier_allocation_event: 
	@echo "=== Generating supplier-allocation event ==="
	npm run generate -- $(supplier_allocation_schema) $(supplier_allocation_event_output)
	@echo ""

generate:
	make generate_example_event
	make generate_supplier_allocation_event
	
# Distribution build targets (schemas/ directory, public URL $id)
publish-common:
	@echo "Building common schemas to schemas/ with public URLs..."
	npm run build -- ./src/common/$(publish_version)/nhs-notify-metadata.schema.json ./schemas/common/$(publish_version) $(schema_base_url)
	npm run build -- ./src/common/$(publish_version)/nhs-notify-payload.schema.json ./schemas/common/$(publish_version) $(schema_base_url)
	npm run build -- ./src/common/$(publish_version)/nhs-notify-profile.schema.json ./schemas/common/$(publish_version) $(schema_base_url)
	npm run build -- ./src/common/$(publish_version)/nhs-number.schema.json ./schemas/common/$(publish_version) $(schema_base_url)
	npm run bundle -- ./output/common/$(publish_version)/nhs-notify-profile.schema.json ./schemas/common/$(publish_version)/nhs-notify-profile.bundle.schema.json
	npm run bundle -- --flatten ./output/common/$(publish_version)/nhs-notify-profile.schema.json ./schemas/common/$(publish_version)/nhs-notify-profile.flattened.schema.json


publish-examples:
	@echo "Building example schemas to schemas/ with public URLs..."
	npm run build -- ./src/examples/$(publish_version)/nhs-notify-example-event-data.schema.json ./schemas/examples/$(publish_version) $(schema_base_url)
	npm run build -- ./src/examples/$(publish_version)/nhs-notify-example-event.schema.json ./schemas/examples/$(publish_version) $(schema_base_url)
	npm run bundle -- ./output/examples/$(publish_version)/nhs-notify-example-event.schema.json ./schemas/examples/$(publish_version)/nhs-notify-example-event.bundle.schema.json
	npm run bundle -- --flatten ./output/examples/$(publish_version)/nhs-notify-example-event.schema.json ./schemas/examples/$(publish_version)/nhs-notify-example-event.flattened.schema.json

publish-supplier-allocation:
	@echo "Building supplier-allocation schemas to schemas/ with public URLs..."
	npm run build -- ./src/supplier-allocation/$(publish_version)/supplier-allocation.schema.json ./schemas/supplier-allocation/$(publish_version) $(schema_base_url)
	npm run bundle -- ./output/supplier-allocation/$(publish_version)/supplier-allocation.schema.json ./schemas/supplier-allocation/$(publish_version)/supplier-allocation.bundle.schema.json
	npm run bundle -- --flatten ./output/supplier-allocation/$(publish_version)/supplier-allocation.schema.json ./schemas/supplier-allocation/$(publish_version)/supplier-allocation.flattened.schema.json

publish: 
	@echo "=== Publishing  ==="
	make publish-common 
	make publish-examples
	make publish-supplier-allocation
	@echo ""
	@echo "All schemas built to schemas/ with public URLs successfully!"

test_example_event: 
	@echo "=== Testing  ==="
	@./tests/run-validations.sh \
		./output \
		$(example_event_output) \
		$(example_event_schema) \
		$(example_event_bundled_schema) \
		$(example_event_flattened_schema) \
		$(nhs_notify_profile_schema) \
		$(nhs_notify_profile_bundled_schema) \
		$(nhs_notify_profile_flattened_schema)
	@echo ""

test_supplier_allocation_event: 
	@echo "=== Testing  ==="
	@./tests/run-validations.sh \
		./output \
		$(supplier_allocation_event_output) \
		$(supplier_allocation_schema) \
		$(supplier_allocation_bundled_schema) \
		$(supplier_allocation_flattened_schema) \
		$(nhs_notify_profile_schema) \
		$(nhs_notify_profile_bundled_schema) \
		$(nhs_notify_profile_flattened_schema)
	@echo ""	

test: 
	make test_example_event
	make test_supplier_allocation_event

deploy:
	@echo "=== Deploying  ==="
	make build
	make generate
	make test
	make build
	make publish
	@echo ""
	@echo "✅ Build complete: local schemas tested and distribution schemas ready!"

