# Makefile for cloudevents-example-generator

.PHONY: generate clean docs bundle-example bundle-profile bundle-all validate validate-default validate-bundle generate-default

generate:
	npm run generate -- $(ARGS)

generate-default:
	npm run generate -- nhs-notify-example-event.schema.json output/output-example-event.json

validate-default:
	node validate.js nhs-notify-example-event.schema.json output/output-example-event.json
	node validate.js nhs-notify-profile.schema.json output/output-example-event.json


validate:
	node validate.js nhs-notify-example-event.schema.json output-example-event.json
	node validate.js nhs-notify-profile.schema.json output-example-event.json
	node validate.js nhs-notify-example-event.bundle.schema.json output-example-event.json
	node validate.js nhs-notify-example-event.flattened.schema.json output-example-event.json

docs: bundle-all
	npm run docs

bundle-example:
	npm run bundle -- nhs-notify-example-event.schema.json output/nhs-notify-example-event.bundle.schema.json

bundle-profile:
	npm run bundle -- nhs-notify-profile.schema.json output/nhs-notify-profile.bundle.schema.json

bundle-all: bundle-example bundle-profile

flatten-example:
	npm run bundle -- --flatten nhs-notify-example-event.schema.json nhs-notify-example-event.flattened.schema.json

flatten-profile:
	npm run bundle -- --flatten nhs-notify-profile.schema.json nhs-notify-profile.flattened.schema.json

flatten-all: flatten-example flatten-profile

validate-bundle: bundle-example
	node validate.js output/nhs-notify-example-event.bundle.schema.json output-example-event.json