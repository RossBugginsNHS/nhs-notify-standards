// ---------------------------------------------
// Profile: Letter CommunicationRequest
// ---------------------------------------------
Profile: LetterCommunicationRequest
Parent: CommunicationRequest
Id: nhsnotify-letter-communicationrequest
Title: "Letter CommunicationRequest"
Description: "Request to print and post a patient letter."
* ^status = #draft
* ^publisher = "NHS England"
* ^purpose = "Defines the structure of a letter submission request to NHS Notify print-and-post service."
* ^copyright = "© 2025+ NHS England. Licensed under CC-BY-4.0."

// Core constraints with MustSupport
* status 1..1
* status ^mustSupport = true
* category 0..*
* category ^mustSupport = true
* subject 1..1
* subject ^mustSupport = true
* subject only Reference(Patient)
* subject.identifier 0..1
* subject.identifier ^mustSupport = true
* subject.identifier.system = $NHSNumber (exactly)
* recipient 1..*
* recipient ^mustSupport = true
* payload 1..*
* payload ^mustSupport = true
* payload.contentReference 1..1
* payload.contentReference ^mustSupport = true
* payload.contentReference only Reference(LetterDocumentReference)
* about 0..*
* requester 1..1
* requester ^mustSupport = true
* sender 0..1
* sender ^mustSupport = true
* authoredOn 0..1
* authoredOn ^mustSupport = true

// Terminology binding (may tighten later)
* category from $LetterCategoryVS (example)

// Human-friendly element summaries
* payload.contentReference ^short = "DocumentReference wrapping the PDF binary"
* subject.identifier ^short = "NHS Number used to identify the patient"
* recipient ^short = "Intended recipient entity (e.g. print fulfilment endpoint)"
* requester ^short = "Submitting system or responsible party"
* sender ^short = "Source organization (ODS code)"
* authoredOn ^short = "When the request was authored"

// Narrative hints
* payload ^short = "At least one letter payload (PDF metadata via DocumentReference)"

// ---------------------------------------------
// Profile: Letter DocumentReference
// ---------------------------------------------
Profile: LetterDocumentReference
Parent: DocumentReference
Id: nhsnotify-letter-documentreference
Title: "Letter PDF Document"
Description: "Metadata wrapper for the letter PDF."
* ^status = #draft
// Apply invariant defined below
* obeys inv-letterDocRef-binary
* status = #current (exactly)
* status ^mustSupport = true
* content 1..1
* content ^mustSupport = true
* content.attachment 1..1
* content.attachment ^mustSupport = true
* content.attachment.contentType = #application/pdf (exactly)
* content.attachment.contentType ^mustSupport = true
* content.attachment.url 1..1   // Binary with base64 (submission pattern)
* content.attachment.url ^short = "Reference (e.g. urn:uuid:...) to Binary with base64 PDF"
* content.attachment.url ^comment = "Constrained by inv-letterDocRef-binary to Binary/<id>. Validator will also check the Binary's meta.profile includes the LetterBinary canonical."
* description 0..1
* description ^short = "Human-readable label for the letter"

// Invariant definition (top-level for clarity)
Invariant: inv-letterDocRef-binary
Description: "Attachment URL SHALL reference a Binary with id pattern and that Binary SHALL declare the LetterBinary profile"
Expression: "content.first().attachment.url.matches('Binary/[A-Za-z0-9\\-\\.]{1,64}')"
Severity: #error

// ---------------------------------------------
// Profile: Letter Binary
// ---------------------------------------------
Profile: LetterBinary
Parent: Binary
Id: nhsnotify-letter-binary
Title: "Letter PDF Binary"
Description: "Base64-encoded PDF payload of the letter."
* ^status = #draft
* contentType = #application/pdf (exactly)
* contentType ^mustSupport = true
* contentType ^short = "Always application/pdf"
* securityContext 0..0
* securityContext ^short = "Not used in this context"
* ^purpose = "Carries the actual letter PDF stream referenced by the DocumentReference."
// Guidance: Use application/pdf only. (Compression guidance may be added later.)