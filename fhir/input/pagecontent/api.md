# API

## Operation: `$submit-letter`

A convenience operation to submit a self-contained bundle carrying:
- `CommunicationRequest` (profile: **LetterCommunicationRequest**),
- `DocumentReference` (profile: **LetterDocumentReference**) referencing
- `Binary` (profile: **LetterBinary**) with the base64 PDF,
- `Organization` (sender, with ODS),
- optional `Patient`, `Appointment`, `Location`, etc.

**Endpoint**