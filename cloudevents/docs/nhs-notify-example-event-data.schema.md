

# Example data type

<p>Example data type</p>

<table>
<tbody>
<tr><th>$id</th><td>nhs-notify-example-event-data.schema.json</td></tr>
<tr><th>$schema</th><td>https://json-schema.org/draft/2020-12/schema</td></tr>
</tbody>
</table>

## Properties

<table class="jssd-properties-table"><thead><tr><th colspan="2">Name</th><th>Type</th></tr></thead><tbody><tr><td colspan="2"><a href="#nhsnumber">nhsNumber</a></td><td></td></tr></tbody></table>



<hr />


## nhsNumber

  <p>Defined in <a href="./nhs-number.schema.html#/properties/nhsnumber">./nhs-number.schema.html#/properties/nhsnumber</a></p>

<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Example patient&#x27;s NHS Number (accepts canonical or formatted forms).</td>
    </tr>
    <tr><tr><td rowspan="2">Type</td><td rowspan="2">Any of:</td><td>String</td></tr><tr><td>String</td></tr></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">Yes</td>
    </tr>
    
  </tbody>
</table>









<hr />

## Schema
```
{
    "$id": "nhs-notify-example-event-data.schema.json",
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "title": "Example data type",
    "description": "Example data type",
    "type": "object",
    "additionalProperties": false,
    "properties": {
        "nhsNumber": {
            "$ref": "./nhs-number.schema.json#/properties/nhsNumber",
            "description": "Example patient's NHS Number (accepts canonical or formatted forms)."
        }
    },
    "required": [
        "nhsNumber"
    ]
}
```


