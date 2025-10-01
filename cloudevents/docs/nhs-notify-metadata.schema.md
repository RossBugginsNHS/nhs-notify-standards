

# NHS Notify Metadata

<p>Notify Metadata</p>

<table>
<tbody>
<tr><th>$id</th><td>nhs-notify-metadata.schema.json</td></tr>
<tr><th>$schema</th><td>https://json-schema.org/draft/2020-12/schema</td></tr>
</tbody>
</table>

## Properties

<table class="jssd-properties-table"><thead><tr><th colspan="2">Name</th><th>Type</th></tr></thead><tbody><tr><td colspan="2"><a href="#teamresponsible">teamResponsible</a></td><td>String</td></tr><tr><td colspan="2"><a href="#notifydomain">notifyDomain</a></td><td>String</td></tr><tr><td colspan="2"><a href="#microservice">microservice</a></td><td>String</td></tr><tr><td colspan="2"><a href="#version">version</a></td><td>String</td></tr></tbody></table>


## Example



```
{
    "teamResponsible": "Team 1",
    "notifyDomain": "Ordering",
    "microservice": "order-service",
    "version": "1.3.0"
}
```


## Example



```
{
    "teamResponsible": "Team 2",
    "notifyDomain": "Reporting",
    "microservice": "reporting-api",
    "version": "2.0.0"
}
```



<hr />


## teamResponsible


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Owning engineering team accountable for this event&#x27;s domain logic.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">Yes</td>
    </tr>
    <tr>
      <th>Enum</th>
      <td colspan="2"><ul><li>Team 1</li><li>Team 2</li><li>Team 3</li></ul></td>
    </tr><tr>
      <th>Examples</th>
      <td colspan="2"><li>Team 1</li></td>
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
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">Yes</td>
    </tr>
    <tr>
      <th>Enum</th>
      <td colspan="2"><ul><li>Ordering</li><li>Delivering</li><li>Reporting</li><li>Enquiries</li></ul></td>
    </tr><tr>
      <th>Examples</th>
      <td colspan="2"><li>Ordering</li></td>
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
    </tr><tr>
      <th>Examples</th>
      <td colspan="2"><li>order-service</li></td>
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
    </tr><tr>
      <th>Examples</th>
      <td colspan="2"><li>1.3.0</li><li>2.0.0-beta.1</li></td>
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
            "enum": [
                "Team 1",
                "Team 2",
                "Team 3"
            ],
            "description": "Owning engineering team accountable for this event's domain logic.",
            "examples": [
                "Team 1"
            ]
        },
        "notifyDomain": {
            "type": "string",
            "enum": [
                "Ordering",
                "Delivering",
                "Reporting",
                "Enquiries"
            ],
            "description": "High-level business domain to which the event belongs.",
            "examples": [
                "Ordering"
            ]
        },
        "microservice": {
            "type": "string",
            "minLength": 1,
            "maxLength": 100,
            "pattern": "^[a-zA-Z0-9-]+$",
            "description": "The name of the microservice generating the event, e.g. order-service",
            "examples": [
                "order-service"
            ]
        },
        "version": {
            "type": "string",
            "pattern": "^(0|[1-9]\\d*)\\.(0|[1-9]\\d*)\\.(0|[1-9]\\d*)(?:-((?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\\.(?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\\+([0-9a-zA-Z-]+(?:\\.[0-9a-zA-Z-]+)*))?$",
            "description": "Semantic version (SemVer 2.0.0) of the producing microservice at emit time.",
            "examples": [
                "1.3.0",
                "2.0.0-beta.1"
            ]
        }
    },
    "examples": [
        {
            "teamResponsible": "Team 1",
            "notifyDomain": "Ordering",
            "microservice": "order-service",
            "version": "1.3.0"
        },
        {
            "teamResponsible": "Team 2",
            "notifyDomain": "Reporting",
            "microservice": "reporting-api",
            "version": "2.0.0"
        }
    ]
}
```


