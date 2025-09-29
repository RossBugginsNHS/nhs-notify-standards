Instance: LettersServer
InstanceOf: CapabilityStatement
Usage: #definition
Title: "Letter Printing Server CapabilityStatement"
* status = #active
* date = "2025-09-29"
* kind = #instance
* fhirVersion = #4.0.1
* format = #json
* rest[0].mode = #server
* rest[0].resource[0].type = #CommunicationRequest
* rest[0].resource[0].profile = Canonical(LetterCommunicationRequest)
* rest[0].operation[0].name = "submit-letter"
* rest[0].operation[0].definition = Canonical(SubmitLetterOperation)
