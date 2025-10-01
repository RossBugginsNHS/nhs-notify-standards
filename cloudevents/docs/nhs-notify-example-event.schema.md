

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
    <tr>
      <th>Description</th>
      <td colspan="2">Concrete event type string for this example event.</td>
    </tr>
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
    <tr>
      <th>Description</th>
      <td colspan="2">Event source for ordering domain examples.</td>
    </tr>
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
    <tr>
      <th>Description</th>
      <td colspan="2">Canonical URI of the example event&#x27;s data schema.</td>
    </tr>
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
    <tr>
      <th>Description</th>
      <td colspan="2">Example payload wrapper containing notify-payload.</td>
    </tr>
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
    <tr>
      <th>Description</th>
      <td colspan="2">Example data-plane object for illustrative purposes.</td>
    </tr>
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
    <tr>
      <th>Description</th>
      <td colspan="2">Example patient&#x27;s NHS Number (accepts canonical or formatted forms).</td>
    </tr>
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
    <tr>
      <th>Description</th>
      <td colspan="2">Example metadata block constrained for this example.</td>
    </tr>
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
    <tr>
      <th>Description</th>
      <td colspan="2">Owning team for the example metadata.</td>
    </tr>
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
    <tr>
      <th>Description</th>
      <td colspan="2">Domain for the example metadata (Ordering).</td>
    </tr>
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
            "const": "uk.nhs.notify.ordering.order.read",
            "description": "Concrete event type string for this example event."
        },
        "source": {
            "type": "string",
            "const": "/data-plane/ordering",
            "description": "Event source for ordering domain examples."
        },
        "subject": {
            "type": "string",
            "pattern": "^customer/[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}/order/[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}/item/[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$",
            "description": "Path in the form customer/{id}/order/{id}/item/{id} where each {{id}} is a UUID (xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx)."
        },
        "dataschema": {
            "type": "string",
            "const": "https://nhsdigital.github.io/nhs-notify-standards/cloudevents/nhs-notify-example-event-data.schema.json",
            "description": "Canonical URI of the example event's data schema."
        },
        "data": {
            "type": "object",
            "allOf": [
                {
                    "$ref": "#/$defs/ExamplePayload"
                }
            ],
            "description": "Example payload wrapper containing notify-payload."
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
                            "$ref": "#/$defs/ExampleData",
                            "description": "Example data-plane object for illustrative purposes."
                        },
                        "notify-metadata": {
                            "type": "object",
                            "$ref": "#/$defs/ExampleMetadata",
                            "description": "Example metadata block constrained for this example."
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
            ],
            "description": "Example data schema reference binding."
        },
        "ExampleMetadata": {
            "type": "object",
            "allOf": [
                {
                    "$ref": "#/$defs/TeamAlphaBravoMetadata"
                }
            ],
            "description": "Example metadata schema reference binding."
        },
        "TeamAlphaBravoMetadata": {
            "$comment": "Notify Metadata",
            "type": "object",
            "description": "Notify Metadata",
            "properties": {
                "teamResponsible": {
                    "type": "string",
                    "const": "Team 1",
                    "description": "Owning team for the example metadata."
                },
                "notifyDomain": {
                    "type": "string",
                    "const": "Ordering",
                    "description": "Domain for the example metadata (Ordering)."
                }
            }
        }
    }
}
```


