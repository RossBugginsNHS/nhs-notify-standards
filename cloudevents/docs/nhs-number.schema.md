

# NHS Common Types v1.0.0

<p>Reusable types for NHS Notify payload schemas.</p>

<table>
<tbody>
<tr><th>$id</th><td>nhs-number.schema.json</td></tr>
<tr><th>$schema</th><td>https://json-schema.org/draft/2020-12/schema</td></tr>
</tbody>
</table>

## Properties

<table class="jssd-properties-table"><thead><tr><th colspan="2">Name</th><th>Type</th></tr></thead><tbody><tr><td rowspan="2">nhsNumber</td><td rowspan="2">Any of:</td><td>String</td></tr><tr><td>String</td></tr></tbody></table>



<hr />


## nhsNumber


<table class="jssd-property-table">
  <tbody>
    <tr><tr><td rowspan="2">Type</td><td rowspan="2">Any of:</td><td>String</td></tr><tr><td>String</td></tr></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">Yes</td>
    </tr>
    
  </tbody>
</table>



### nhsNumber.0


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">NHS Number (10 digits; last digit is a Modulus-11 check digit).</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Format</th>
      <td colspan="2">nhs-number</td>
    </tr><tr>
      <th>Pattern</th>
      <td colspan="2">^[0-9]{10}$</td>
    </tr>
  </tbody>
</table>




### nhsNumber.1


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Human-entered NHS Number (accepts 3-3-4 with optional spaces or hyphens).</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Format</th>
      <td colspan="2">nhs-number</td>
    </tr><tr>
      <th>Pattern</th>
      <td colspan="2">^(?:[0-9]{3}[- ]?[0-9]{3}[- ]?[0-9]{4})$</td>
    </tr>
  </tbody>
</table>










<hr />

## Schema
```
{
    "$id": "nhs-number.schema.json",
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "title": "NHS Common Types v1.0.0",
    "description": "Reusable types for NHS Notify payload schemas.",
    "type": "object",
    "properties": {
        "nhsNumber": {
            "anyOf": [
                {
                    "$ref": "#/$defs/NhsNumber10"
                },
                {
                    "$ref": "#/$defs/NhsNumberFormatted"
                }
            ]
        }
    },
    "required": [
        "nhsNumber"
    ],
    "$defs": {
        "NhsNumber10": {
            "$comment": "Canonical stored form: exactly 10 digits (no spaces or hyphens).\n10-digit requirement and check-digit semantics come from the NHS Data Dictionary.\nRef: NHS Number attribute & algorithm (Modulus 11).",
            "type": "string",
            "description": "NHS Number (10 digits; last digit is a Modulus-11 check digit).",
            "pattern": "^[0-9]{10}$",
            "format": "nhs-number"
        },
        "NhsNumberFormatted": {
            "$comment": "UI/ingress tolerant form: allows 3-3-4 with optional spaces/hyphens. Still only digits once separators are removed.\nDisplay guidance to use 3-3-4 spacing; systems should accept flexible input.",
            "type": "string",
            "description": "Human-entered NHS Number (accepts 3-3-4 with optional spaces or hyphens).",
            "pattern": "^(?:[0-9]{3}[- ]?[0-9]{3}[- ]?[0-9]{4})$",
            "format": "nhs-number"
        },
        "NhsNumber": {
            "$comment": "Strong type: canonical 10 digits + checksum verified via custom format. Note: 'format' requires runtime support to assert it.",
            "allOf": [
                {
                    "$ref": "#/$defs/NhsNumber10"
                },
                {
                    "format": "nhs-number",
                    "nhsChecksum": true
                }
            ],
            "description": "NHS Number with Mod-11 checksum enforcement."
        }
    }
}
```


