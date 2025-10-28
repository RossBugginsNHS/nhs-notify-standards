# Makefile for cloudevents - orchestrates src/ subdomain Makefiles
include scripts/init.mk

PUBLISH_VERSION = all
CLOUDEVENTS_BASE_PATH = ./src/cloudevents


config:: _install-dependencies version # Configure development environment (main) @Configuration
	npm install


deploy:
	$(MAKE) -C $(CLOUDEVENTS_BASE_PATH) deploy PUBLISH_VERSION=$(PUBLISH_VERSION)

version:
	@echo "=== Creating version files ==="
	rm -f .version
	make version-create-effective-file dir=.
	echo "{ \"schemaVersion\": 1, \"label\": \"version\", \"message\": \"$$(head -n 1 .version 2> /dev/null || echo unknown)\", \"color\": \"orange\" }" > version.json
