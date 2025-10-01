

# NHS Notify Metadata

<p>Notify Metadata</p>

<table>
<tbody>
<tr><th>$id</th><td>nhs-notify-metadata.schema.json</td></tr>
<tr><th>$schema</th><td>https://json-schema.org/draft/2020-12/schema</td></tr>
</tbody>
</table>

## Properties

<table class="jssd-properties-table"><thead><tr><th colspan="2">Name</th><th>Type</th></tr></thead><tbody><tr><td rowspan="3">teamResponsible</td><td rowspan="3">One of:</td><td>String</td></tr><tr><td>String</td></tr><tr><td>String</td></tr><tr><td rowspan="4">notifyDomain</td><td rowspan="4">One of:</td><td>String</td></tr><tr><td>String</td></tr><tr><td>String</td></tr><tr><td>String</td></tr><tr><td colspan="2"><a href="#microservice">microservice</a></td><td>String</td></tr><tr><td colspan="2"><a href="#version">version</a></td><td>String</td></tr></tbody></table>



<hr />


## teamResponsible


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Owning engineering team accountable for this event&#x27;s domain logic.</td>
    </tr>
    <tr><tr><td rowspan="3">Type</td><td rowspan="3">One of:</td><td>String</td></tr><tr><td>String</td></tr><tr><td>String</td></tr></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">Yes</td>
    </tr>
    
  </tbody>
</table>



### teamResponsible.0


<table class="jssd-property-table">
  <tbody>
    
    <tr>
      <th>Const</th>
      <td colspan="2">Team 1</td>
    </tr>
  </tbody>
</table>




### teamResponsible.1


<table class="jssd-property-table">
  <tbody>
    
    <tr>
      <th>Const</th>
      <td colspan="2">Team 2</td>
    </tr>
  </tbody>
</table>




### teamResponsible.2


<table class="jssd-property-table">
  <tbody>
    
    <tr>
      <th>Const</th>
      <td colspan="2">Team 3</td>
    </tr>
  </tbody>
</table>





## notifyDomain


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">High-level business domain to which the event belongs.</td>
    </tr>
    <tr><tr><td rowspan="4">Type</td><td rowspan="4">One of:</td><td>String</td></tr><tr><td>String</td></tr><tr><td>String</td></tr><tr><td>String</td></tr></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">Yes</td>
    </tr>
    
  </tbody>
</table>



### notifyDomain.0


<table class="jssd-property-table">
  <tbody>
    
    <tr>
      <th>Const</th>
      <td colspan="2">Ordering</td>
    </tr>
  </tbody>
</table>




### notifyDomain.1


<table class="jssd-property-table">
  <tbody>
    
    <tr>
      <th>Const</th>
      <td colspan="2">Delivering</td>
    </tr>
  </tbody>
</table>




### notifyDomain.2


<table class="jssd-property-table">
  <tbody>
    
    <tr>
      <th>Const</th>
      <td colspan="2">Reporting</td>
    </tr>
  </tbody>
</table>




### notifyDomain.3


<table class="jssd-property-table">
  <tbody>
    
    <tr>
      <th>Const</th>
      <td colspan="2">Enquries</td>
    </tr>
  </tbody>
</table>





## microservice


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">The name of the microservice generating the event, e.g. order-service</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
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




## version


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Semantic version (SemVer 2.0.0) of the producing microservice at emit time.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">Yes</td>
    </tr>
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
    "$id": "nhs-notify-metadata.schema.json",
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "title": "NHS Notify Metadata",
    "type": "object",
    "description": "Notify Metadata",
    "additionalProperties": false,
    "required": [
        "version",
        "teamResponsible",
        "notifyDomain"
    ],
    "properties": {
        "teamResponsible": {
            "type": "string",
            "oneOf": [
                {
                    "const": "Team 1"
                },
                {
                    "const": "Team 2"
                },
                {
                    "const": "Team 3"
                }
            ],
            "description": "Owning engineering team accountable for this event's domain logic."
        },
        "notifyDomain": {
            "type": "string",
            "oneOf": [
                {
                    "const": "Ordering"
                },
                {
                    "const": "Delivering"
                },
                {
                    "const": "Reporting"
                },
                {
                    "const": "Enquries"
                }
            ],
            "description": "High-level business domain to which the event belongs."
        },
        "microservice": {
            "type": "string",
            "minLength": 1,
            "maxLength": 100,
            "pattern": "^[a-zA-Z0-9-]+$",
            "description": "The name of the microservice generating the event, e.g. order-service"
        },
        "version": {
            "type": "string",
            "pattern": "^(0|[1-9]\\d*)\\.(0|[1-9]\\d*)\\.(0|[1-9]\\d*)(?:-((?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\\.(?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\\+([0-9a-zA-Z-]+(?:\\.[0-9a-zA-Z-]+)*))?$",
            "description": "Semantic version (SemVer 2.0.0) of the producing microservice at emit time."
        }
    }
}
```


