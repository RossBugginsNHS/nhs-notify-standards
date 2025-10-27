# Makefile for cloudevents - orchestrates src/ subdomain Makefiles

.PHONY: build publish generate test deploy clean

build:
	@echo "=== Building all schemas ==="
	$(MAKE) -C src build

publish:
	@echo "=== Publishing all schemas ==="
	$(MAKE) -C src publish

generate:
	@echo "=== Generating all events ==="
	$(MAKE) -C src generate

test:
	@echo "=== Running all tests ==="
	$(MAKE) -C src test

deploy:
	@echo "=== Deploying all schemas ==="
	$(MAKE) clean
	$(MAKE) -C src deploy
	@echo ""
	@echo "✅ Build complete: local schemas tested and distribution schemas ready!"

clean:
	@echo "=== Cleaning output/ and schemas/ directories ==="
	rm -rf ./output
	rm -rf ./schemas
	rm -rf ./docs
	@echo ""

build-docs: deploy
	rm -fr ./docs/*
	@echo "=== Generating documentation for all schemas ==="
	npm run build-docs -- ./output ./docs


