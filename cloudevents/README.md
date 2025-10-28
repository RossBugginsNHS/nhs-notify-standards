# NHS Notify – CloudEvents Standards

This folder contains the NHS Notify CloudEvents standards: a set of JSON Schemas, examples and generated documentation that define the structure and requirements for event-driven messaging in the NHS Notify ecosystem.

## Overview

CloudEvents is a vendor-neutral specification for describing event data. These standards provide:

- **Source schemas** (YAML) organized by domain with modular structure (profiles, definitions, data, events)
- **Published schemas** (JSON) with public URLs for validation and distribution
- **Generated documentation** (Markdown) for every schema
- **Bundled + flattened** build artifacts for easier downstream consumption
- **Example events** demonstrating usage

## Project Structure

```
cloudevents/
├── src/                    # Source YAML schemas (authoritative)
│   ├── common/            # Shared NHS Notify schemas
│   ├── examples/          # Example event domain
│   └── supplier-allocation/ # Supplier allocation domain
├── schemas/               # Published JSON schemas (with public URLs)
├── docs/                  # Generated markdown documentation
├── output/                # Build artifacts (for local validation)
└── Makefile              # Build, test, and deployment commands
```

<!-- AUTO-GENERATED-CONTENT:START -->
## Common Schemas (Shared Across All Domains)

### Version: 2025-10

| Schema | Source (YAML) | Published Schema | Documentation |
| ------ | ------------- | ---------------- | ------------- |
| **NHS Notify Metadata** | [`src/common/2025-10/defs/nhs-notify-metadata.schema.yaml`](src/common/2025-10/defs/nhs-notify-metadata.schema.yaml) | [`schemas/common/2025-10/defs/nhs-notify-metadata.schema.json`](schemas/common/2025-10/defs/nhs-notify-metadata.schema.json) | [`docs/common/2025-10/defs/nhs-notify-metadata.schema.md`](docs/common/2025-10/defs/nhs-notify-metadata.schema.md) |
| **NHS Notify Payload** | [`src/common/2025-10/defs/nhs-notify-payload.schema.yaml`](src/common/2025-10/defs/nhs-notify-payload.schema.yaml) | [`schemas/common/2025-10/defs/nhs-notify-payload.schema.json`](schemas/common/2025-10/defs/nhs-notify-payload.schema.json) | [`docs/common/2025-10/defs/nhs-notify-payload.schema.md`](docs/common/2025-10/defs/nhs-notify-payload.schema.md) |
| **NHS Number** | [`src/common/2025-10/defs/nhs-number.schema.yaml`](src/common/2025-10/defs/nhs-number.schema.yaml) | [`schemas/common/2025-10/defs/nhs-number.schema.json`](schemas/common/2025-10/defs/nhs-number.schema.json) | [`docs/common/2025-10/defs/nhs-number.schema.md`](docs/common/2025-10/defs/nhs-number.schema.md) |
| **NHS Notify Profile** | [`src/common/2025-10/nhs-notify-profile.schema.yaml`](src/common/2025-10/nhs-notify-profile.schema.yaml) | [`schemas/common/2025-10/nhs-notify-profile.schema.json`](schemas/common/2025-10/nhs-notify-profile.schema.json) | [`docs/common/2025-10/nhs-notify-profile.schema.md`](docs/common/2025-10/nhs-notify-profile.schema.md) |

### Version: 2025-11-draft

| Schema | Source (YAML) | Published Schema | Documentation |
| ------ | ------------- | ---------------- | ------------- |
| **Log Item Data** | [`src/common/2025-11-draft/data/log-item-data.schema.yaml`](src/common/2025-11-draft/data/log-item-data.schema.yaml) | [`schemas/common/2025-11-draft/data/log-item-data.schema.json`](schemas/common/2025-11-draft/data/log-item-data.schema.json) | [`docs/common/2025-11-draft/data/log-item-data.schema.md`](docs/common/2025-11-draft/data/log-item-data.schema.md) |
| **NHS Notify Metadata** | [`src/common/2025-11-draft/defs/nhs-notify-metadata.schema.yaml`](src/common/2025-11-draft/defs/nhs-notify-metadata.schema.yaml) | [`schemas/common/2025-11-draft/defs/nhs-notify-metadata.schema.json`](schemas/common/2025-11-draft/defs/nhs-notify-metadata.schema.json) | [`docs/common/2025-11-draft/defs/nhs-notify-metadata.schema.md`](docs/common/2025-11-draft/defs/nhs-notify-metadata.schema.md) |
| **NHS Notify Payload** | [`src/common/2025-11-draft/defs/nhs-notify-payload.schema.yaml`](src/common/2025-11-draft/defs/nhs-notify-payload.schema.yaml) | [`schemas/common/2025-11-draft/defs/nhs-notify-payload.schema.json`](schemas/common/2025-11-draft/defs/nhs-notify-payload.schema.json) | [`docs/common/2025-11-draft/defs/nhs-notify-payload.schema.md`](docs/common/2025-11-draft/defs/nhs-notify-payload.schema.md) |
| **NHS Number** | [`src/common/2025-11-draft/defs/nhs-number.schema.yaml`](src/common/2025-11-draft/defs/nhs-number.schema.yaml) | [`schemas/common/2025-11-draft/defs/nhs-number.schema.json`](schemas/common/2025-11-draft/defs/nhs-number.schema.json) | [`docs/common/2025-11-draft/defs/nhs-number.schema.md`](docs/common/2025-11-draft/defs/nhs-number.schema.md) |
| **Log Item** | [`src/common/2025-11-draft/events/log-item.schema.yaml`](src/common/2025-11-draft/events/log-item.schema.yaml) | [`schemas/common/2025-11-draft/events/log-item.schema.json`](schemas/common/2025-11-draft/events/log-item.schema.json) | [`docs/common/2025-11-draft/events/log-item.schema.md`](docs/common/2025-11-draft/events/log-item.schema.md) |
| **NHS Notify Profile** | [`src/common/2025-11-draft/nhs-notify-profile.schema.yaml`](src/common/2025-11-draft/nhs-notify-profile.schema.yaml) | [`schemas/common/2025-11-draft/nhs-notify-profile.schema.json`](schemas/common/2025-11-draft/nhs-notify-profile.schema.json) | [`docs/common/2025-11-draft/nhs-notify-profile.schema.md`](docs/common/2025-11-draft/nhs-notify-profile.schema.md) |

#### Example Events

| Event Name | Event Instance | Documentation |
| ---------- | -------------- | ------------- |
| **Log Item** | [`docs/common/2025-11-draft/example-events/log-item-event.json`](docs/common/2025-11-draft/example-events/log-item-event.json) | [`docs/common/2025-11-draft/example-events/log-item-event.md`](docs/common/2025-11-draft/example-events/log-item-event.md) |

**Purpose:**

- **NHS Notify Profile**: Base CloudEvents profile with required NHS governance and tracing attributes
- **NHS Notify Payload**: Common wrapper providing data plane and control plane variants with metadata
- **NHS Notify Metadata**: Common metadata fields (team, domain, version, service, etc.)
- **NHS Number**: Reusable NHS Number type (canonical and human-readable formats)

## Examples Domain

**Purpose:** Demonstration event showing complete CloudEvents structure with NHS Notify profile, payload, and metadata

### Version: 2025-10

| Schema Type | Source (YAML) | Published Schema | Documentation |
| ----------- | ------------- | ---------------- | ------------- |
| **Data Schema** | [`src/examples/2025-10/data/nhs-notify-example-event-data.schema.yaml`](src/examples/2025-10/data/nhs-notify-example-event-data.schema.yaml) | [`schemas/examples/2025-10/data/nhs-notify-example-event-data.schema.json`](schemas/examples/2025-10/data/nhs-notify-example-event-data.schema.json) | [`docs/examples/2025-10/data/nhs-notify-example-event-data.schema.md`](docs/examples/2025-10/data/nhs-notify-example-event-data.schema.md) |
| **Event Schema** | [`src/examples/2025-10/events/nhs-notify-example-event.schema.yaml`](src/examples/2025-10/events/nhs-notify-example-event.schema.yaml) | [`schemas/examples/2025-10/events/nhs-notify-example-event.schema.json`](schemas/examples/2025-10/events/nhs-notify-example-event.schema.json) | [`docs/examples/2025-10/events/nhs-notify-example-event.schema.md`](docs/examples/2025-10/events/nhs-notify-example-event.schema.md) |
| **Event (Bundled)** | _Generated_ | [`schemas/examples/2025-10/events/nhs-notify-example-event.bundle.schema.json`](schemas/examples/2025-10/events/nhs-notify-example-event.bundle.schema.json) | [`docs/examples/2025-10/events/nhs-notify-example-event.bundle.schema.md`](docs/examples/2025-10/events/nhs-notify-example-event.bundle.schema.md) |
| **Event (Flattened)** | _Generated_ | [`schemas/examples/2025-10/events/nhs-notify-example-event.flattened.schema.json`](schemas/examples/2025-10/events/nhs-notify-example-event.flattened.schema.json) | [`docs/examples/2025-10/events/nhs-notify-example-event.flattened.schema.md`](docs/examples/2025-10/events/nhs-notify-example-event.flattened.schema.md) |
| **Profile** | [`src/examples/2025-10/example-profile.schema.yaml`](src/examples/2025-10/example-profile.schema.yaml) | [`schemas/examples/2025-10/example-profile.schema.json`](schemas/examples/2025-10/example-profile.schema.json) | [`docs/examples/2025-10/example-profile.schema.md`](docs/examples/2025-10/example-profile.schema.md) |

#### Example Events

| Event Name | Event Instance | Documentation |
| ---------- | -------------- | ------------- |
| **NHS Notify Example Event** | [`docs/examples/2025-10/example-events/nhs-notify-example-event-event.json`](docs/examples/2025-10/example-events/nhs-notify-example-event-event.json) | [`docs/examples/2025-10/example-events/nhs-notify-example-event-event.md`](docs/examples/2025-10/example-events/nhs-notify-example-event-event.md) |

### Version: 2025-11-draft

| Schema Type | Source (YAML) | Published Schema | Documentation |
| ----------- | ------------- | ---------------- | ------------- |
| **Data Schema** | [`src/examples/2025-11-draft/data/nhs-notify-example-event-data.schema.yaml`](src/examples/2025-11-draft/data/nhs-notify-example-event-data.schema.yaml) | [`schemas/examples/2025-11-draft/data/nhs-notify-example-event-data.schema.json`](schemas/examples/2025-11-draft/data/nhs-notify-example-event-data.schema.json) | [`docs/examples/2025-11-draft/data/nhs-notify-example-event-data.schema.md`](docs/examples/2025-11-draft/data/nhs-notify-example-event-data.schema.md) |
| **Event Schema** | [`src/examples/2025-11-draft/events/nhs-notify-example-event.schema.yaml`](src/examples/2025-11-draft/events/nhs-notify-example-event.schema.yaml) | [`schemas/examples/2025-11-draft/events/nhs-notify-example-event.schema.json`](schemas/examples/2025-11-draft/events/nhs-notify-example-event.schema.json) | [`docs/examples/2025-11-draft/events/nhs-notify-example-event.schema.md`](docs/examples/2025-11-draft/events/nhs-notify-example-event.schema.md) |
| **Event (Bundled)** | _Generated_ | [`schemas/examples/2025-11-draft/events/nhs-notify-example-event.bundle.schema.json`](schemas/examples/2025-11-draft/events/nhs-notify-example-event.bundle.schema.json) | [`docs/examples/2025-11-draft/events/nhs-notify-example-event.bundle.schema.md`](docs/examples/2025-11-draft/events/nhs-notify-example-event.bundle.schema.md) |
| **Event (Flattened)** | _Generated_ | [`schemas/examples/2025-11-draft/events/nhs-notify-example-event.flattened.schema.json`](schemas/examples/2025-11-draft/events/nhs-notify-example-event.flattened.schema.json) | [`docs/examples/2025-11-draft/events/nhs-notify-example-event.flattened.schema.md`](docs/examples/2025-11-draft/events/nhs-notify-example-event.flattened.schema.md) |
| **Profile** | [`src/examples/2025-11-draft/example-profile.schema.yaml`](src/examples/2025-11-draft/example-profile.schema.yaml) | [`schemas/examples/2025-11-draft/example-profile.schema.json`](schemas/examples/2025-11-draft/example-profile.schema.json) | [`docs/examples/2025-11-draft/example-profile.schema.md`](docs/examples/2025-11-draft/example-profile.schema.md) |

#### Example Events

| Event Name | Event Instance | Documentation |
| ---------- | -------------- | ------------- |
| **NHS Notify Example Event** | [`docs/examples/2025-11-draft/example-events/nhs-notify-example-event-event.json`](docs/examples/2025-11-draft/example-events/nhs-notify-example-event-event.json) | [`docs/examples/2025-11-draft/example-events/nhs-notify-example-event-event.md`](docs/examples/2025-11-draft/example-events/nhs-notify-example-event-event.md) |


## Supplier Allocation Domain

**Purpose:** Production domain for supplier allocation file processing events

### Version: 2025-10

| Schema Type | Source (YAML) | Published Schema | Documentation |
| ----------- | ------------- | ---------------- | ------------- |
| **File Data** | [`src/supplier-allocation/2025-10/data/file-data.schema.yaml`](src/supplier-allocation/2025-10/data/file-data.schema.yaml) | [`schemas/supplier-allocation/2025-10/data/file-data.schema.json`](schemas/supplier-allocation/2025-10/data/file-data.schema.json) | [`docs/supplier-allocation/2025-10/data/file-data.schema.md`](docs/supplier-allocation/2025-10/data/file-data.schema.md) |
| **Definitions** | [`src/supplier-allocation/2025-10/defs/someobject.schema.yaml`](src/supplier-allocation/2025-10/defs/someobject.schema.yaml) | [`schemas/supplier-allocation/2025-10/defs/someobject.schema.json`](schemas/supplier-allocation/2025-10/defs/someobject.schema.json) | [`docs/supplier-allocation/2025-10/defs/someobject.schema.md`](docs/supplier-allocation/2025-10/defs/someobject.schema.md) |
| **File Printed Event** | [`src/supplier-allocation/2025-10/events/file-printed.schema.yaml`](src/supplier-allocation/2025-10/events/file-printed.schema.yaml) | [`schemas/supplier-allocation/2025-10/events/file-printed.schema.json`](schemas/supplier-allocation/2025-10/events/file-printed.schema.json) | [`docs/supplier-allocation/2025-10/events/file-printed.schema.md`](docs/supplier-allocation/2025-10/events/file-printed.schema.md) |
| **Event (Bundled)** | _Generated_ | [`schemas/supplier-allocation/2025-10/events/file-printed.bundle.schema.json`](schemas/supplier-allocation/2025-10/events/file-printed.bundle.schema.json) | [`docs/supplier-allocation/2025-10/events/file-printed.bundle.schema.md`](docs/supplier-allocation/2025-10/events/file-printed.bundle.schema.md) |
| **Event (Flattened)** | _Generated_ | [`schemas/supplier-allocation/2025-10/events/file-printed.flattened.schema.json`](schemas/supplier-allocation/2025-10/events/file-printed.flattened.schema.json) | [`docs/supplier-allocation/2025-10/events/file-printed.flattened.schema.md`](docs/supplier-allocation/2025-10/events/file-printed.flattened.schema.md) |
| **File Received Event** | [`src/supplier-allocation/2025-10/events/file-received.schema.yaml`](src/supplier-allocation/2025-10/events/file-received.schema.yaml) | [`schemas/supplier-allocation/2025-10/events/file-received.schema.json`](schemas/supplier-allocation/2025-10/events/file-received.schema.json) | [`docs/supplier-allocation/2025-10/events/file-received.schema.md`](docs/supplier-allocation/2025-10/events/file-received.schema.md) |
| **Event (Bundled)** | _Generated_ | [`schemas/supplier-allocation/2025-10/events/file-received.bundle.schema.json`](schemas/supplier-allocation/2025-10/events/file-received.bundle.schema.json) | [`docs/supplier-allocation/2025-10/events/file-received.bundle.schema.md`](docs/supplier-allocation/2025-10/events/file-received.bundle.schema.md) |
| **Event (Flattened)** | _Generated_ | [`schemas/supplier-allocation/2025-10/events/file-received.flattened.schema.json`](schemas/supplier-allocation/2025-10/events/file-received.flattened.schema.json) | [`docs/supplier-allocation/2025-10/events/file-received.flattened.schema.md`](docs/supplier-allocation/2025-10/events/file-received.flattened.schema.md) |
| **Profile** | [`src/supplier-allocation/2025-10/supplier-allocation-profile.schema.yaml`](src/supplier-allocation/2025-10/supplier-allocation-profile.schema.yaml) | [`schemas/supplier-allocation/2025-10/supplier-allocation-profile.schema.json`](schemas/supplier-allocation/2025-10/supplier-allocation-profile.schema.json) | [`docs/supplier-allocation/2025-10/supplier-allocation-profile.schema.md`](docs/supplier-allocation/2025-10/supplier-allocation-profile.schema.md) |

#### Example Events

| Event Name | Event Instance | Documentation |
| ---------- | -------------- | ------------- |
| **File Printed** | [`docs/supplier-allocation/2025-10/example-events/file-printed-event.json`](docs/supplier-allocation/2025-10/example-events/file-printed-event.json) | [`docs/supplier-allocation/2025-10/example-events/file-printed-event.md`](docs/supplier-allocation/2025-10/example-events/file-printed-event.md) |
| **File Received** | [`docs/supplier-allocation/2025-10/example-events/file-received-event.json`](docs/supplier-allocation/2025-10/example-events/file-received-event.json) | [`docs/supplier-allocation/2025-10/example-events/file-received-event.md`](docs/supplier-allocation/2025-10/example-events/file-received-event.md) |


<!-- AUTO-GENERATED-CONTENT:END -->

## Schema Variants Explained

### Modular Schemas (Source)

- **YAML format**: Human-friendly, easier to edit and review
- **Relative `$ref`s**: References between schemas use relative paths
- **Organized structure**: Separated into profiles, definitions, data, and events
- **Location**: `src/{domain}/{version}/`

### Published Schemas (Distribution)

- **JSON format**: Standard for schema validation tools
- **Public URLs**: `$id` fields use `https://notify.nhs.uk/cloudevents/schemas/` URLs
- **Absolute `$ref`s**: All references use public URLs for external consumption
- **Location**: `schemas/{domain}/{version}/`

### Bundled Schemas

- **Self-contained**: All `$ref` dependencies inlined into a single file
- **Shared `$defs`**: Common definitions kept only once (not fully dereferenced)
- **Nested `$id` removed**: Prevents AJV resolution conflicts
- **Use case**: Tools that cannot resolve external references, easier distribution

### Flattened Schemas (Experimental)

- **Merged properties**: Top-level `allOf` object schemas merged where safe
- **Stricter constraints**: When conflicts occur, retains tighter restrictions
- **Property-level `allOf`**: Incompatible constraints fall back to property-level combination
- **Use case**: Simpler schema structure for some validation tools
- **Note**: Always validate thoroughly before downstream use

## Build Commands

```bash
# Build all schemas (YAML → JSON)
make build

# Deploy schemas to schemas/ with public URLs
make deploy

# Generate documentation
make build-docs

# Run validation tests
make test

# Clean all generated files
make clean

# Complete workflow
make deploy build-docs
```

## Usage

### Validate CloudEvents

Use the published JSON Schema to validate your CloudEvent payloads:

```javascript
import Ajv from "ajv/dist/2020.js";
import addFormats from "ajv-formats";

const ajv = new Ajv({ strict: false });
addFormats(ajv);

// Load the published schema
const schema = await fetch(
  "https://notify.nhs.uk/cloudevents/schemas/examples/2025-10/events/nhs-notify-example-event.schema.json"
).then((res) => res.json());

// Validate your event
const valid = ajv.validate(schema, yourEvent);
if (!valid) {
  console.error(ajv.errors);
}
```

### Reference Examples

Example event instances are generated during the build process:

- `output/examples/example-events/nhs-notify-example-event-event.json`
- `output/supplier-allocation/example-events/file-received-event.json`

### Extend for New Domains

1. Create a new domain folder under `src/`:

   ```bash
   mkdir -p src/my-domain/2025-10/{defs,data,events}
   ```

2. Create a domain Makefile:

   ```makefile
   # src/my-domain/Makefile
   DOMAIN := my-domain
   PUBLISH_VERSION := 2025-10
   ROOT_DIR := $(shell cd ../.. && pwd)

   include ../common.mk
   ```

3. Create your YAML schemas following the patterns in existing domains

4. Build and test:
   ```bash
   cd src/my-domain
   make build test
   ```

## Development

### Prerequisites

```bash
npm install
```

### Schema Development Workflow

1. **Edit source YAML** schemas in `src/{domain}/{version}/`
2. **Build** to generate JSON: `make build`
3. **Test** with validation: `make test`
4. **Generate docs**: `make build-docs`
5. **Review** changes in both schemas and documentation
6. **Deploy** when ready: `make deploy`

### Makefile Structure

- **Root Makefile**: Top-level targets for building all domains
- **src/common.mk**: Shared build logic (156 lines, used by all domains)
- **src/{domain}/Makefile**: Domain-specific configuration (9 lines each)

Benefits of distributed Makefiles:

- ✅ 93% reduction in code duplication
- ✅ Each domain can be built independently
- ✅ Consistent build process across all domains
- ✅ Easy to add new domains

### Adding New Schemas

To add a new schema to an existing domain:

1. Create the YAML file in the appropriate directory:

   - Profile: `src/{domain}/{version}/{domain}-profile.schema.yaml`
   - Definitions: `src/{domain}/{version}/defs/*.schema.yaml`
   - Data: `src/{domain}/{version}/data/*.schema.yaml`
   - Events: `src/{domain}/{version}/events/*.schema.yaml`

2. The build system auto-discovers new schemas - just run:

   ```bash
   make build
   ```

3. Update this README to include the new schema in the appropriate table

4. Regenerate documentation:
   ```bash
   make build-docs
   ```

## Technical Notes

### Schema `$id` Convention

- **Local builds** (output/): Use leading `/` for AJV compatibility
  - Example: `$id: /examples/2025-10/events/nhs-notify-example-event.schema.json`
  - Enables relative `$ref` resolution in documentation generation
- **Published schemas** (schemas/): Use full public URLs
  - Example: `$id: https://notify.nhs.uk/cloudevents/schemas/examples/2025-10/events/nhs-notify-example-event.schema.json`
  - Enables external consumers to resolve references

### Bundled Schema Implementation

Bundled artifacts are produced via `json-schema-ref-parser` `bundle()` (not full `dereference`) to:

- Preserve circular references if any exist
- Keep shared `$defs` unique (not duplicated)
- Pull external file references into root schema's `$defs`
- Strip nested `$id` values to avoid AJV resolution conflicts

### Documentation Generation

Markdown documentation uses `json-schema-static-docs` with:

- JSON Schema 2020-12 support
- Custom NHS Number format validation
- Preserved folder structure from `output/` to `docs/`
- All 15 schemas documented (modular + bundled + flattened)

## Related

- [CloudEvents Specification](https://cloudevents.io/)
- [JSON Schema 2020-12](https://json-schema.org/draft/2020-12/json-schema-core.html)
- [NHS Notify FHIR IG](../fhir/README.md)

## License

See repository root for licensing information.
