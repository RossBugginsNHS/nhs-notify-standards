# NHS Notify – CloudEvents Standards

This folder contains the NHS Notify CloudEvents standards: a set of JSON Schemas, examples and generated documentation that define the structure and requirements for event-driven messaging in the NHS Notify ecosystem.

## Overview

CloudEvents is a vendor-neutral specification for describing event data. These standards provide:

* JSON Schemas for CloudEvent profile / envelope, common payload wrapper, metadata and reusable NHS types
* Example concrete event schema and example event data instance
* Bundled + flattened build artifacts for easier downstream consumption
* Generated markdown documentation for every schema

## JSON Schema Files (authoritative sources)

| File | Purpose |
|------|---------|
| [`nhs-notify-profile.schema.json`](nhs-notify-profile.schema.json) | Profile constraints applied to all NHS Notify CloudEvents (adds required attributes, formats, traceability fields, etc.). |
| [`nhs-notify-profile.bundle.schema.json`](nhs-notify-profile.bundle.schema.json) | Bundled single-document version of the profile (all external `$ref` inlined; nested `$id` removed). |
| [`nhs-notify-profile.flattened.schema.json`](nhs-notify-profile.flattened.schema.json) | Experimental: profile with top-level `allOf` object merges flattened where safe. |
| [`nhs-notify-example-event.schema.json`](nhs-notify-example-event.schema.json) | Concrete example CloudEvent (envelope + `data` shape + refs to profile & payload pieces). |
| [`nhs-notify-example-event.bundle.schema.json`](nhs-notify-example-event.bundle.schema.json) | Bundled variant of the example event schema (single file for distribution). |
| [`nhs-notify-example-event.flattened.schema.json`](nhs-notify-example-event.flattened.schema.json) | Experimental flattened variant of the example event schema (merged properties). |
| [`nhs-notify-example-event-data.schema.json`](nhs-notify-example-event-data.schema.json) | Schema describing only the `data` portion referenced by the example event. |
| [`nhs-notify-payload.schema.json`](nhs-notify-payload.schema.json) | Common wrapper providing `notify-data` (domain/control plane variants) + `notify-metadata`. |
| [`nhs-notify-metadata.schema.json`](nhs-notify-metadata.schema.json) | Common metadata fields (team, domain, version, service, etc.). |
| [`nhs-number.schema.json`](nhs-number.schema.json) | Reusable NHS Number type (canonical and human formatted variants). |
| [`output-example-event.json`](output-example-event.json) | Example instance that validates against the profile + example event schema. |

Notes:
* Bundled artifacts are produced via `json-schema-ref-parser` `bundle()` (not full dereference) to keep shared `$defs` unique.
* Flattened artifacts attempt safe structural merge of `allOf` object schemas; treat as experimental and validate thoroughly before downstream use.

## Generated Schema Documentation (markdown)

Running `npm run docs` (or `make docs`) generates markdown docs under `docs/` for every schema.

| Schema | Doc |
|--------|-----|
| Profile | [`docs/nhs-notify-profile.schema.md`](docs/nhs-notify-profile.schema.md) |
| Profile (bundled) | [`docs/nhs-notify-profile.bundle.schema.md`](docs/nhs-notify-profile.bundle.schema.md) |
| Profile (flattened) | [`docs/nhs-notify-profile.flattened.schema.md`](docs/nhs-notify-profile.flattened.schema.md) |
| Example Event | [`docs/nhs-notify-example-event.schema.md`](docs/nhs-notify-example-event.schema.md) |
| Example Event (bundled) | [`docs/nhs-notify-example-event.bundle.schema.md`](docs/nhs-notify-example-event.bundle.schema.md) |
| Example Event (flattened) | [`docs/nhs-notify-example-event.flattened.schema.md`](docs/nhs-notify-example-event.flattened.schema.md) |
| Example Event Data | [`docs/nhs-notify-example-event-data.schema.md`](docs/nhs-notify-example-event-data.schema.md) |
| Payload Wrapper | [`docs/nhs-notify-payload.schema.md`](docs/nhs-notify-payload.schema.md) |
| Metadata | [`docs/nhs-notify-metadata.schema.md`](docs/nhs-notify-metadata.schema.md) |
| NHS Number Types | [`docs/nhs-number.schema.md`](docs/nhs-number.schema.md) |
| Index | [`docs/index.md`](docs/index.md) |

If you later publish via GitHub Pages you can link to the rendered markdown (or convert to HTML) directly; the `$id` values in bundled schemas are designed to point to a plausible published location.


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

### Flattened Variant (Experimental)

You can also produce an "allOf-flattened" schema which merges top-level object schemas pulled in via `allOf` (e.g., the profile) directly into the concrete event schema's `properties`.

Generate:

```sh
make flatten-example
```

Notes:
* When both schemas define the same property, merging prefers retaining stricter constraints; incompatible constraints fall back to a property-level `allOf` combination.
* Distinct `enum` sets are intersected; if intersection becomes a single value it is collapsed to `const`.
* Conflicting `pattern` values are kept via `allOf` of pattern fragments.
* This is experimental—always validate against your examples to ensure the merged semantics match expectations.

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

## Regenerating Schema Documentation

Markdown documentation is produced with `json-schema-static-docs` via `generate-docs.cjs`.

```sh
npm install        # first time only
npm run docs       # or: make docs
```

Outputs appear in `./docs/*.md`. Commit regenerated docs whenever schemas change so reviewers can diff both.

To add a new schema:
1. Create the new `*.schema.json` file.
2. (If it should be bundled/flattened) add a Makefile target or invoke the existing `bundle` script.
3. Update this README (JSON Schema Files + Generated Schema Documentation tables).
4. Re-run `npm run docs` so a corresponding markdown file is created.

## Related

- [CloudEvents Specification](https://cloudevents.io/)
- [NHS Notify FHIR IG](../fhir/README.md)
