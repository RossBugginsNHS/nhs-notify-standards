

# Example Event

<p>Example  event</p>

<table>
<tbody>
<tr><th>$id</th><td>/examples/2025-10/events/nhs-notify-example-event.bundle.schema.json</td></tr>
<tr><th>$schema</th><td>https://json-schema.org/draft/2020-12/schema</td></tr>
</tbody>
</table>

## Properties

<table class="jssd-properties-table"><thead><tr><th colspan="2">Name</th><th>Type</th></tr></thead><tbody><tr><td colspan="2"><a href="#type">type</a></td><td>String=uk.nhs.notify.ordering.order.read.v1</td></tr><tr><td colspan="2"><a href="#source">source</a></td><td>String</td></tr><tr><td colspan="2"><a href="#subject">subject</a></td><td>String</td></tr><tr><td colspan="2"><a href="#dataschema">dataschema</a></td><td>String=../data/nhs-notify-example-event-data.schema.json</td></tr><tr><td colspan="2"><a href="#data">data</a></td><td>Object</td></tr><tr><td colspan="2" rowspan="1">All of:</td><td>Object</td></tr></tbody></table>


## Example



```
{
    "specversion": "1.0",
    "id": "6f1c2a53-3d54-4a0a-9a0b-0e9ae2d4c111",
    "type": "uk.nhs.notify.ordering.order.read.v1",
    "source": "/data-plane/ordering",
    "subject": "customer/920fca11-596a-4eca-9c47-99f624614658/order/769acdd4-6a47-496f-999f-76a6fd2c3959/item/4f5e17c0-ec57-4cee-9a86-14580cf5af7d",
    "time": "2025-10-01T10:15:30.000Z",
    "recordedtime": "2025-10-01T10:15:30.250Z",
    "traceparent": "00-0af7651916cd43dd8448eb211c80319c-b7ad6b7169203331-01",
    "severitynumber": 1,
    "severitytext": "DEBUG",
    "dataschema": "https://nhsdigital.github.io/nhs-notify-standards/cloudevents/nhs-notify-example-event-data.schema.yaml",
    "data": {
        "notify-payload": {
            "notify-data": {
                "nhsNumber": "9434765919"
            },
            "notify-metadata": {
                "teamResponsible": "Team 1",
                "notifyDomain": "Ordering"
            }
        }
    }
}
```



<hr />


## type


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Concrete versioned event type string for this example event (.vN suffix).</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">Yes</td>
    </tr>
    <tr>
      <th>Const</th>
      <td colspan="2">uk.nhs.notify.ordering.order.read.v1</td>
    </tr><tr>
      <th>Examples</th>
      <td colspan="2"><li>uk.nhs.notify.ordering.order.read.v1</li></td>
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
      <th>Pattern</th>
      <td colspan="2">^/nhs/england/notify/(production|staging|development|uat)/(primary|secondary|dev-[0-9]+)/data-plane/ordering</td>
    </tr><tr>
      <th>Examples</th>
      <td colspan="2"><li>/nhs/england/notify/production/primary/data-plane/ordering</li></td>
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
    </tr><tr>
      <th>Examples</th>
      <td colspan="2"><li>customer/920fca11-596a-4eca-9c47-99f624614658/order/769acdd4-6a47-496f-999f-76a6fd2c3959/item/4f5e17c0-ec57-4cee-9a86-14580cf5af7d</li></td>
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
      <td colspan="2">../data/nhs-notify-example-event-data.schema.json</td>
    </tr><tr>
      <th>Examples</th>
      <td colspan="2"><li>nhs-notify-example-event-data.schema.json</li></td>
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
    <tr><th>Type</th><td colspan="2">Object</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">Yes</td>
    </tr>
    
  </tbody>
</table>

### Properties
  <table class="jssd-properties-table"><thead><tr><th colspan="2">Name</th><th>Type</th></tr></thead><tbody><tr><td colspan="2"><a href="#datanotify-payload">notify-payload</a></td><td>Object</td></tr></tbody></table>


### data.notify-payload


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">Object</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    
  </tbody>
</table>



### data.notify-payload.notify-data


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Example data type</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">Example data-plane object for illustrative purposes.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Object</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    
  </tbody>
</table>



### data.notify-payload.notify-data.nhsNumber


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



### data.notify-payload.notify-data.nhsNumber.0


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
    </tr><tr>
      <th>Examples</th>
      <td colspan="2"><li>9434765919</li><li>1234567890</li></td>
    </tr>
  </tbody>
</table>




### data.notify-payload.notify-data.nhsNumber.1


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
    </tr><tr>
      <th>Examples</th>
      <td colspan="2"><li>943 476 5919</li><li>943-476-5919</li><li>9434765919</li></td>
    </tr>
  </tbody>
</table>






### data.notify-payload.notify-metadata


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Example metadata block constrained for this example.</td>
    </tr>
    <tr><tr><td rowspan="2"><a href="#type">Type</a></td><td rowspan="2">All of:</td><td><a href="#type-0">Object</a></td></tr>
<tr><td><a href="#type-1">Object</a></td></tr></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    
  </tbody>
</table>



### data.notify-payload.notify-metadata.0


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Example metadata schema reference binding.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Object</td></tr>
    
  </tbody>
</table>



### data.notify-payload.notify-metadata.0.teamResponsible


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
    </tr><tr>
      <th>Examples</th>
      <td colspan="2"><li>Team 1</li></td>
    </tr>
  </tbody>
</table>




### data.notify-payload.notify-metadata.0.notifyDomain


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
    </tr><tr>
      <th>Examples</th>
      <td colspan="2"><li>Ordering</li></td>
    </tr>
  </tbody>
</table>





### data.notify-payload.notify-metadata.1


<table class="jssd-property-table">
  <tbody>
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



### data.notify-payload.notify-metadata.1.teamResponsible


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




### data.notify-payload.notify-metadata.1.notifyDomain


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




### data.notify-payload.notify-metadata.1.microservice


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




### data.notify-payload.notify-metadata.1.repositoryUrl


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




### data.notify-payload.notify-metadata.1.accountId


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




### data.notify-payload.notify-metadata.1.environment


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




### data.notify-payload.notify-metadata.1.instance


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




### data.notify-payload.notify-metadata.1.microserviceInstanceId


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




### data.notify-payload.notify-metadata.1.microserviceVersion


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




### data.notify-payload.notify-metadata.1.commitSha


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




### data.notify-payload.notify-metadata.1.buildTimestamp


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




### data.notify-payload.notify-metadata.1.serviceTier


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




### data.notify-payload.notify-metadata.1.region


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




### data.notify-payload.notify-metadata.1.pseudonymisationLevel


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




### data.notify-payload.notify-metadata.1.replayIndicator


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




### data.notify-payload.notify-metadata.1.originalEventId


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




### data.notify-payload.notify-metadata.1.integrityHash


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




### data.notify-payload.notify-metadata.1.producedByType


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
    "$id": "/examples/2025-10/events/nhs-notify-example-event.bundle.schema.json",
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "title": "Example Event",
    "description": "Example  event",
    "type": "object",
    "allOf": [
        {
            "$schema": "https://json-schema.org/draft/2020-12/schema",
            "title": "NHS Notify Example Event Profile",
            "description": "NHS Notify Example Event profile for CloudEvents 1.0 including additional governance and tracing attributes.",
            "type": "object",
            "allOf": [
                {
                    "$anchor": "nhs-notify-profile",
                    "$schema": "https://json-schema.org/draft/2020-12/schema",
                    "title": "NHS Notify CloudEvents Profile",
                    "description": "NHS Notify profile for CloudEvents 1.0 including additional governance and tracing attributes.",
                    "type": "object",
                    "additionalProperties": false,
                    "$comment": "id includes the published date. CloudEvents allows arbitrary extension attributes. NHS profile: time (occurred-at) is mandatory though optional in CloudEvents spec.",
                    "properties": {
                        "profileversion": {
                            "type": "string",
                            "const": "1.0.0",
                            "pattern": "^[0-9]+\\.[0-9]+\\.[0-9]+$",
                            "description": "NHS Notify CloudEvents profile semantic version.",
                            "$comment": "Increment: PATCH=add optional attrs; MINOR=add conditionally-required or new enums; MAJOR=breaking change."
                        },
                        "profilepublished": {
                            "type": "string",
                            "const": "2025-10",
                            "pattern": "^\\d{4}-\\d{2}$",
                            "description": "NHS Notify CloudEvents profile publication date (YYYY-MM).",
                            "$comment": "Publication date of this profile version (YYYY-MM)."
                        },
                        "specversion": {
                            "type": "string",
                            "const": "1.0",
                            "description": "CloudEvents specification version (fixed to 1.0).",
                            "examples": [
                                "1.0"
                            ],
                            "$comment": "CloudEvents version used. Core attributes: specversion,id,source,type (+ optional subject,time,datacontenttype,dataschema,data). Ref: CloudEvents core spec."
                        },
                        "id": {
                            "type": "string",
                            "format": "uuid",
                            "minLength": 1,
                            "description": "Unique identifier for this event instance (UUID).",
                            "examples": [
                                "6f1c2a53-3d54-4a0a-9a0b-0e9ae2d4c111"
                            ],
                            "$comment": "Unique per (source,id). This should be a randomly generated guid that represents the id of the event itself."
                        },
                        "source": {
                            "type": "string",
                            "pattern": "^/nhs/england/notify/(production|staging|development|uat)/(primary|secondary|dev-[0-9]+)/(data-plane|control-plane)(?:/[a-z0-9-]+)*$",
                            "minLength": 40,
                            "format": "uri-reference",
                            "description": "Logical event producer path: /nhs/england/notify/{environment}/{instance}/{plane}[/{service}...] where environment=production|staging|development|uat, instance=primary|secondary|dev-{digits}, plane=data-plane|control-plane, and optional service/lowercase tokens follow.",
                            "examples": [
                                "/nhs/england/notify/production/primary/data-plane/ordering",
                                "/nhs/england/notify/staging/secondary/control-plane/audit",
                                "/nhs/england/notify/development/dev-12345/data-plane/ordering"
                            ],
                            "$comment": "Segments: /nhs/england/notify/{environment}/{instance}/{plane}[/{token}...]; environment in (production|staging|development|uat); instance in (primary|secondary|dev-<digits> for ephemeral/dev sandboxes); plane in (data-plane|control-plane); subsequent optional segments: lowercase alphanumeric or hyphen; no trailing slash."
                        },
                        "subject": {
                            "type": "string",
                            "pattern": "^(?:[a-z0-9-]+)(?:/[a-z0-9-]+)*$",
                            "minLength": 5,
                            "format": "uri-reference",
                            "description": "Resource path (no leading slash) within the source made of lowercase segments separated by '/'.",
                            "examples": [
                                "customer/920fca11-596a-4eca-9c47-99f624614658/order/769acdd4-6a47-496f-999f-76a6fd2c3959/item/4f5e17c0-ec57-4cee-9a86-14580cf5af7d"
                            ],
                            "$comment": "URI path: must not start with '/', only lowercase alphanumeric and hyphen segments separated by '/', must not end with '/'."
                        },
                        "type": {
                            "type": "string",
                            "minLength": 1,
                            "allOf": [
                                {
                                    "name": "NHS Notify versioned event type pattern",
                                    "type": "string",
                                    "pattern": "^uk\\.nhs\\.notify\\.[a-z0-9]+(?:\\.[a-z0-9]+)*\\.v[0-9]+$",
                                    "description": "Versioned event type (uk.nhs.notify.*.<segments>.vN) using reverse-DNS style segments ending with .v<digits> (e.g. .v1, .v10).",
                                    "examples": [
                                        "uk.nhs.notify.ordering.order.read.v1"
                                    ],
                                    "$comment": "Segments: lowercase a-z0-9; final segment is version marker v<digits>. Allows arbitrary positive integer (no leading zero rule enforced)."
                                },
                                {
                                    "name": "Disallow 'completed' token",
                                    "type": "string",
                                    "not": {
                                        "pattern": "(?:^|\\.)completed(?:\\.|$)"
                                    },
                                    "description": "Disallow ambiguous past tense token 'completed'. Use a domain-specific verb like read, created, published."
                                },
                                {
                                    "name": "Disallow 'finished' token",
                                    "type": "string",
                                    "not": {
                                        "pattern": "(?:^|\\.)finished(?:\\.|$)"
                                    },
                                    "description": "Disallow 'finished' which is temporal and ambiguous; choose a workflow-specific terminal verb."
                                },
                                {
                                    "name": "Disallow 'updated' token",
                                    "type": "string",
                                    "not": {
                                        "pattern": "(?:^|\\.)updated(?:\\.|$)"
                                    },
                                    "description": "Disallow 'updated'; prefer a concrete action (e.g. order.modified.v1 -> order.change.applied)."
                                },
                                {
                                    "name": "Disallow 'changed' token",
                                    "type": "string",
                                    "not": {
                                        "pattern": "(?:^|\\.)changed(?:\\.|$)"
                                    },
                                    "description": "Disallow vague 'changed'; specify the nature of the change (e.g. status.changed -> status.transitioned)."
                                },
                                {
                                    "name": "Disallow 'processed' token",
                                    "type": "string",
                                    "not": {
                                        "pattern": "(?:^|\\.)processed(?:\\.|$)"
                                    },
                                    "description": "Disallow 'processed'; state WHAT happened, not that a process occurred."
                                },
                                {
                                    "name": "Disallow 'handled' token",
                                    "type": "string",
                                    "not": {
                                        "pattern": "(?:^|\\.)handled(?:\\.|$)"
                                    },
                                    "description": "Disallow 'handled'; overly generic and not business meaningful."
                                },
                                {
                                    "name": "Disallow 'status' token",
                                    "type": "string",
                                    "not": {
                                        "pattern": "(?:^|\\.)status(?:\\.|$)"
                                    },
                                    "description": "Disallow bare 'status'; event types should represent a domain occurrence, not a generic label."
                                },
                                {
                                    "name": "Disallow 'started' token",
                                    "type": "string",
                                    "not": {
                                        "pattern": "(?:^|\\.)started(?:\\.|$)"
                                    },
                                    "description": "Disallow 'started'; prefer a specific lifecycle action (e.g. session.opened)."
                                },
                                {
                                    "name": "Disallow 'failed' token",
                                    "type": "string",
                                    "not": {
                                        "pattern": "(?:^|\\.)failed(?:\\.|$)"
                                    },
                                    "description": "Disallow 'failed'; model the concrete failure (e.g. payment.authorization.failed -> payment.authorization.rejected)."
                                }
                            ],
                            "description": "Versioned event type (uk.nhs.notify.*.<segments>.vN) using reverse-DNS style; final segment MUST be .v<digits>; ambiguous verbs (completed, finished, updated, changed, processed, handled, status, started, failed) disallowed.",
                            "examples": [
                                "uk.nhs.notify.ordering.order.read.v1"
                            ],
                            "$comment": "NHS naming: lower-dot namespaced; version suffix required (.v<digits>); banned tokens anywhere before version: completed, finished, updated, changed, processed, handled, status, started, failed."
                        },
                        "time": {
                            "type": "string",
                            "format": "date-time",
                            "description": "Timestamp when the event occurred (RFC 3339).",
                            "examples": [
                                "2025-10-01T10:15:30.000Z"
                            ],
                            "$comment": "RFC3339 UTC occurred-at (REQUIRED in NHS profile)."
                        },
                        "datacontenttype": {
                            "type": "string",
                            "const": "application/json",
                            "description": "Media type for the data field (fixed to application/json).",
                            "examples": [
                                "application/json"
                            ],
                            "$comment": "Usually application/json."
                        },
                        "dataschema": {
                            "type": "string",
                            "description": "URI of a schema that describes the event payload (notify-payload).",
                            "examples": [
                                "https://nhsdigital.github.io/nhs-notify-standards/cloudevents/nhs-notify-example-event-data.schema.json"
                            ],
                            "$comment": "URI to event payload schema."
                        },
                        "data": {
                            "type": "object",
                            "description": "Container object wrapping the structured Notify payload.",
                            "examples": [
                                {
                                    "notify-payload": {
                                        "notify-data": {
                                            "nhsNumber": "9434765919"
                                        },
                                        "notify-metadata": {
                                            "teamResponsible": "Team 1",
                                            "notifyDomain": "Ordering",
                                            "version": "1.3.0"
                                        }
                                    }
                                }
                            ],
                            "$comment": "Domain payload (arbitrary JSON value)."
                        },
                        "traceparent": {
                            "type": "string",
                            "minLength": 1,
                            "pattern": "^00-[0-9a-f]{32}-[0-9a-f]{16}-[0-9a-f]{2}$",
                            "description": "W3C Trace Context traceparent header value.",
                            "examples": [
                                "00-0af7651916cd43dd8448eb211c80319c-b7ad6b7169203331-01"
                            ],
                            "$comment": "W3C Trace Context traceparent (required when tracing used)."
                        },
                        "tracestate": {
                            "type": "string",
                            "description": "Optional W3C Trace Context tracestate header value.",
                            "examples": [
                                "rojo=00f067aa0ba902b7,congo=t61rcWkgMzE"
                            ],
                            "$comment": "W3C Trace Context tracestate (optional)."
                        },
                        "partitionkey": {
                            "type": "string",
                            "minLength": 1,
                            "maxLength": 64,
                            "pattern": "^[a-z0-9-]+$",
                            "description": "Partition / ordering key (lowercase alphanumerics and hyphen, 1-64 chars).",
                            "examples": [
                                "customer-920fca11"
                            ],
                            "$comment": "Non-empty partition key for scaling / causal grouping. Must be 1-64 characters, only lowercase letters, numbers, and hyphen."
                        },
                        "recordedtime": {
                            "type": "string",
                            "format": "date-time",
                            "description": "Timestamp when the event was recorded/persisted (should be >= time).",
                            "examples": [
                                "2025-10-01T10:15:30.250Z"
                            ],
                            "$comment": "Bitemporal created-at; should be >= time."
                        },
                        "sampledrate": {
                            "type": "integer",
                            "minimum": 1,
                            "description": "Sampling factor: number of similar occurrences this event represents.",
                            "examples": [
                                5
                            ],
                            "$comment": "Integer > 0 indicating how many similar occurrences this event represents."
                        },
                        "sequence": {
                            "type": "string",
                            "pattern": "^\\d{20}$",
                            "description": "Zero-padded 20 digit numeric sequence (lexicographically sortable).",
                            "examples": [
                                "00000000000000000042"
                            ],
                            "$comment": "Lexicographically comparable ordering string per source. Must be a string of exactly 20 digits, left-padded with zeros, representing a 64-bit unsigned integer."
                        },
                        "severitytext": {
                            "type": "string",
                            "enum": [
                                "TRACE",
                                "DEBUG",
                                "INFO",
                                "WARN",
                                "ERROR",
                                "FATAL"
                            ],
                            "description": "Log severity level name.",
                            "examples": [
                                "DEBUG"
                            ],
                            "$comment": "Severity text (TRACE, DEBUG, INFO, WARN, ERROR, FATAL, etc.)."
                        },
                        "severitynumber": {
                            "type": "integer",
                            "minimum": 0,
                            "maximum": 5,
                            "description": "Numeric severity (TRACE=0, DEBUG=1, INFO=2, WARN=3, ERROR=4, FATAL=5).",
                            "examples": [
                                1
                            ],
                            "$comment": "Numeric severity corresponding to severitytext (TRACE=0..FATAL=5)."
                        },
                        "dataclassification": {
                            "type": "string",
                            "enum": [
                                "public",
                                "internal",
                                "confidential",
                                "restricted"
                            ],
                            "description": "Data sensitivity classification.",
                            "examples": [
                                "restricted"
                            ],
                            "$comment": "Data classification e.g. public|internal|confidential|restricted."
                        },
                        "dataregulation": {
                            "type": "string",
                            "enum": [
                                "GDPR",
                                "HIPAA",
                                "PCI-DSS",
                                "ISO-27001",
                                "NIST-800-53",
                                "CCPA"
                            ],
                            "description": "Regulatory regime tag applied to this data.",
                            "examples": [
                                "ISO-27001"
                            ],
                            "$comment": "Regulation tags e.g. GDPR, HIPAA."
                        },
                        "datacategory": {
                            "type": "string",
                            "enum": [
                                "non-sensitive",
                                "standard",
                                "sensitive",
                                "special-category"
                            ],
                            "description": "Data category classification (e.g. standard, special-category).",
                            "examples": [
                                "sensitive"
                            ],
                            "$comment": "Example: special-category (GDPR), phi (HIPAA)."
                        }
                    },
                    "required": [
                        "specversion",
                        "id",
                        "source",
                        "subject",
                        "type",
                        "time",
                        "recordedtime",
                        "severitynumber",
                        "traceparent",
                        "data",
                        "profileversion",
                        "profilepublished"
                    ],
                    "dependentRequired": {
                        "severitynumber": [
                            "severitytext"
                        ]
                    },
                    "allOf": [
                        {
                            "if": {
                                "properties": {
                                    "source": {
                                        "pattern": "^/nhs/england/notify/(production|staging|development|uat)/(primary|secondary|dev-[0-9]+)/data-plane"
                                    }
                                },
                                "required": [
                                    "source"
                                ]
                            },
                            "then": {
                                "properties": {
                                    "subject": {
                                        "pattern": "^customer/[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}(?:/(?:[a-z0-9-]+|[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}))*$",
                                        "$comment": "When source is /data-plane..., subject must start with customer/{uuid} and may have further segments which are either lowercase tokens or UUIDs.",
                                        "description": "Subject path for data-plane events: customer/{uuid}[/...]."
                                    }
                                },
                                "required": [
                                    "subject"
                                ]
                            }
                        },
                        {
                            "if": {
                                "properties": {
                                    "severitytext": {
                                        "const": "TRACE"
                                    }
                                },
                                "required": [
                                    "severitytext"
                                ]
                            },
                            "then": {
                                "properties": {
                                    "severitynumber": {
                                        "const": 0
                                    }
                                },
                                "required": [
                                    "severitynumber"
                                ]
                            }
                        },
                        {
                            "if": {
                                "properties": {
                                    "severitytext": {
                                        "const": "DEBUG"
                                    }
                                },
                                "required": [
                                    "severitytext"
                                ]
                            },
                            "then": {
                                "properties": {
                                    "severitynumber": {
                                        "const": 1
                                    }
                                },
                                "required": [
                                    "severitynumber"
                                ]
                            }
                        },
                        {
                            "if": {
                                "properties": {
                                    "severitytext": {
                                        "const": "INFO"
                                    }
                                },
                                "required": [
                                    "severitytext"
                                ]
                            },
                            "then": {
                                "properties": {
                                    "severitynumber": {
                                        "const": 2
                                    }
                                },
                                "required": [
                                    "severitynumber"
                                ]
                            }
                        },
                        {
                            "if": {
                                "properties": {
                                    "severitytext": {
                                        "const": "WARN"
                                    }
                                },
                                "required": [
                                    "severitytext"
                                ]
                            },
                            "then": {
                                "properties": {
                                    "severitynumber": {
                                        "const": 3
                                    }
                                },
                                "required": [
                                    "severitynumber"
                                ]
                            }
                        },
                        {
                            "if": {
                                "properties": {
                                    "severitytext": {
                                        "const": "ERROR"
                                    }
                                },
                                "required": [
                                    "severitytext"
                                ]
                            },
                            "then": {
                                "properties": {
                                    "severitynumber": {
                                        "const": 4
                                    }
                                },
                                "required": [
                                    "severitynumber"
                                ]
                            }
                        },
                        {
                            "if": {
                                "properties": {
                                    "severitytext": {
                                        "const": "FATAL"
                                    }
                                },
                                "required": [
                                    "severitytext"
                                ]
                            },
                            "then": {
                                "properties": {
                                    "severitynumber": {
                                        "const": 5
                                    }
                                },
                                "required": [
                                    "severitynumber"
                                ]
                            }
                        }
                    ],
                    "examples": [
                        {
                            "profileversion": "1.0.0",
                            "profilepublished": "2025-10",
                            "specversion": "1.0",
                            "id": "6f1c2a53-3d54-4a0a-9a0b-0e9ae2d4c111",
                            "source": "/data-plane/ordering",
                            "subject": "customer/920fca11-596a-4eca-9c47-99f624614658/order/769acdd4-6a47-496f-999f-76a6fd2c3959/item/4f5e17c0-ec57-4cee-9a86-14580cf5af7d",
                            "type": "uk.nhs.notify.ordering.order.read",
                            "time": "2025-10-01T10:15:30.000Z",
                            "recordedtime": "2025-10-01T10:15:30.250Z",
                            "traceparent": "00-0af7651916cd43dd8448eb211c80319c-b7ad6b7169203331-01",
                            "tracestate": "rojo=00f067aa0ba902b7,congo=t61rcWkgMzE",
                            "partitionkey": "customer-920fca11",
                            "sequence": "00000000000000000042",
                            "severitytext": "DEBUG",
                            "severitynumber": 1,
                            "datacontenttype": "application/json",
                            "dataschema": "https://nhsdigital.github.io/nhs-notify-standards/cloudevents/nhs-notify-example-event-data.schema.yaml",
                            "dataclassification": "restricted",
                            "dataregulation": "ISO-27001",
                            "datacategory": "sensitive",
                            "sampledrate": 5,
                            "data": {
                                "notify-payload": {
                                    "notify-data": {
                                        "nhsNumber": "9434765919"
                                    },
                                    "notify-metadata": {
                                        "teamResponsible": "Team 1",
                                        "notifyDomain": "Ordering",
                                        "version": "1.3.0"
                                    }
                                }
                            }
                        }
                    ]
                }
            ]
        }
    ],
    "properties": {
        "type": {
            "type": "string",
            "const": "uk.nhs.notify.ordering.order.read.v1",
            "description": "Concrete versioned event type string for this example event (.vN suffix).",
            "examples": [
                "uk.nhs.notify.ordering.order.read.v1"
            ]
        },
        "source": {
            "type": "string",
            "pattern": "^/nhs/england/notify/(production|staging|development|uat)/(primary|secondary|dev-[0-9]+)/data-plane/ordering",
            "description": "Event source for ordering domain examples.",
            "examples": [
                "/nhs/england/notify/production/primary/data-plane/ordering"
            ]
        },
        "subject": {
            "type": "string",
            "pattern": "^customer/[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}/order/[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}/item/[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$",
            "description": "Path in the form customer/{id}/order/{id}/item/{id} where each {{id}} is a UUID (xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx).",
            "examples": [
                "customer/920fca11-596a-4eca-9c47-99f624614658/order/769acdd4-6a47-496f-999f-76a6fd2c3959/item/4f5e17c0-ec57-4cee-9a86-14580cf5af7d"
            ]
        },
        "dataschema": {
            "type": "string",
            "const": "../data/nhs-notify-example-event-data.schema.json",
            "description": "Canonical URI of the example event's data schema.",
            "examples": [
                "nhs-notify-example-event-data.schema.json"
            ]
        },
        "data": {
            "$ref": "#/$defs/ExamplePayload",
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
            "description": "Wrapper for notify-payload used only in this example event schema.",
            "properties": {
                "notify-payload": {
                    "type": "object",
                    "properties": {
                        "notify-data": {
                            "$ref": "#/$defs/ExampleData",
                            "description": "Example data-plane object for illustrative purposes."
                        },
                        "notify-metadata": {
                            "allOf": [
                                {
                                    "$ref": "#/$defs/ExampleMetadata"
                                },
                                {
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
                                            "$ref": "#/%24defs/ExamplePayload/properties/notify-payload/properties/notify-metadata/allOf/1/%24defs/commitSha",
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
                                            "$ref": "#/%24defs/ExamplePayload/properties/notify-payload/properties/notify-metadata/allOf/1/%24defs/uuid",
                                            "description": "Identifier of the original event when replayIndicator=true.",
                                            "examples": [
                                                "6f1c2a53-3d54-4a0a-9a0b-0e9ae2d4c111"
                                            ]
                                        },
                                        "integrityHash": {
                                            "$ref": "#/%24defs/ExamplePayload/properties/notify-payload/properties/notify-metadata/allOf/1/%24defs/sha256prefixed",
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
                            ],
                            "description": "Example metadata block constrained for this example."
                        }
                    }
                }
            }
        },
        "ExampleData": {
            "description": "Example data schema reference binding.",
            "$schema": "https://json-schema.org/draft/2020-12/schema",
            "title": "Example data type",
            "type": "object",
            "additionalProperties": false,
            "properties": {
                "nhsNumber": {
                    "description": "Example patient's NHS Number (accepts canonical or formatted forms).",
                    "examples": [
                        "9434765919",
                        "943 476 5919",
                        "943-476-5919"
                    ],
                    "anyOf": [
                        {
                            "$comment": "Canonical stored form: exactly 10 digits (no spaces or hyphens).\n10-digit requirement and check-digit semantics come from the NHS Data Dictionary.\nRef: NHS Number attribute & algorithm (Modulus 11).",
                            "type": "string",
                            "description": "NHS Number (10 digits; last digit is a Modulus-11 check digit).",
                            "pattern": "^[0-9]{10}$",
                            "format": "nhs-number",
                            "examples": [
                                "9434765919",
                                "1234567890"
                            ]
                        },
                        {
                            "$comment": "UI/ingress tolerant form: allows 3-3-4 with optional spaces/hyphens. Still only digits once separators are removed.\nDisplay guidance to use 3-3-4 spacing; systems should accept flexible input.",
                            "type": "string",
                            "description": "Human-entered NHS Number (accepts 3-3-4 with optional spaces or hyphens).",
                            "pattern": "^(?:[0-9]{3}[- ]?[0-9]{3}[- ]?[0-9]{4})$",
                            "format": "nhs-number",
                            "examples": [
                                "943 476 5919",
                                "943-476-5919",
                                "9434765919"
                            ]
                        }
                    ]
                }
            },
            "required": [
                "nhsNumber"
            ],
            "examples": [
                {
                    "nhsNumber": "9434765919"
                }
            ]
        },
        "ExampleMetadata": {
            "$ref": "#/$defs/TeamAlphaBravoMetadata",
            "description": "Example metadata schema reference binding."
        },
        "TeamAlphaBravoMetadata": {
            "$comment": "Notify Metadata",
            "type": "object",
            "description": "Restricted example metadata subset used for illustrative purposes only.",
            "properties": {
                "teamResponsible": {
                    "type": "string",
                    "const": "Team 1",
                    "description": "Owning team for the example metadata.",
                    "examples": [
                        "Team 1"
                    ]
                },
                "notifyDomain": {
                    "type": "string",
                    "const": "Ordering",
                    "description": "Domain for the example metadata (Ordering).",
                    "examples": [
                        "Ordering"
                    ]
                }
            }
        }
    },
    "examples": [
        {
            "specversion": "1.0",
            "id": "6f1c2a53-3d54-4a0a-9a0b-0e9ae2d4c111",
            "type": "uk.nhs.notify.ordering.order.read.v1",
            "source": "/data-plane/ordering",
            "subject": "customer/920fca11-596a-4eca-9c47-99f624614658/order/769acdd4-6a47-496f-999f-76a6fd2c3959/item/4f5e17c0-ec57-4cee-9a86-14580cf5af7d",
            "time": "2025-10-01T10:15:30.000Z",
            "recordedtime": "2025-10-01T10:15:30.250Z",
            "traceparent": "00-0af7651916cd43dd8448eb211c80319c-b7ad6b7169203331-01",
            "severitynumber": 1,
            "severitytext": "DEBUG",
            "dataschema": "https://nhsdigital.github.io/nhs-notify-standards/cloudevents/nhs-notify-example-event-data.schema.yaml",
            "data": {
                "notify-payload": {
                    "notify-data": {
                        "nhsNumber": "9434765919"
                    },
                    "notify-metadata": {
                        "teamResponsible": "Team 1",
                        "notifyDomain": "Ordering"
                    }
                }
            }
        }
    ],
    "$comment": "Bundled schema (all external $ref inlined)."
}
```


