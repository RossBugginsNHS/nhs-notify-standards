# NHS Notify – CloudEvents Standards

This folder contains the NHS Notify CloudEvents standards, which define the structure and requirements for event-driven messaging in the NHS Notify ecosystem.

## Overview

CloudEvents is a specification for describing event data in a common way. The NHS Notify CloudEvents standards provide:

- **JSON Schemas** for event payloads and profiles
- **Example event data** for reference and testing
- **Common definitions** for NHS-specific event fields

## Key Files

- [`nhs-notify-profile.schema.json`](nhs-notify-profile.schema.json): Main JSON Schema for NHS Notify CloudEvent profiles.
- [`nhs-notify-example-event.schema.json`](nhs-notify-example-event.schema.json): example event.
- [`nhs-notify-example-event-data.schema.json`](nhs-notify-example-event-data.schema.json): example event data.
- [`output-example-event.json`](output-example-event.json): Example of a valid CloudEvent payload.
- [`common/`](common/): Shared NHS-specific schema definitions and utilities.


## Usage

1. **Validate CloudEvents:**
   - Use the provided JSON Schema to validate your CloudEvent payloads for NHS Notify compatibility.
   - Example (using `ajv`):
     ```sh
     npx ajv validate -s nhs-notify-profile.schema.json -d eoutput-example-event.json
     ```
2. **Reference Examples:**
   - Use the example files as templates for constructing your own events.
3. **Extend or Reuse:**
   - The `common/nhs/` directory contains reusable schema components for NHS identifiers and codes.

## Development

- Propose changes via pull request.
- Keep schemas backward compatible where possible.
- Coordinate with the FHIR IG team for cross-standard consistency.

## Related

- [CloudEvents Specification](https://cloudevents.io/)
- [NHS Notify FHIR IG](../fhir/README.md)
