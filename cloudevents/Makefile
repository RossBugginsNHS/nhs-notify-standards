# Makefile for cloudevents - orchestrates src/ subdomain Makefiles
include scripts/init.mk

# Allow version override (default is set in src/Makefile)
PUBLISH_VERSION ?= all

.PHONY: build publish publish-json publish-yaml generate test deploy clean build-docs update-readme

config:: _install-dependencies version # Configure development environment (main) @Configuration
	npm install

build:
	@echo "=== Building all schemas (version: $(PUBLISH_VERSION)) ==="
	$(MAKE) -C src build PUBLISH_VERSION=$(PUBLISH_VERSION)

publish:
	@echo "=== Publishing all schemas (JSON + YAML, version: $(PUBLISH_VERSION)) ==="
	$(MAKE) -C src publish PUBLISH_VERSION=$(PUBLISH_VERSION)

publish-json:
	@echo "=== Publishing all schemas (JSON only, version: $(PUBLISH_VERSION)) ==="
	$(MAKE) -C src publish-json PUBLISH_VERSION=$(PUBLISH_VERSION)

publish-yaml:
	@echo "=== Publishing all schemas (YAML only, version: $(PUBLISH_VERSION)) ==="
	$(MAKE) -C src publish-yaml PUBLISH_VERSION=$(PUBLISH_VERSION)

generate:
	@echo "=== Generating all events (version: $(PUBLISH_VERSION)) ==="
	$(MAKE) -C src generate PUBLISH_VERSION=$(PUBLISH_VERSION)

test:
	@echo "=== Running all tests (version: $(PUBLISH_VERSION)) ==="
	$(MAKE) -C src test PUBLISH_VERSION=$(PUBLISH_VERSION)

deploy:
	@echo "=== Deploying all schemas (version: $(PUBLISH_VERSION)) ==="
	$(MAKE) clean
	$(MAKE) version
	$(MAKE) -C src deploy PUBLISH_VERSION=$(PUBLISH_VERSION)
	make build-docs
	make update-readme
	@echo ""
	@echo "✅ Build complete: local schemas tested and distribution schemas ready!"

clean::
	@echo "=== Cleaning output/ and schemas/ directories ==="
	rm -rf ./output
	rm -rf ./schemas
	rm -rf ./docs
	rm -rf .version
	rm -f version.json
	@echo ""

build-docs:
	@echo "=== Generating documentation for all schemas ==="
	npm run build-docs -- ./output ./docs

update-readme:
	@echo "=== Updating README tables ==="
	node src/tools/generator/update-readme.cjs
	@echo ""

version:
	@echo "=== Creating version files ==="
	rm -f .version
	make version-create-effective-file dir=.
	echo "{ \"schemaVersion\": 1, \"label\": \"version\", \"message\": \"$$(head -n 1 .version 2> /dev/null || echo unknown)\", \"color\": \"orange\" }" > version.json
