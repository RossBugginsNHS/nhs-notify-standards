
# NHS Notify Standards Mono-Repo

This repository contains multiple standards projects for NHS Notify, managed together as a mono-repo:

- **FHIR Letter Printing IG** (`/fhir`):
	- Implementation Guide for FHIR-based letter printing workflows.
	- [Project README](fhir/README.md)

- **CloudEvents Standards** (`/cloudevents`):
	- JSON Schema and examples for event-driven messaging using CloudEvents.
	- [Project README](cloudevents/README.md)


## Development & Workspace

- Each project has its own README and development instructions.
- **Dev containers:**
	- Open the `fhir.code-workspace` file or the `fhir` folder in VS Code to use the FHIR devcontainer.
	- Open the `cloudevents.code-workspace` file or the `cloudevents` folder in VS Code to use a CloudEvents devcontainer (if present).
- **Makefiles:** Provided for the FHIR IG; CloudEvents is schema-based and language-agnostic.

## CI/CD & GitHub Actions

- Each project should have its own workflow file in `.github/workflows/` (e.g., `build-fhir.yml`, `build-cloudevents.yml`).
- Use the `paths` filter in each workflow to only trigger on changes in the relevant subfolder.
- This keeps build, validation, and deployment separate for each project.

## Contributing

- Propose changes via pull request.
- See each subproject's README for details and contact points.
