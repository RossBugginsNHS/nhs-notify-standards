

# NHS Notify Metadata

<p>Notify Metadata</p>

<table>
<tbody>
<tr><th>$id</th><td>nhs-notify-metadata.schema.json</td></tr>
<tr><th>$schema</th><td>https://json-schema.org/draft/2020-12/schema</td></tr>
</tbody>
</table>

## Properties

<table class="jssd-properties-table"><thead><tr><th colspan="2">Name</th><th>Type</th></tr></thead><tbody><tr><td colspan="2"><a href="#teamresponsible">teamResponsible</a></td><td>String</td></tr><tr><td colspan="2"><a href="#notifydomain">notifyDomain</a></td><td>String</td></tr><tr><td colspan="2"><a href="#microservice">microservice</a></td><td>String</td></tr><tr><td colspan="2"><a href="#repositoryurl">repositoryUrl</a></td><td>String</td></tr><tr><td colspan="2"><a href="#accountid">accountId</a></td><td>String</td></tr><tr><td colspan="2"><a href="#environment">environment</a></td><td>String</td></tr><tr><td colspan="2"><a href="#instance">instance</a></td><td>String</td></tr><tr><td colspan="2"><a href="#microserviceinstanceid">microserviceInstanceId</a></td><td>String</td></tr><tr><td colspan="2"><a href="#version">version</a></td><td>String</td></tr></tbody></table>


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




## repositoryUrl


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">The URL of the repository containing the microservice codebase</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    <tr>
      <th>Format</th>
      <td colspan="2">uri</td>
    </tr><tr>
      <th>Examples</th>
      <td colspan="2"><li>https://github.com/nhsdigital/nhs-notify-standards</li></td>
    </tr>
  </tbody>
</table>




## accountId


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">The cloud account id where the microservice is deployed, for example the AWS account id</td>
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
      <td colspan="2"><li>123456789012</li><li>my-cloud-account</li></td>
    </tr>
  </tbody>
</table>




## environment


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">The deployment environment of the microservice generating the event</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    <tr>
      <th>Enum</th>
      <td colspan="2"><ul><li>development</li><li>testing</li><li>staging</li><li>production</li></ul></td>
    </tr><tr>
      <th>Examples</th>
      <td colspan="2"><li>production</li></td>
    </tr>
  </tbody>
</table>




## instance


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">The specific instance name of the deployment, eg Notify Standard, or Notify Hot backup, or Notify Priority customers</td>
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
      <td colspan="2"><li>primary</li><li>hot-backup</li><li>priority-customers</li></td>
    </tr>
  </tbody>
</table>




## microserviceInstanceId


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">The specific instance id of the microservice generating the event, for example the lambda id or pod name</td>
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
      <td colspan="2"><li>lambda-1</li><li>pod-1234</li></td>
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
        "repositoryUrl": {
            "type": "string",
            "format": "uri",
            "description": "The URL of the repository containing the microservice codebase",
            "examples": [
                "https://github.com/nhsdigital/nhs-notify-standards"
            ]
        },
        "accountId": {
            "type": "string",
            "minLength": 1,
            "maxLength": 100,
            "pattern": "^[a-zA-Z0-9-]+$",
            "description": "The cloud account id where the microservice is deployed, for example the AWS account id",
            "examples": [
                "123456789012",
                "my-cloud-account"
            ]
        },
        "environment": {
            "type": "string",
            "enum": [
                "development",
                "testing",
                "staging",
                "production"
            ],
            "description": "The deployment environment of the microservice generating the event",
            "examples": [
                "production"
            ]
        },
        "instance": {
            "type": "string",
            "minLength": 1,
            "maxLength": 100,
            "pattern": "^[a-zA-Z0-9-]+$",
            "description": "The specific instance name of the deployment, eg Notify Standard, or Notify Hot backup, or Notify Priority customers",
            "examples": [
                "primary",
                "hot-backup",
                "priority-customers"
            ]
        },
        "microserviceInstanceId": {
            "type": "string",
            "minLength": 1,
            "maxLength": 100,
            "pattern": "^[a-zA-Z0-9-]+$",
            "description": "The specific instance id of the microservice generating the event, for example the lambda id or pod name",
            "examples": [
                "lambda-1",
                "pod-1234"
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


