

# 



<table>
<tbody>
<tr><th>$id</th><td>nhs-notify-payload.schema.json</td></tr>
<tr><th>$schema</th><td>https://json-schema.org/draft/2020-12/schema</td></tr>
</tbody>
</table>

## Properties

<table class="jssd-properties-table"><thead><tr><th colspan="2">Name</th><th>Type</th></tr></thead><tbody><tr><td rowspan="2">notify-data</td><td rowspan="2">Any of:</td><td>Object</td></tr><tr><td>Object</td></tr><tr><td rowspan="1">notify-metadata</td><td rowspan="1">All of:</td><td>Object</td></tr></tbody></table>



<hr />


## notify-data


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Domain specific data attributes (variant: DataPlane | ControlPlane).</td>
    </tr>
    <tr><tr><td rowspan="2">Type</td><td rowspan="2">Any of:</td><td>Object</td></tr><tr><td>Object</td></tr></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">Yes</td>
    </tr>
    
  </tbody>
</table>



### notify-data.0


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Placeholder for data-plane specific properties (extend in concrete event schemas).</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Object</td></tr>
    
  </tbody>
</table>




### notify-data.1


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Placeholder for control-plane specific properties (extend in concrete event schemas).</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Object</td></tr>
    
  </tbody>
</table>





## notify-metadata


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Standard metadata set shared across Notify events.</td>
    </tr>
    <tr><tr><td rowspan="1">Type</td><td rowspan="1">All of:</td><td>Object</td></tr></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">Yes</td>
    </tr>
    
  </tbody>
</table>



### notify-metadata.0


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>$id</th>
      <td colspan="2">nhs-notify-metadata.schema.json</td>
    </tr>
    <tr>
      <th>Title</th>
      <td colspan="2">NHS Notify Metadata</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">Notify Metadata</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Object</td></tr>
    
  </tbody>
</table>



### notify-metadata.0.teamResponsible


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Owning engineering team accountable for this event&#x27;s domain logic.</td>
    </tr>
    <tr><tr><td rowspan="3">Type</td><td rowspan="3">One of:</td><td>String</td></tr><tr><td>String</td></tr><tr><td>String</td></tr></tr>
    
  </tbody>
</table>



### notify-metadata.0.teamResponsible.0


<table class="jssd-property-table">
  <tbody>
    
    <tr>
      <th>Const</th>
      <td colspan="2">Team 1</td>
    </tr>
  </tbody>
</table>




### notify-metadata.0.teamResponsible.1


<table class="jssd-property-table">
  <tbody>
    
    <tr>
      <th>Const</th>
      <td colspan="2">Team 2</td>
    </tr>
  </tbody>
</table>




### notify-metadata.0.teamResponsible.2


<table class="jssd-property-table">
  <tbody>
    
    <tr>
      <th>Const</th>
      <td colspan="2">Team 3</td>
    </tr>
  </tbody>
</table>





### notify-metadata.0.notifyDomain


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">High-level business domain to which the event belongs.</td>
    </tr>
    <tr><tr><td rowspan="4">Type</td><td rowspan="4">One of:</td><td>String</td></tr><tr><td>String</td></tr><tr><td>String</td></tr><tr><td>String</td></tr></tr>
    
  </tbody>
</table>



### notify-metadata.0.notifyDomain.0


<table class="jssd-property-table">
  <tbody>
    
    <tr>
      <th>Const</th>
      <td colspan="2">Ordering</td>
    </tr>
  </tbody>
</table>




### notify-metadata.0.notifyDomain.1


<table class="jssd-property-table">
  <tbody>
    
    <tr>
      <th>Const</th>
      <td colspan="2">Delivering</td>
    </tr>
  </tbody>
</table>




### notify-metadata.0.notifyDomain.2


<table class="jssd-property-table">
  <tbody>
    
    <tr>
      <th>Const</th>
      <td colspan="2">Reporting</td>
    </tr>
  </tbody>
</table>




### notify-metadata.0.notifyDomain.3


<table class="jssd-property-table">
  <tbody>
    
    <tr>
      <th>Const</th>
      <td colspan="2">Enquries</td>
    </tr>
  </tbody>
</table>





### notify-metadata.0.microservice


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">The name of the microservice generating the event, e.g. order-service</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Min Length</th>
      <td colspan="2">1</td>
    </tr><tr>
      <th>Max Length</th>
      <td colspan="2">100</td>
    </tr><tr>
      <th>Pattern</th>
      <td colspan="2">^[a-zA-Z0-9-]+$</td>
    </tr>
  </tbody>
</table>




### notify-metadata.0.version


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Semantic version (SemVer 2.0.0) of the producing microservice at emit time.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Pattern</th>
      <td colspan="2">^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$</td>
    </tr>
  </tbody>
</table>











<hr />

## Schema
```
{
    "$id": "nhs-notify-payload.schema.json",
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "$comment": "Notify Payload",
    "type": "object",
    "additionalProperties": false,
    "required": [
        "notify-data",
        "notify-metadata"
    ],
    "properties": {
        "notify-data": {
            "type": "object",
            "anyOf": [
                {
                    "$ref": "#/$defs/DataPlane"
                },
                {
                    "$ref": "#/$defs/ControlPlane"
                }
            ],
            "additionalProperties": true,
            "description": "Domain specific data attributes (variant: DataPlane | ControlPlane)."
        },
        "notify-metadata": {
            "type": "object",
            "allOf": [
                {
                    "$ref": "./nhs-notify-metadata.schema.json"
                }
            ],
            "description": "Standard metadata set shared across Notify events."
        }
    },
    "$defs": {
        "DataPlane": {
            "type": "object",
            "description": "Placeholder for data-plane specific properties (extend in concrete event schemas)."
        },
        "ControlPlane": {
            "type": "object",
            "description": "Placeholder for control-plane specific properties (extend in concrete event schemas)."
        }
    }
}
```


