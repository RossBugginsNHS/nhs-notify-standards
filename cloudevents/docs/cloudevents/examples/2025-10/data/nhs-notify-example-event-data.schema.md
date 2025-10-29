

# Example data type

<p>Example data type</p>

<table>
<tbody>
<tr><th>$id</th><td>/examples/2025-10/data/nhs-notify-example-event-data.schema.json</td></tr>
<tr><th>$schema</th><td>https://json-schema.org/draft/2020-12/schema</td></tr>
</tbody>
</table>

## Properties

<table class="jssd-properties-table"><thead><tr><th colspan="2">Name</th><th>Type</th></tr></thead><tbody><tr><td colspan="2"><a href="#notify-payload">notify-payload</a></td><td>Object</td></tr></tbody></table>



<hr />


## notify-payload


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Example event data payload.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Object</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    
  </tbody>
</table>

### Properties
  <table class="jssd-properties-table"><thead><tr><th colspan="2">Name</th><th>Type</th></tr></thead><tbody><tr><td colspan="2"><a href="#notify-payloadnotify-data">notify-data</a></td><td>Object</td></tr><tr><td rowspan="1"><a href="#notify-metadata">notify-metadata</a></td><td rowspan="1">All of:</td><td><a href="#notify-metadata-0">Object</a></td></tr></tbody></table>


### notify-payload.notify-data


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Example notify data section.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Object</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    
  </tbody>
</table>



### notify-payload.notify-data.nhsNumber

  <p>Defined in <a href="../../../common/2025-10/defs/nhs-number.schema.html#/properties/nhsnumber">../../../common/2025-10/defs/nhs-number.schema.html#/properties/nhsnumber</a></p>

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





### notify-payload.notify-metadata


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Example notify metadata section.</td>
    </tr>
    <tr><tr><td rowspan="1"><a href="#type">Type</a></td><td rowspan="1">All of:</td><td><a href="#type-0">Object</a></td></tr></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    
  </tbody>
</table>



### notify-payload.notify-metadata.0


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>$id</th>
      <td colspan="2">/common/2025-10/defs/nhs-notify-metadata.schema.json</td>
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



### notify-payload.notify-metadata.0.teamResponsible


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Owning engineering team accountable for this event&#x27;s domain logic.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Enum</th>
      <td colspan="2"><ul><li>Team 1</li><li>Team 2</li><li>Team 3</li></ul></td>
    </tr><tr>
      <th>Examples</th>
      <td colspan="2"><li>Team 1</li></td>
    </tr>
  </tbody>
</table>




### notify-payload.notify-metadata.0.notifyDomain


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">High-level business domain to which the event belongs.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Enum</th>
      <td colspan="2"><ul><li>Ordering</li><li>Delivering</li><li>Reporting</li><li>Enquiries</li></ul></td>
    </tr><tr>
      <th>Examples</th>
      <td colspan="2"><li>Ordering</li></td>
    </tr>
  </tbody>
</table>




### notify-payload.notify-metadata.0.microservice


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
    </tr><tr>
      <th>Examples</th>
      <td colspan="2"><li>order-service</li></td>
    </tr>
  </tbody>
</table>




### notify-payload.notify-metadata.0.repositoryUrl


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">The URL of the repository containing the microservice codebase</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Format</th>
      <td colspan="2">uri</td>
    </tr><tr>
      <th>Examples</th>
      <td colspan="2"><li>https://github.com/nhsdigital/nhs-notify-standards</li></td>
    </tr>
  </tbody>
</table>




### notify-payload.notify-metadata.0.accountId


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">The cloud account id where the microservice is deployed, for example the AWS account id</td>
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
    </tr><tr>
      <th>Examples</th>
      <td colspan="2"><li>123456789012</li><li>my-cloud-account</li></td>
    </tr>
  </tbody>
</table>




### notify-payload.notify-metadata.0.environment


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">The deployment environment of the microservice generating the event</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Enum</th>
      <td colspan="2"><ul><li>development</li><li>testing</li><li>staging</li><li>production</li></ul></td>
    </tr><tr>
      <th>Examples</th>
      <td colspan="2"><li>production</li></td>
    </tr>
  </tbody>
</table>




### notify-payload.notify-metadata.0.instance


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">The specific instance name of the deployment, eg Notify Standard, or Notify Hot backup, or Notify Priority customers</td>
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
    </tr><tr>
      <th>Examples</th>
      <td colspan="2"><li>primary</li><li>hot-backup</li><li>priority-customers</li></td>
    </tr>
  </tbody>
</table>




### notify-payload.notify-metadata.0.microserviceInstanceId


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">The specific instance id of the microservice generating the event, for example the lambda id or pod name</td>
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
    </tr><tr>
      <th>Examples</th>
      <td colspan="2"><li>lambda-1</li><li>pod-1234</li></td>
    </tr>
  </tbody>
</table>




### notify-payload.notify-metadata.0.microserviceVersion


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Semantic version (SemVer 2.0.0) of the producing microservice at emit time. eg useful for blue green deployments.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Pattern</th>
      <td colspan="2">^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$</td>
    </tr><tr>
      <th>Examples</th>
      <td colspan="2"><li>1.3.0</li><li>2.0.0-beta.1</li></td>
    </tr>
  </tbody>
</table>




### notify-payload.notify-metadata.0.commitSha


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Git commit SHA of the producing build (7-40 hex).</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Pattern</th>
      <td colspan="2">^[0-9a-f]{7,40}$</td>
    </tr><tr>
      <th>Examples</th>
      <td colspan="2"><li>a1b2c3d</li><li>d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2</li></td>
    </tr>
  </tbody>
</table>




### notify-payload.notify-metadata.0.buildTimestamp


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Timestamp the microservice build artifact was created (UTC).</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Format</th>
      <td colspan="2">date-time</td>
    </tr><tr>
      <th>Examples</th>
      <td colspan="2"><li>2025-10-03T10:15:30.123Z</li></td>
    </tr>
  </tbody>
</table>




### notify-payload.notify-metadata.0.serviceTier


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Operational criticality tier of the service emitting the event.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Enum</th>
      <td colspan="2"><ul><li>critical</li><li>standard</li><li>experimental</li></ul></td>
    </tr><tr>
      <th>Examples</th>
      <td colspan="2"><li>critical</li></td>
    </tr>
  </tbody>
</table>




### notify-payload.notify-metadata.0.region


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Deployment region / geography for the emitting instance.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Enum</th>
      <td colspan="2"><ul><li>eu-west-2</li><li>eu-west-1</li><li>eu-central-1</li></ul></td>
    </tr><tr>
      <th>Examples</th>
      <td colspan="2"><li>eu-west-2</li></td>
    </tr>
  </tbody>
</table>




### notify-payload.notify-metadata.0.pseudonymisationLevel


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Degree of personal data transformation applied to the domain payload prior to emission.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Enum</th>
      <td colspan="2"><ul><li>none</li><li>tokenised</li><li>pseudonymised</li><li>anonymised</li></ul></td>
    </tr><tr>
      <th>Examples</th>
      <td colspan="2"><li>none</li></td>
    </tr>
  </tbody>
</table>




### notify-payload.notify-metadata.0.replayIndicator


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">True if this event is a replay/backfill of a previously emitted event (not a new business occurrence).</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Boolean</td></tr>
    <tr>
      <th>Examples</th>
      <td colspan="2"><li>false</li></td>
    </tr>
  </tbody>
</table>




### notify-payload.notify-metadata.0.originalEventId


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Identifier of the original event when replayIndicator&#x3D;true.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Format</th>
      <td colspan="2">uuid</td>
    </tr><tr>
      <th>Examples</th>
      <td colspan="2"><li>6f1c2a53-3d54-4a0a-9a0b-0e9ae2d4c111</li></td>
    </tr>
  </tbody>
</table>




### notify-payload.notify-metadata.0.integrityHash


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Content integrity hash over the canonical notify-payload (stable key order), prefixed with &#x27;sha256:&#x27;.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Pattern</th>
      <td colspan="2">^sha256:[0-9a-f]{64}$</td>
    </tr><tr>
      <th>Examples</th>
      <td colspan="2"><li>sha256:3f786850e387550fdab836ed7e6dc881de23001b1a2b3c4d5e6f7a8b9c0d1e2f</li></td>
    </tr>
  </tbody>
</table>




### notify-payload.notify-metadata.0.producedByType


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">The type of compute resource producing the event.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
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
    "$id": "/examples/2025-10/data/nhs-notify-example-event-data.schema.json",
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "title": "Example data type",
    "description": "Example data type",
    "type": "object",
    "properties": {
        "notify-payload": {
            "type": "object",
            "description": "Example event data payload.",
            "additionalProperties": false,
            "properties": {
                "notify-data": {
                    "type": "object",
                    "description": "Example notify data section.",
                    "additionalProperties": false,
                    "properties": {
                        "nhsNumber": {
                            "$ref": "../../../common/2025-10/defs/nhs-number.schema.json#/properties/nhsNumber",
                            "description": "Example patient's NHS Number (accepts canonical or formatted forms).",
                            "examples": [
                                "9434765919",
                                "943 476 5919",
                                "943-476-5919"
                            ]
                        }
                    },
                    "required": [
                        "nhsNumber"
                    ]
                },
                "notify-metadata": {
                    "type": "object",
                    "description": "Example notify metadata section.",
                    "allOf": [
                        {
                            "$ref": "../../../common/2025-10/defs/nhs-notify-metadata.schema.json"
                        }
                    ]
                }
            }
        }
    }
}
```


