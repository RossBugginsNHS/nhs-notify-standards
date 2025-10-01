# Makefile for cloudevents-example-generator

.PHONY: generate clean

generate:
	npm run generate -- $(ARGS)

generate-default:
	npm run generate -- nhs-notify-example-event.schema.json output/output-example-event.json

validate:
	node validate.js nhs-notify-example-event.schema.json output-example-event.json
	node validate.js nhs-notify-profile.schema.json output-example-event.json

docs:
	npm run docs