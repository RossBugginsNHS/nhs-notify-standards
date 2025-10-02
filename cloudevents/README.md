# NHS Notify – CloudEvents Standards

This folder contains the NHS Notify CloudEvents standards, which define the structure and requirements for event-driven messaging in the NHS Notify ecosystem.

## Overview

CloudEvents is a specification for describing event data in a common way. The NHS Notify CloudEvents standards provide:

- **JSON Schemas** for event payloads and profiles
- **Example event data** for reference and testing
- **Common definitions** for NHS-specific event fields

## Key Files

- [`nhs-notify-profile.schema.json`](nhs-notify-profile.schema.json): Main JSON Schema for NHS Notify CloudEvent profiles.
- [`nhs-notify-example-event.schema.json`](nhs-notify-example-event.schema.json): Example event envelope schema.
 - [`nhs-notify-example-event.schema.json`](nhs-notify-example-event.schema.json): Example event envelope schema.
 - [`nhs-notify-example-event.bundle.schema.json`](nhs-notify-example-event.bundle.schema.json): Bundled single-file variant (all external $ref inlined & nested $id stripped).
- [`nhs-notify-example-event-data.schema.json`](nhs-notify-example-event-data.schema.json): Example event data schema.
- [`nhs-notify-metadata.schema.json`](nhs-notify-metadata.schema.json): Common metadata schema for NHS Notify events.
- [`nhs-notify-payload.schema.json`](nhs-notify-payload.schema.json): Common payload schema for NHS Notify events.
- [`nhs-number.schema.json`](nhs-number.schema.json): NHS Number schema (validates canonical and formatted NHS numbers).
- [`output-example-event.json`](output-example-event.json): Example of a valid CloudEvent payload.


## Schema Docs

Generated static documentation (once you run `npm run docs`) will appear under `docs/`.

- [`index.html`](docs/index.html): NHS Notify CloudEvent schema docs home.
- [`nhs-notify-profile.schema.html`](docs/nhs-notify-profile.schema.html): NHS Notify CloudEvent profile (envelope + constraints).
- [`nhs-notify-example-event.schema.html`](docs/nhs-notify-example-event.schema.html): Example CloudEvent envelope schema.
 - [`nhs-notify-example-event.bundle.schema.html`](docs/nhs-notify-example-event.bundle.schema.html): Bundled single-file variant documentation.
- [`nhs-notify-example-event-data.schema.html`](docs/nhs-notify-example-event-data.schema.html): Example event data payload schema.
- [`nhs-notify-metadata.schema.html`](docs/nhs-notify-metadata.schema.html): Common metadata elements reused across events.
- [`nhs-notify-payload.schema.html`](docs/nhs-notify-payload.schema.html): Base payload wrapper / structure.
- [`nhs-number.schema.html`](docs/nhs-number.schema.html): NHS Number reusable type definitions.


## Generating Example Data

To generate example data from a schema, use the provided Makefile target:

```sh
make generate-default
```

To validate:

```sh
make validate
```

This will run the generator and create a file locally in the `output` folder.

## Producing a Single (Bundled) Schema

Sometimes you may want a self-contained schema file with all `$ref` dependencies inlined (e.g. for tools that cannot resolve external references, or for distribution as one artifact). A bundling script is included.

Bundle an entry schema (keeps shared `$defs` only once):

```sh
make bundle-example   # Bundles nhs-notify-example-event.schema.json
make bundle-profile   # Bundles nhs-notify-profile.schema.json
make bundle-all       # Both of the above
```

Outputs will be written to `output/*.bundle.schema.json`.

Under the hood this uses `json-schema-ref-parser`'s `bundle` (not full `dereference`) so that circular/self references are preserved and shared definitions are not duplicated. If you prefer a fully expanded version (every ref replaced), you can adapt `bundle-schema.ts` to use `dereference()` instead.

Direct invocation:

```sh
npm run bundle -- nhs-notify-example-event.schema.json output/nhs-notify-example-event.bundle.schema.json
```

The resulting bundled schema sets a new `$id` (pointing to where it would live on GitHub Pages) and annotates with a `$comment` indicating it is a bundled artifact.

Validate using the bundled schema (Makefile target also regenerates it first):

```sh
make validate-bundle
```

Implementation detail: during bundling we strip nested `$id` values so AJV treats the result as a single document; otherwise AJV may try to resolve internal refs against those nested IDs and report MissingRefError.

## Usage

1. **Validate CloudEvents:**
    - Use the provided JSON Schema to validate your CloudEvent payloads for NHS Notify compatibility.
    - Example (using the included Node.js script, which supports draft 2020-12):
       ```sh
       node validate.js nhs-notify-profile.schema.json output-example-event.json
       ```
    - The script will print validation errors if the data is invalid.
2. **Reference Examples:**
   - Use the example files as templates for constructing your own events.
3. **Extend or Reuse:**
   - The `common/nhs/` directory contains reusable schema components for NHS identifiers and codes.

## Development

- Propose changes via pull request.
- Keep schemas backward compatible where possible.
- Coordinate with the FHIR IG team for cross-standard consistency.

## Schema Documentation

Static HTML documentation for the JSON Schemas can be generated using `json-schema-static-docs`.

Generate docs (outputs to `docs/`):

```sh
npm install   # first time only to install the new dev dependency
npm run docs
```

Then open `docs/index.html` in a browser (or host the folder via GitHub Pages if desired).

If you add a new schema file, update the `docs` script in `package.json` to include an additional `-i <filename>` argument.

## Related

- [CloudEvents Specification](https://cloudevents.io/)
- [NHS Notify FHIR IG](../fhir/README.md)
