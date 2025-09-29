# NHS Notify – FHIR Letter Printing IG

This repository folder contains the source for the **NHS Notify Letter Printing** FHIR Implementation Guide (IG).

- **Live site (GitHub Pages):** https://nhsdigital.github.io/nhs-notify-standards/fhir
- **Canonical (FHIR):** https://nhsdigital.github.io/nhs-notify-standards/fhir
- **FHIR Version:** R4 (4.0.1)

## What this IG defines

- A `CommunicationRequest` profile for instructing printing/posting a letter
- A `DocumentReference` + `Binary` pattern for carrying the PDF (base64)
- Optionally linked context: `Appointment`, `Location`
- `$submit-letter` operation and server `CapabilityStatement`
- UK IDs: NHS Number and ODS code; SNOMED CT for coding

## Build locally

Prereqs:
- Node.js (for SUSHI) and Java 11+ (for IG Publisher & Validator)
- SUSHI: `npm install -g fsh-sushi` (or use npx)
- FHIR Validator (optional): https://github.com/hapifhir/org.hl7.fhir.core/releases/latest/download/validator_cli.jar

Steps:

cd fhir
# 1) Generate FHIR artifacts from FSH
sushi .

# 2) Download the IG Publisher jar (first run of the action will cache it; locally do:)
curl -L -o publisher.jar https://github.com/HL7/fhir-ig-publisher/releases/latest/download/org.hl7.fhir.publisher.jar

# 3) Build the IG (outputs to ./output)
java -jar publisher.jar -ig ig.ini

# 4) Validate an example (optional)
java -jar ../validator_cli.jar output/examples.json -version 4.0.1 -ig output/package.tgz
