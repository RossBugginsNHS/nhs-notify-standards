# Guidance

## Identifiers
- **NHS Number** system: `https://fhir.nhs.uk/Id/nhs-number`.  
  If a Patient resource is provided, include UK Core NHS Number Verification Status when known.  
  References: UK Core extension and NHS guidance.  
  - https://simplifier.net/guide/UK-Core-Implementation-Guide-STU2/Home/ProfilesandExtensions/ExtensionLibrary/Extension-UKCore-NHSNumberVerificationStatus.page.md?version=current

- **Sending Trust (Organization)** – ODS code: `https://fhir.nhs.uk/Id/ods-organization-code`.  
  Validate against the **ODS FHIR API** if required.  
  - https://digital.nhs.uk/developer/api-catalogue/organisation-data-service-fhir

## PDF handling
Use `DocumentReference` with `content.attachment` metadata and set `attachment.url` to a `Binary` carrying the **base64 PDF** (`contentType = application/pdf`).  
- https://build.fhir.org/documentreference.html  
- https://build.fhir.org/binary.html

## Linking context
Use `CommunicationRequest.about[]` to reference `Appointment`, `Location`, etc.  
- https://www.hl7.org/fhir/2020Sep/communicationrequest.shex.html

## Submission bundle
Submit a single **transaction Bundle** with `urn:uuid:` references so the server can resolve entries atomically.  
