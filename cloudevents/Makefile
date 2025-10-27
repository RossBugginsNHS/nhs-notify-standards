# Makefile for cloudevents - orchestrates src/ subdomain Makefiles
include scripts/init.mk

.PHONY: build publish publish-json publish-yaml generate test deploy clean build-docs update-readme

config:: _install-dependencies version # Configure development environment (main) @Configuration
	npm install

build:
	@echo "=== Building all schemas ==="
	$(MAKE) -C src build

publish:
	@echo "=== Publishing all schemas (JSON + YAML) ==="
	$(MAKE) -C src publish

publish-json:
	@echo "=== Publishing all schemas (JSON only) ==="
	$(MAKE) -C src publish-json

publish-yaml:
	@echo "=== Publishing all schemas (YAML only) ==="
	$(MAKE) -C src publish-yaml

generate:
	@echo "=== Generating all events ==="
	$(MAKE) -C src generate

test:
	@echo "=== Running all tests ==="
	$(MAKE) -C src test

deploy:
	@echo "=== Deploying all schemas ==="
	$(MAKE) clean
	$(MAKE) version
	$(MAKE) -C src deploy
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
