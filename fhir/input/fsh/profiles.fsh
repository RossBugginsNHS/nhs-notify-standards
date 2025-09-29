// Letter CommunicationRequest
Profile: LetterCommunicationRequest
Parent: CommunicationRequest
Id: nhsnotify-letter-communicationrequest
Title: "Letter CommunicationRequest"
Description: "Request to print and post a patient letter."
* status 1..1
* category 0..*
* subject 1..1
* subject only Reference(Patient)
* subject.identifier 0..1
* subject.identifier.system = $NHSNumber (exactly)
* recipient 1..*
* payload 1..*
* payload.contentReference 1..1
* payload.contentReference only Reference(DocumentReference)
* about 0..*
* requester 1..1
* sender 0..1
* authoredOn 0..1

// PDF metadata wrapper
Profile: LetterDocumentReference
Parent: DocumentReference
Id: nhsnotify-letter-documentreference
Title: "Letter PDF Document"
Description: "Metadata wrapper for the letter PDF."
* status = #current (exactly)
* content 1..1
* content.attachment 1..1
* content.attachment.contentType = #application/pdf (exactly)
* content.attachment.url 1..1   // Binary with base64

// Base64 PDF
Profile: LetterBinary
Parent: Binary
Id: nhsnotify-letter-binary
Title: "Letter PDF Binary"
* contentType = #application/pdf (exactly)