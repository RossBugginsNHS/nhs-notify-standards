

# Example Event

<p>Example  event</p>

<table>
<tbody>
<tr><th>$id</th><td>nhs-notify-example-event.schema.json</td></tr>
<tr><th>$schema</th><td>https://json-schema.org/draft/2020-12/schema</td></tr>
</tbody>
</table>

## Properties

<table class="jssd-properties-table"><thead><tr><th colspan="2">Name</th><th>Type</th></tr></thead><tbody><tr><td colspan="2"><a href="#type">type</a></td><td>String=uk.nhs.notify.ordering.order.read</td></tr><tr><td colspan="2"><a href="#source">source</a></td><td>String=/data-plane/ordering</td></tr><tr><td colspan="2"><a href="#subject">subject</a></td><td>String</td></tr><tr><td colspan="2"><a href="#dataschema">dataschema</a></td><td>String=https://nhsdigital.github.io/nhs-notify-standards/cloudevents/nhs-notify-example-event-data.schema.json</td></tr><tr><td rowspan="1">data</td><td rowspan="1">All of:</td><td>Object</td></tr><tr><td colspan="2" rowspan="1">All of:</td><td>Object (of type <a href="./nhs-notify-profile.schema.html">NHS Notify CloudEvents Profile</a>)</td></tr></tbody></table>



<hr />


## type


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">Yes</td>
    </tr>
    <tr>
      <th>Const</th>
      <td colspan="2">uk.nhs.notify.ordering.order.read</td>
    </tr>
  </tbody>
</table>




## source


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">Yes</td>
    </tr>
    <tr>
      <th>Const</th>
      <td colspan="2">/data-plane/ordering</td>
    </tr>
  </tbody>
</table>




## subject


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Path in the form customer/{id}/order/{id}/item/{id} where each {{id}} is a UUID (xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx).</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    <tr>
      <th>Pattern</th>
      <td colspan="2">^customer/[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}/order/[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}/item/[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$</td>
    </tr>
  </tbody>
</table>




## dataschema


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">Yes</td>
    </tr>
    <tr>
      <th>Const</th>
      <td colspan="2">https://nhsdigital.github.io/nhs-notify-standards/cloudevents/nhs-notify-example-event-data.schema.json</td>
    </tr>
  </tbody>
</table>




## data


<table class="jssd-property-table">
  <tbody>
    <tr><tr><td rowspan="1">Type</td><td rowspan="1">All of:</td><td>Object</td></tr></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">Yes</td>
    </tr>
    
  </tbody>
</table>



### data.0


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">Object</td></tr>
    
  </tbody>
</table>



### data.0.notify-payload


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">Object</td></tr>
    
  </tbody>
</table>



### data.0.notify-payload.notify-data


<table class="jssd-property-table">
  <tbody>
    <tr><tr><td rowspan="1">Type</td><td rowspan="1">All of:</td><td>Object</td></tr></tr>
    
  </tbody>
</table>



### data.0.notify-payload.notify-data.0


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>$id</th>
      <td colspan="2">nhs-notify-example-event-data.schema.json</td>
    </tr>
    <tr>
      <th>Title</th>
      <td colspan="2">Example data type</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">Example data type</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Object</td></tr>
    
  </tbody>
</table>



### data.0.notify-payload.notify-data.0.nhsNumber


<table class="jssd-property-table">
  <tbody>
    <tr><tr><td rowspan="2">Type</td><td rowspan="2">Any of:</td><td>String</td></tr><tr><td>String</td></tr></tr>
    
  </tbody>
</table>



### data.0.notify-payload.notify-data.0.nhsNumber.0


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




### data.0.notify-payload.notify-data.0.nhsNumber.1


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







### data.0.notify-payload.notify-metadata


<table class="jssd-property-table">
  <tbody>
    <tr><tr><td rowspan="1">Type</td><td rowspan="1">All of:</td><td>Object</td></tr></tr>
    
  </tbody>
</table>



### data.0.notify-payload.notify-metadata.0


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Notify Metadata</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Object</td></tr>
    
  </tbody>
</table>



### data.0.notify-payload.notify-metadata.0.teamResponsible


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Const</th>
      <td colspan="2">Team 1</td>
    </tr>
  </tbody>
</table>




### data.0.notify-payload.notify-metadata.0.notifyDomain


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Const</th>
      <td colspan="2">Ordering</td>
    </tr>
  </tbody>
</table>














<hr />

## Schema
```
{
    "$id": "nhs-notify-example-event.schema.json",
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "title": "Example Event",
    "description": "Example  event",
    "type": "object",
    "allOf": [
        {
            "$ref": "./nhs-notify-profile.schema.json"
        }
    ],
    "properties": {
        "type": {
            "type": "string",
            "const": "uk.nhs.notify.ordering.order.read"
        },
        "source": {
            "type": "string",
            "const": "/data-plane/ordering"
        },
        "subject": {
            "type": "string",
            "pattern": "^customer/[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}/order/[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}/item/[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$",
            "description": "Path in the form customer/{id}/order/{id}/item/{id} where each {{id}} is a UUID (xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx)."
        },
        "dataschema": {
            "type": "string",
            "const": "https://nhsdigital.github.io/nhs-notify-standards/cloudevents/nhs-notify-example-event-data.schema.json"
        },
        "data": {
            "type": "object",
            "allOf": [
                {
                    "$ref": "#/$defs/ExamplePayload"
                }
            ]
        }
    },
    "required": [
        "type",
        "source",
        "dataschema",
        "data"
    ],
    "$defs": {
        "ExamplePayload": {
            "type": "object",
            "properties": {
                "notify-payload": {
                    "type": "object",
                    "properties": {
                        "notify-data": {
                            "type": "object",
                            "$ref": "#/$defs/ExampleData"
                        },
                        "notify-metadata": {
                            "type": "object",
                            "$ref": "#/$defs/ExampleMetadata"
                        }
                    }
                }
            }
        },
        "ExampleData": {
            "type": "object",
            "allOf": [
                {
                    "$ref": "./nhs-notify-example-event-data.schema.json"
                }
            ]
        },
        "ExampleMetadata": {
            "type": "object",
            "allOf": [
                {
                    "$ref": "#/$defs/TeamAlphaBravoMetadata"
                }
            ]
        },
        "TeamAlphaBravoMetadata": {
            "$comment": "Notify Metadata",
            "type": "object",
            "description": "Notify Metadata",
            "properties": {
                "teamResponsible": {
                    "type": "string",
                    "const": "Team 1"
                },
                "notifyDomain": {
                    "type": "string",
                    "const": "Ordering"
                }
            }
        }
    }
}
```


