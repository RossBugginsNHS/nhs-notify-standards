Instance: SubmitLetterOperation
InstanceOf: OperationDefinition
Usage: #definition
Title: "Submit Letter"
Description: "Submit a bundle carrying the letter and context."
* url = "https://nhsdigital.github.io/nhs-notify-standards/fhir/OperationDefinition/submit-letter"
* name = "SubmitLetter"
* status = #active
* kind = #operation
* code = #submit-letter
* system = true
* type = false
* instance = false
* parameter[0].name = #bundle
* parameter[0].use = #in
* parameter[0].min = 1
* parameter[0].max = "1"
* parameter[0].type = #Bundle
* parameter[0].documentation = "transaction/collection Bundle with CommunicationRequest + DocumentReference + Binary (+ context)."
* parameter[1].name = #return
* parameter[1].use = #out
* parameter[1].min = 1
* parameter[1].max = "1"
* parameter[1].type = #OperationOutcome