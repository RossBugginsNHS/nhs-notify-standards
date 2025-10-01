
# NHS Notify – FHIR Letter Printing IG

## Viewing the FHIR Letter Printing Implementation Guide

View the [FHIR Letter Printing Implementation Guide](v1/index.html)

(Manually copied from /output to /v1 - TODO: CICD pipeline for this)

## Quick Start

### Using the Dev Container

This project provides a ready-to-use [VS Code Dev Container](https://code.visualstudio.com/docs/devcontainers/containers) for a consistent development environment with all dependencies pre-installed (Java, Node.js, SUSHI, IG Publisher, etc).

1. Open the repository in VS Code and select **"Reopen in Container"** when prompted.
2. The container will build and run setup scripts automatically.
3. Once started, use the built-in terminal to run build commands (see below).

### Using the Makefile


Common tasks are automated via the Makefile at the repo root:

- **Build the IG:**

	```sh
	make build
	```
	(Runs SUSHI and IG Publisher; output in `fhir/output/`)

- **Serve the IG locally:**

	```sh
	make serve
	```
	(Serves the output folder at [http://localhost:8080](http://localhost:8080))

- **Clean build artefacts:**

	```sh
	make clean
	```

You can also run these commands manually inside the `fhir` folder if you prefer.


This repository folder contains the source for the **NHS Notify Letter Printing** FHIR Implementation Guide (IG).

- **Live site (GitHub Pages):** [https://nhsdigital.github.io/nhs-notify-standards/fhir](https://nhsdigital.github.io/nhs-notify-standards/fhir)
- **Canonical (FHIR):** [https://nhsdigital.github.io/nhs-notify-standards/fhir](https://nhsdigital.github.io/nhs-notify-standards/fhir)
- **FHIR Version:** R4 (4.0.1)


## What this IG defines

- **LetterCommunicationRequest**: A profile on `CommunicationRequest` for instructing the printing and posting of a letter, including patient, recipient, and payload details.
- **LetterDocumentReference**: A profile on `DocumentReference` that acts as a metadata wrapper for the letter PDF, referencing the binary content and providing descriptive information.
- **LetterBinary**: A profile on `Binary` for the base64-encoded PDF payload of the letter, always using `application/pdf`.
- Optionally linked context resources: `Appointment`, `Location`.
- `$submit-letter` operation for submitting a bundle containing these resources, and a server `CapabilityStatement`.
- Use of UK identifiers: NHS Number and ODS code; SNOMED CT for coding where appropriate.


## Build locally

**Prerequisites:**

- Node.js (for SUSHI) and Java 11+ (for IG Publisher & Validator)
- SUSHI: `npm install -g fsh-sushi` (or use npx)
- FHIR Validator (optional): [validator_cli.jar](https://github.com/hapifhir/org.hl7.fhir.core/releases/latest/download/validator_cli.jar)

**Steps:**

```sh
cd fhir

# 1. Generate FHIR artifacts from FSH
sushi .

# 2. Download the IG Publisher jar (first run of the action will cache it; locally do:)
curl -L -o publisher.jar https://github.com/HL7/fhir-ig-publisher/releases/latest/download/org.hl7.fhir.publisher.jar

# 3. Build the IG (outputs to ./output)
java -jar publisher.jar -ig ig.ini

# 4. Validate an example (optional)
java -jar ../validator_cli.jar output/examples.json -version 4.0.1 -ig output/package.tgz
```
