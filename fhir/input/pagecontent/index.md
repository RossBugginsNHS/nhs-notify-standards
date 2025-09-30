# NHS Notify – FHIR Letter Printing IG

This guide specifies how secondary care providers submit **patient letters** to NHS Notify’s print-and-post service using **FHIR R4**.

**At a glance**
- Primary resource: `CommunicationRequest`
- PDF carried as: `DocumentReference` + `Binary` (base64 encoded)
- Context linking: `CommunicationRequest.about[]` → `Appointment`, `Location`, etc.
- Sender: `Organization` identified by **ODS code**
- Patient: **NHS Number** as identifier (and optionally a Patient resource with postal address)
- Submission pattern: a **single Bundle** with local `urn:uuid:` references

See **Guidance** for details and **API** for the submission operation.

## Conformance artefacts (quick links)

Profiles (constraints you must follow):
- [Letter CommunicationRequest](StructureDefinition-nhsnotify-letter-communicationrequest.html)
- [Letter PDF DocumentReference](StructureDefinition-nhsnotify-letter-documentreference.html)
- [Letter PDF Binary](StructureDefinition-nhsnotify-letter-binary.html)

Terminology:
- [Letter Categories ValueSet](ValueSet-nhsnotify-letter-category.html)

Examples:
- [Example CommunicationRequest](CommunicationRequest-ExampleLetterCommunicationRequest.html)
- [Example DocumentReference](DocumentReference-ExampleLetterDocRef.html)
- [Example Binary (base64 PDF)](Binary-ExampleLetterBinary.html)
- [Example Patient](Patient-ExamplePatient.html)
- [Example Sender Organization](Organization-ExampleSenderOrg.html)

Full generated list: see the new [Artifacts](artifacts.html) page.

> Background on these FHIR patterns: CommunicationRequest, DocumentReference/Binary, Bundles, and UK Core usage.  
> - CommunicationRequest: https://build.fhir.org/communicationrequest.html  
> - DocumentReference & Binary: https://build.fhir.org/documentreference.html , https://build.fhir.org/binary.html  
> - Bundles & internal references: https://build.fhir.org/bundle.html  
