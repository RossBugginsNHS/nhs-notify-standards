// Example Organization (sender) with ODS
Instance: ExampleSenderOrg
InstanceOf: Organization
Usage: #example
* identifier[0].system = "https://fhir.nhs.uk/Id/ods-organization-code"
* identifier[0].value = "R0A" // example
* name = "Example NHS Trust"

// Example Patient with NHS Number
Instance: ExamplePatient
InstanceOf: Patient
Usage: #example
* identifier[0].system = $NHSNumber
* identifier[0].value = "9449304135"
* name[0].family = "Patient"
* name[0].given[0] = "Pat"
* address[0].line[0] = "1 High Street"
* address[0].city = "Leeds"
* address[0].postalCode = "LS1 1AA"
* address[0].country = "GB"

// Example Binary (PDF)
Instance: ExampleLetterBinary
InstanceOf: LetterBinary
Usage: #example
* meta.profile[0] = "https://nhsdigital.github.io/nhs-notify-standards/fhir/StructureDefinition/nhsnotify-letter-binary"
* contentType = #application/pdf
* data = "SGVsbG8gd29ybGQ=" // 'Hello world' in base64

// Example DocumentReference (points to Binary)
Instance: ExampleLetterDocRef
InstanceOf: LetterDocumentReference
Usage: #example
* status = #current
* type.coding[0].system = $SCT
* type.coding[0].code = #371530004
* subject = Reference(ExamplePatient)
* author[0] = Reference(ExampleSenderOrg)
* content[0].attachment.contentType = #application/pdf
* content[0].attachment.url = "Binary/ExampleLetterBinary"

// Example CommunicationRequest (payload points to DocumentReference)
Instance: ExampleLetterCommunicationRequest
InstanceOf: LetterCommunicationRequest
Usage: #example
* status = #active
* category[0].coding[0].system = $SCT
* category[0].coding[0].code = #736253002
* subject = Reference(ExamplePatient)
* recipient[0] = Reference(ExamplePatient)
* requester = Reference(ExampleSenderOrg)
* sender = Reference(ExampleSenderOrg)
* payload[0].contentReference = Reference(ExampleLetterDocRef)
* authoredOn = "2025-09-29T08:30:00+01:00"

// Example Transaction Bundle with local URNs (rendered in IG examples page)
// (Note: keeping a simplified example instance; a full JSON example is shown in the guide.)