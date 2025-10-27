

# NHS Notify Metadata

<p>Notify Metadata</p>

<table>
<tbody>
<tr><th>$id</th><td>/common/2025-10/defs/nhs-notify-metadata.schema.json</td></tr>
<tr><th>$schema</th><td>https://json-schema.org/draft/2020-12/schema</td></tr>
</tbody>
</table>

## Properties

<table class="jssd-properties-table"><thead><tr><th colspan="2">Name</th><th>Type</th></tr></thead><tbody><tr><td colspan="2"><a href="#teamresponsible">teamResponsible</a></td><td>String</td></tr><tr><td colspan="2"><a href="#notifydomain">notifyDomain</a></td><td>String</td></tr><tr><td colspan="2"><a href="#microservice">microservice</a></td><td>String</td></tr><tr><td colspan="2"><a href="#repositoryurl">repositoryUrl</a></td><td>String</td></tr><tr><td colspan="2"><a href="#accountid">accountId</a></td><td>String</td></tr><tr><td colspan="2"><a href="#environment">environment</a></td><td>String</td></tr><tr><td colspan="2"><a href="#instance">instance</a></td><td>String</td></tr><tr><td colspan="2"><a href="#microserviceinstanceid">microserviceInstanceId</a></td><td>String</td></tr><tr><td colspan="2"><a href="#microserviceversion">microserviceVersion</a></td><td>String</td></tr><tr><td colspan="2"><a href="#commitsha">commitSha</a></td><td>String</td></tr><tr><td colspan="2"><a href="#buildtimestamp">buildTimestamp</a></td><td>String</td></tr><tr><td colspan="2"><a href="#servicetier">serviceTier</a></td><td>String</td></tr><tr><td colspan="2"><a href="#region">region</a></td><td>String</td></tr><tr><td colspan="2"><a href="#pseudonymisationlevel">pseudonymisationLevel</a></td><td>String</td></tr><tr><td colspan="2"><a href="#replayindicator">replayIndicator</a></td><td>Boolean</td></tr><tr><td colspan="2"><a href="#originaleventid">originalEventId</a></td><td>String</td></tr><tr><td colspan="2"><a href="#integrityhash">integrityHash</a></td><td>String</td></tr><tr><td colspan="2"><a href="#producedbytype">producedByType</a></td><td>String</td></tr></tbody></table>


## Example



```
{
    "teamResponsible": "Team 1",
    "notifyDomain": "Ordering",
    "microservice": "order-service",
    "microserviceVersion": "1.3.0",
    "commitSha": "a1b2c3d",
    "buildTimestamp": "2025-10-03T10:15:30.123Z",
    "serviceTier": "critical",
    "region": "eu-west-2",
    "pseudonymisationLevel": "none",
    "replayIndicator": false,
    "integrityHash": "sha256:aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
}
```


## Example



```
{
    "teamResponsible": "Team 2",
    "notifyDomain": "Reporting",
    "microservice": "reporting-api",
    "microserviceVersion": "2.0.0",
    "commitSha": "deadbee",
    "serviceTier": "standard",
    "region": "eu-west-1",
    "pseudonymisationLevel": "pseudonymised",
    "replayIndicator": true,
    "originalEventId": "6f1c2a53-3d54-4a0a-9a0b-0e9ae2d4c111",
    "integrityHash": "sha256:bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb"
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
      <td colspan="2">Yes</td>
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
      <td colspan="2">Yes</td>
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
      <td colspan="2">Yes</td>
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
      <td colspan="2">Yes</td>
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
      <td colspan="2">Yes</td>
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
      <td colspan="2">Yes</td>
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




## microserviceVersion


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Semantic version (SemVer 2.0.0) of the producing microservice at emit time. eg useful for blue green deployments.</td>
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




## commitSha


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Git commit SHA of the producing build (7-40 hex).</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    <tr>
      <th>Pattern</th>
      <td colspan="2">^[0-9a-f]{7,40}$</td>
    </tr><tr>
      <th>Examples</th>
      <td colspan="2"><li>a1b2c3d</li><li>d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2</li></td>
    </tr>
  </tbody>
</table>




## buildTimestamp


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Timestamp the microservice build artifact was created (UTC).</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    <tr>
      <th>Format</th>
      <td colspan="2">date-time</td>
    </tr><tr>
      <th>Examples</th>
      <td colspan="2"><li>2025-10-03T10:15:30.123Z</li></td>
    </tr>
  </tbody>
</table>




## serviceTier


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Operational criticality tier of the service emitting the event.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    <tr>
      <th>Enum</th>
      <td colspan="2"><ul><li>critical</li><li>standard</li><li>experimental</li></ul></td>
    </tr><tr>
      <th>Examples</th>
      <td colspan="2"><li>critical</li></td>
    </tr>
  </tbody>
</table>




## region


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Deployment region / geography for the emitting instance.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    <tr>
      <th>Enum</th>
      <td colspan="2"><ul><li>eu-west-2</li><li>eu-west-1</li><li>eu-central-1</li></ul></td>
    </tr><tr>
      <th>Examples</th>
      <td colspan="2"><li>eu-west-2</li></td>
    </tr>
  </tbody>
</table>




## pseudonymisationLevel


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Degree of personal data transformation applied to the domain payload prior to emission.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    <tr>
      <th>Enum</th>
      <td colspan="2"><ul><li>none</li><li>tokenised</li><li>pseudonymised</li><li>anonymised</li></ul></td>
    </tr><tr>
      <th>Examples</th>
      <td colspan="2"><li>none</li></td>
    </tr>
  </tbody>
</table>




## replayIndicator


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">True if this event is a replay/backfill of a previously emitted event (not a new business occurrence).</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Boolean</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    <tr>
      <th>Examples</th>
      <td colspan="2"><li>false</li></td>
    </tr>
  </tbody>
</table>




## originalEventId


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Identifier of the original event when replayIndicator&#x3D;true.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    <tr>
      <th>Format</th>
      <td colspan="2">uuid</td>
    </tr><tr>
      <th>Examples</th>
      <td colspan="2"><li>6f1c2a53-3d54-4a0a-9a0b-0e9ae2d4c111</li></td>
    </tr>
  </tbody>
</table>




## integrityHash


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Content integrity hash over the canonical notify-payload (stable key order), prefixed with &#x27;sha256:&#x27;.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    <tr>
      <th>Pattern</th>
      <td colspan="2">^sha256:[0-9a-f]{64}$</td>
    </tr><tr>
      <th>Examples</th>
      <td colspan="2"><li>sha256:3f786850e387550fdab836ed7e6dc881de23001b1a2b3c4d5e6f7a8b9c0d1e2f</li></td>
    </tr>
  </tbody>
</table>




## producedByType


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">The type of compute resource producing the event.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    <tr>
      <th>Enum</th>
      <td colspan="2"><ul><li>lambda</li><li>container</li><li>vm</li><li>other</li></ul></td>
    </tr><tr>
      <th>Examples</th>
      <td colspan="2"><li>lambda</li></td>
    </tr>
  </tbody>
</table>









<hr />

## Schema
```
{
    "$id": "/common/2025-10/defs/nhs-notify-metadata.schema.json",
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "title": "NHS Notify Metadata",
    "type": "object",
    "description": "Notify Metadata",
    "additionalProperties": false,
    "required": [
        "microserviceVersion",
        "microservice",
        "repositoryUrl",
        "accountId",
        "environment",
        "instance",
        "microserviceInstanceId",
        "teamResponsible",
        "notifyDomain"
    ],
    "$defs": {
        "commitSha": {
            "type": "string",
            "pattern": "^[0-9a-f]{7,40}$"
        },
        "uuid": {
            "type": "string",
            "format": "uuid"
        },
        "sha256prefixed": {
            "type": "string",
            "pattern": "^sha256:[0-9a-f]{64}$"
        }
    },
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
        "microserviceVersion": {
            "type": "string",
            "pattern": "^(0|[1-9]\\d*)\\.(0|[1-9]\\d*)\\.(0|[1-9]\\d*)(?:-((?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\\.(?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\\+([0-9a-zA-Z-]+(?:\\.[0-9a-zA-Z-]+)*))?$",
            "description": "Semantic version (SemVer 2.0.0) of the producing microservice at emit time. eg useful for blue green deployments.",
            "examples": [
                "1.3.0",
                "2.0.0-beta.1"
            ]
        },
        "commitSha": {
            "$ref": "#/$defs/commitSha",
            "description": "Git commit SHA of the producing build (7-40 hex).",
            "examples": [
                "a1b2c3d",
                "d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2"
            ]
        },
        "buildTimestamp": {
            "type": "string",
            "format": "date-time",
            "description": "Timestamp the microservice build artifact was created (UTC).",
            "examples": [
                "2025-10-03T10:15:30.123Z"
            ]
        },
        "serviceTier": {
            "type": "string",
            "enum": [
                "critical",
                "standard",
                "experimental"
            ],
            "description": "Operational criticality tier of the service emitting the event.",
            "examples": [
                "critical"
            ]
        },
        "region": {
            "type": "string",
            "enum": [
                "eu-west-2",
                "eu-west-1",
                "eu-central-1"
            ],
            "description": "Deployment region / geography for the emitting instance.",
            "examples": [
                "eu-west-2"
            ]
        },
        "pseudonymisationLevel": {
            "type": "string",
            "enum": [
                "none",
                "tokenised",
                "pseudonymised",
                "anonymised"
            ],
            "description": "Degree of personal data transformation applied to the domain payload prior to emission.",
            "examples": [
                "none"
            ]
        },
        "replayIndicator": {
            "type": "boolean",
            "description": "True if this event is a replay/backfill of a previously emitted event (not a new business occurrence).",
            "examples": [
                false
            ]
        },
        "originalEventId": {
            "$ref": "#/$defs/uuid",
            "description": "Identifier of the original event when replayIndicator=true.",
            "examples": [
                "6f1c2a53-3d54-4a0a-9a0b-0e9ae2d4c111"
            ]
        },
        "integrityHash": {
            "$ref": "#/$defs/sha256prefixed",
            "description": "Content integrity hash over the canonical notify-payload (stable key order), prefixed with 'sha256:'.",
            "examples": [
                "sha256:3f786850e387550fdab836ed7e6dc881de23001b1a2b3c4d5e6f7a8b9c0d1e2f"
            ]
        },
        "producedByType": {
            "type": "string",
            "enum": [
                "lambda",
                "container",
                "vm",
                "other"
            ],
            "description": "The type of compute resource producing the event.",
            "examples": [
                "lambda"
            ]
        }
    },
    "examples": [
        {
            "teamResponsible": "Team 1",
            "notifyDomain": "Ordering",
            "microservice": "order-service",
            "microserviceVersion": "1.3.0",
            "commitSha": "a1b2c3d",
            "buildTimestamp": "2025-10-03T10:15:30.123Z",
            "serviceTier": "critical",
            "region": "eu-west-2",
            "pseudonymisationLevel": "none",
            "replayIndicator": false,
            "integrityHash": "sha256:aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
        },
        {
            "teamResponsible": "Team 2",
            "notifyDomain": "Reporting",
            "microservice": "reporting-api",
            "microserviceVersion": "2.0.0",
            "commitSha": "deadbee",
            "serviceTier": "standard",
            "region": "eu-west-1",
            "pseudonymisationLevel": "pseudonymised",
            "replayIndicator": true,
            "originalEventId": "6f1c2a53-3d54-4a0a-9a0b-0e9ae2d4c111",
            "integrityHash": "sha256:bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb"
        }
    ]
}
```


