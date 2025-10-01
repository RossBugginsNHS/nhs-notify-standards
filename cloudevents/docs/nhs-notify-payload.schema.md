

# 



<table>
<tbody>
<tr><th>$id</th><td>nhs-notify-payload.schema.json</td></tr>
<tr><th>$schema</th><td>https://json-schema.org/draft/2020-12/schema</td></tr>
</tbody>
</table>

## Properties

<table class="jssd-properties-table"><thead><tr><th colspan="2">Name</th><th>Type</th></tr></thead><tbody><tr><td rowspan="2">notify-data</td><td rowspan="2">Any of:</td><td>Object</td></tr><tr><td>Object</td></tr><tr><td colspan="2"><a href="#notify-metadata">notify-metadata</a></td><td>Object (of type <a href="./nhs-notify-metadata.schema.html">NHS Notify Metadata</a>)</td></tr></tbody></table>


## Example



```
{
    "notify-data": {
        "nhsNumber": "9434765919"
    },
    "notify-metadata": {
        "teamResponsible": "Team 1",
        "notifyDomain": "Ordering",
        "version": "1.3.0",
        "microservice": "order-service"
    }
}
```


## Example



```
{
    "notify-data": {
        "plane": "control",
        "action": "rotate-keys"
    },
    "notify-metadata": {
        "teamResponsible": "Team 2",
        "notifyDomain": "Reporting",
        "version": "2.0.0",
        "microservice": "reporting-api"
    }
}
```



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

  <p>Defined in <a href="./nhs-notify-metadata.schema.html">./nhs-notify-metadata.schema.html</a></p>

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
      <td colspan="2">Standard metadata set shared across Notify events.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Object (of type <a href="./nhs-notify-metadata.schema.html">NHS Notify Metadata</a>)</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">Yes</td>
    </tr>
    
  </tbody>
</table>

### Properties
  <table class="jssd-properties-table"><thead><tr><th colspan="2">Name</th><th>Type</th></tr></thead><tbody><tr><td colspan="2"><a href="#notify-metadatateamresponsible">teamResponsible</a></td><td>String</td></tr><tr><td colspan="2"><a href="#notify-metadatanotifydomain">notifyDomain</a></td><td>String</td></tr><tr><td colspan="2"><a href="#notify-metadatamicroservice">microservice</a></td><td>String</td></tr><tr><td colspan="2"><a href="#notify-metadataversion">version</a></td><td>String</td></tr></tbody></table>








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
            "description": "Domain specific data attributes (variant: DataPlane | ControlPlane).",
            "examples": [
                {
                    "nhsNumber": "9434765919"
                },
                {
                    "plane": "control",
                    "action": "rotate-keys"
                }
            ],
            "$comment": "Union of two variant payload shapes. anyOf is used (instead of oneOf) because the two variants are currently placeholders and not mutually differentiable. Once DataPlane and ControlPlane gain distinct required properties or a discriminator, switch to oneOf (and optionally add a 'plane' enum property) to prevent ambiguous matches."
        },
        "notify-metadata": {
            "$ref": "./nhs-notify-metadata.schema.json",
            "description": "Standard metadata set shared across Notify events.",
            "examples": [
                {
                    "teamResponsible": "Team 1",
                    "notifyDomain": "Ordering",
                    "version": "1.3.0",
                    "microservice": "order-service"
                }
            ]
        }
    },
    "$defs": {
        "DataPlane": {
            "type": "object",
            "description": "Placeholder for data-plane specific properties (extend in concrete event schemas).",
            "$comment": "Add required fields here (e.g. 'plane': 'data') or domain-specific attributes; when distinct from ControlPlane, change notify-data.anyOf to oneOf to enforce exclusivity."
        },
        "ControlPlane": {
            "type": "object",
            "description": "Placeholder for control-plane specific properties (extend in concrete event schemas).",
            "$comment": "As with DataPlane, add identifying / required properties here (e.g. 'plane': 'control'). Ensure divergence for better validation and consumer code generation."
        }
    },
    "examples": [
        {
            "notify-data": {
                "nhsNumber": "9434765919"
            },
            "notify-metadata": {
                "teamResponsible": "Team 1",
                "notifyDomain": "Ordering",
                "version": "1.3.0",
                "microservice": "order-service"
            }
        },
        {
            "notify-data": {
                "plane": "control",
                "action": "rotate-keys"
            },
            "notify-metadata": {
                "teamResponsible": "Team 2",
                "notifyDomain": "Reporting",
                "version": "2.0.0",
                "microservice": "reporting-api"
            }
        }
    ]
}
```


