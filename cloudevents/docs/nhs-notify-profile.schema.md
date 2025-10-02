

# NHS Notify CloudEvents Profile

<p>NHS Notify profile for CloudEvents 1.0 including additional governance and tracing attributes.</p>

<table>
<tbody>
<tr><th>$id</th><td>nhs-notify-profile.schema.json</td></tr>
<tr><th>$schema</th><td>https://json-schema.org/draft/2020-12/schema</td></tr>
</tbody>
</table>

## Properties

<table class="jssd-properties-table"><thead><tr><th colspan="2">Name</th><th>Type</th></tr></thead><tbody><tr><td colspan="2"><a href="#specversion">specversion</a></td><td>String=1.0</td></tr><tr><td colspan="2"><a href="#id">id</a></td><td>String</td></tr><tr><td colspan="2"><a href="#source">source</a></td><td>String</td></tr><tr><td colspan="2"><a href="#subject">subject</a></td><td>String</td></tr><tr><td rowspan="10">type</td><td rowspan="10">All of:</td><td>String</td></tr><tr><td>String</td></tr><tr><td>String</td></tr><tr><td>String</td></tr><tr><td>String</td></tr><tr><td>String</td></tr><tr><td>String</td></tr><tr><td>String</td></tr><tr><td>String</td></tr><tr><td>String</td></tr><tr><td colspan="2"><a href="#time">time</a></td><td>String</td></tr><tr><td colspan="2"><a href="#datacontenttype">datacontenttype</a></td><td>String=application/json</td></tr><tr><td colspan="2"><a href="#dataschema">dataschema</a></td><td>String</td></tr><tr><td colspan="2"><a href="#data">data</a></td><td>Object</td></tr><tr><td colspan="2"><a href="#traceparent">traceparent</a></td><td>String</td></tr><tr><td colspan="2"><a href="#tracestate">tracestate</a></td><td>String</td></tr><tr><td colspan="2"><a href="#partitionkey">partitionkey</a></td><td>String</td></tr><tr><td colspan="2"><a href="#recordedtime">recordedtime</a></td><td>String</td></tr><tr><td colspan="2"><a href="#sampledrate">sampledrate</a></td><td>Integer</td></tr><tr><td colspan="2"><a href="#sequence">sequence</a></td><td>String</td></tr><tr><td colspan="2"><a href="#severitytext">severitytext</a></td><td>String</td></tr><tr><td colspan="2"><a href="#severitynumber">severitynumber</a></td><td>Integer</td></tr><tr><td colspan="2"><a href="#dataclassification">dataclassification</a></td><td>String</td></tr><tr><td colspan="2"><a href="#dataregulation">dataregulation</a></td><td>String</td></tr><tr><td colspan="2"><a href="#datacategory">datacategory</a></td><td>String</td></tr><tr><td colspan="2" rowspan="7">All of:</td><td></td></tr><tr><td></td></tr><tr><td></td></tr><tr><td></td></tr><tr><td></td></tr><tr><td></td></tr><tr><td></td></tr></tbody></table>


## Example



```
{
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
    "dataschema": "https://nhsdigital.github.io/nhs-notify-standards/cloudevents/nhs-notify-example-event-data.schema.json",
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
```



<hr />


## specversion


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">CloudEvents specification version (fixed to 1.0).</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">Yes</td>
    </tr>
    <tr>
      <th>Const</th>
      <td colspan="2">1.0</td>
    </tr><tr>
      <th>Examples</th>
      <td colspan="2"><li>1.0</li></td>
    </tr>
  </tbody>
</table>




## id


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Unique identifier for this event instance (UUID).</td>
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
      <th>Format</th>
      <td colspan="2">uuid</td>
    </tr><tr>
      <th>Examples</th>
      <td colspan="2"><li>6f1c2a53-3d54-4a0a-9a0b-0e9ae2d4c111</li></td>
    </tr>
  </tbody>
</table>




## source


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Logical event producer path starting /data-plane or /control-plane followed by lowercase segments.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">Yes</td>
    </tr>
    <tr>
      <th>Min Length</th>
      <td colspan="2">12</td>
    </tr><tr>
      <th>Format</th>
      <td colspan="2">uri-reference</td>
    </tr><tr>
      <th>Pattern</th>
      <td colspan="2">^/(data-plane|control-plane)(?:/[a-z0-9-]+)*$</td>
    </tr><tr>
      <th>Examples</th>
      <td colspan="2"><li>/data-plane/ordering</li><li>/control-plane/audit</li></td>
    </tr>
  </tbody>
</table>




## subject


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Resource path (no leading slash) within the source made of lowercase segments separated by &#x27;/&#x27;.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">Yes</td>
    </tr>
    <tr>
      <th>Min Length</th>
      <td colspan="2">5</td>
    </tr><tr>
      <th>Format</th>
      <td colspan="2">uri-reference</td>
    </tr><tr>
      <th>Pattern</th>
      <td colspan="2">^(?:[a-z0-9-]+)(?:/[a-z0-9-]+)*$</td>
    </tr><tr>
      <th>Examples</th>
      <td colspan="2"><li>customer/920fca11-596a-4eca-9c47-99f624614658/order/769acdd4-6a47-496f-999f-76a6fd2c3959/item/4f5e17c0-ec57-4cee-9a86-14580cf5af7d</li></td>
    </tr>
  </tbody>
</table>




## type


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Event type (uk.nhs.notify.*) using reverse-DNS style; ambiguous verbs (completed, finished, updated, changed, processed, handled, status, started, failed) disallowed.</td>
    </tr>
    <tr><tr><td rowspan="10">Type</td><td rowspan="10">All of:</td><td>String</td></tr><tr><td>String</td></tr><tr><td>String</td></tr><tr><td>String</td></tr><tr><td>String</td></tr><tr><td>String</td></tr><tr><td>String</td></tr><tr><td>String</td></tr><tr><td>String</td></tr><tr><td>String</td></tr></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">Yes</td>
    </tr>
    <tr>
      <th>Min Length</th>
      <td colspan="2">1</td>
    </tr><tr>
      <th>Examples</th>
      <td colspan="2"><li>uk.nhs.notify.ordering.order.read</li></td>
    </tr>
  </tbody>
</table>



### type.0


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Event type (uk.nhs.notify.*) using reverse-DNS style; lowercase alphanumerics and dots only.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Pattern</th>
      <td colspan="2">^uk\.nhs\.notify\.[a-z0-9]+(\.[a-z0-9]+)*$</td>
    </tr><tr>
      <th>Examples</th>
      <td colspan="2"><li>uk.nhs.notify.ordering.order.read</li></td>
    </tr>
  </tbody>
</table>




### type.1


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    
  </tbody>
</table>




### type.2


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    
  </tbody>
</table>




### type.3


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    
  </tbody>
</table>




### type.4


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    
  </tbody>
</table>




### type.5


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    
  </tbody>
</table>




### type.6


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    
  </tbody>
</table>




### type.7


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    
  </tbody>
</table>




### type.8


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    
  </tbody>
</table>




### type.9


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    
  </tbody>
</table>





## time


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Timestamp when the event occurred (RFC 3339).</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">Yes</td>
    </tr>
    <tr>
      <th>Format</th>
      <td colspan="2">date-time</td>
    </tr><tr>
      <th>Examples</th>
      <td colspan="2"><li>2025-10-01T10:15:30.000Z</li></td>
    </tr>
  </tbody>
</table>




## datacontenttype


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Media type for the data field (fixed to application/json).</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    <tr>
      <th>Const</th>
      <td colspan="2">application/json</td>
    </tr><tr>
      <th>Examples</th>
      <td colspan="2"><li>application/json</li></td>
    </tr>
  </tbody>
</table>




## dataschema


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">URI of a schema that describes the event payload (notify-payload).</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    <tr>
      <th>Examples</th>
      <td colspan="2"><li>https://nhsdigital.github.io/nhs-notify-standards/cloudevents/nhs-notify-example-event-data.schema.json</li></td>
    </tr>
  </tbody>
</table>




## data


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Container object wrapping the structured Notify payload.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Object</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">Yes</td>
    </tr>
    
  </tbody>
</table>

### Properties
  <table class="jssd-properties-table"><thead><tr><th colspan="2">Name</th><th>Type</th></tr></thead><tbody><tr><td colspan="2"><a href="#datanotify-payload">notify-payload</a></td><td>Object (of type <a href="./nhs-notify-payload.schema.html">./nhs-notify-payload.schema.html</a>)</td></tr></tbody></table>


### data.notify-payload

  <p>Defined in <a href="./nhs-notify-payload.schema.html">./nhs-notify-payload.schema.html</a></p>

<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>$id</th>
      <td colspan="2">nhs-notify-payload.schema.json</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">Structured Notify payload containing domain data (notify-data) and metadata (notify-metadata).</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Object (of type <a href="./nhs-notify-payload.schema.html">./nhs-notify-payload.schema.html</a>)</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">Yes</td>
    </tr>
    
  </tbody>
</table>





## traceparent


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">W3C Trace Context traceparent header value.</td>
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
      <th>Pattern</th>
      <td colspan="2">^00-[0-9a-f]{32}-[0-9a-f]{16}-[0-9a-f]{2}$</td>
    </tr><tr>
      <th>Examples</th>
      <td colspan="2"><li>00-0af7651916cd43dd8448eb211c80319c-b7ad6b7169203331-01</li></td>
    </tr>
  </tbody>
</table>




## tracestate


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Optional W3C Trace Context tracestate header value.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    <tr>
      <th>Examples</th>
      <td colspan="2"><li>rojo&#x3D;00f067aa0ba902b7,congo&#x3D;t61rcWkgMzE</li></td>
    </tr>
  </tbody>
</table>




## partitionkey


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Partition / ordering key (lowercase alphanumerics and hyphen, 1-64 chars).</td>
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
      <td colspan="2">64</td>
    </tr><tr>
      <th>Pattern</th>
      <td colspan="2">^[a-z0-9-]+$</td>
    </tr><tr>
      <th>Examples</th>
      <td colspan="2"><li>customer-920fca11</li></td>
    </tr>
  </tbody>
</table>




## recordedtime


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Timestamp when the event was recorded/persisted (should be &gt;&#x3D; time).</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">Yes</td>
    </tr>
    <tr>
      <th>Format</th>
      <td colspan="2">date-time</td>
    </tr><tr>
      <th>Examples</th>
      <td colspan="2"><li>2025-10-01T10:15:30.250Z</li></td>
    </tr>
  </tbody>
</table>




## sampledrate


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Sampling factor: number of similar occurrences this event represents.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Integer</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    <tr>
      <th>Minimum</th>
      <td colspan="2">1</td>
    </tr><tr>
      <th>Examples</th>
      <td colspan="2"><li>5</li></td>
    </tr>
  </tbody>
</table>




## sequence


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Zero-padded 20 digit numeric sequence (lexicographically sortable).</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    <tr>
      <th>Pattern</th>
      <td colspan="2">^\d{20}$</td>
    </tr><tr>
      <th>Examples</th>
      <td colspan="2"><li>00000000000000000042</li></td>
    </tr>
  </tbody>
</table>




## severitytext


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Log severity level name.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    <tr>
      <th>Enum</th>
      <td colspan="2"><ul><li>TRACE</li><li>DEBUG</li><li>INFO</li><li>WARN</li><li>ERROR</li><li>FATAL</li></ul></td>
    </tr><tr>
      <th>Examples</th>
      <td colspan="2"><li>DEBUG</li></td>
    </tr>
  </tbody>
</table>




## severitynumber


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Numeric severity (TRACE&#x3D;0, DEBUG&#x3D;1, INFO&#x3D;2, WARN&#x3D;3, ERROR&#x3D;4, FATAL&#x3D;5).</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Integer</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">Yes</td>
    </tr>
    <tr>
      <th>Maximum</th>
      <td colspan="2">5</td>
    </tr><tr>
      <th>Examples</th>
      <td colspan="2"><li>1</li></td>
    </tr>
  </tbody>
</table>




## dataclassification


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Data sensitivity classification.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    <tr>
      <th>Enum</th>
      <td colspan="2"><ul><li>public</li><li>internal</li><li>confidential</li><li>restricted</li></ul></td>
    </tr><tr>
      <th>Examples</th>
      <td colspan="2"><li>restricted</li></td>
    </tr>
  </tbody>
</table>




## dataregulation


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Regulatory regime tag applied to this data.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    <tr>
      <th>Enum</th>
      <td colspan="2"><ul><li>GDPR</li><li>HIPAA</li><li>PCI-DSS</li><li>ISO-27001</li><li>NIST-800-53</li><li>CCPA</li></ul></td>
    </tr><tr>
      <th>Examples</th>
      <td colspan="2"><li>ISO-27001</li></td>
    </tr>
  </tbody>
</table>




## datacategory


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Data category classification (e.g. standard, special-category).</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    <tr>
      <th>Enum</th>
      <td colspan="2"><ul><li>non-sensitive</li><li>standard</li><li>sensitive</li><li>special-category</li></ul></td>
    </tr><tr>
      <th>Examples</th>
      <td colspan="2"><li>sensitive</li></td>
    </tr>
  </tbody>
</table>









<hr />

## Schema
```
{
    "$id": "nhs-notify-profile.schema.json",
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "title": "NHS Notify CloudEvents Profile",
    "description": "NHS Notify profile for CloudEvents 1.0 including additional governance and tracing attributes.",
    "type": "object",
    "additionalProperties": false,
    "$comment": "CloudEvents allows arbitrary extension attributes. NHS profile: time (occurred-at) is mandatory though optional in CloudEvents spec.",
    "properties": {
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
            "pattern": "^/(data-plane|control-plane)(?:/[a-z0-9-]+)*$",
            "minLength": 12,
            "format": "uri-reference",
            "description": "Logical event producer path starting /data-plane or /control-plane followed by lowercase segments.",
            "examples": [
                "/data-plane/ordering",
                "/control-plane/audit"
            ],
            "$comment": "Must begin with '/data-plane' or '/control-plane'. Subsequent segments: lowercase alphanumeric or hyphen. No trailing '/'."
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
                    "type": "string",
                    "pattern": "^uk\\.nhs\\.notify\\.[a-z0-9]+(\\.[a-z0-9]+)*$",
                    "description": "Event type (uk.nhs.notify.*) using reverse-DNS style; lowercase alphanumerics and dots only.",
                    "examples": [
                        "uk.nhs.notify.ordering.order.read"
                    ],
                    "$comment": "NHS naming: lower-dot namespaced; allowed chars a-z0-9 and dots."
                },
                {
                    "type": "string",
                    "not": {
                        "pattern": "(?:^|\\.)completed(?:\\.|$)",
                        "description": "Disallow ambiguous past tense token 'completed'. Use a domain-specific verb like read, created, published."
                    }
                },
                {
                    "type": "string",
                    "not": {
                        "pattern": "(?:^|\\.)finished(?:\\.|$)",
                        "description": "Disallow 'finished' which is temporal and ambiguous; choose a workflow-specific terminal verb."
                    }
                },
                {
                    "type": "string",
                    "not": {
                        "pattern": "(?:^|\\.)updated(?:\\.|$)",
                        "description": "Disallow 'updated'; prefer a concrete action (e.g. order.modified.v1 -> order.change.applied)."
                    }
                },
                {
                    "type": "string",
                    "not": {
                        "pattern": "(?:^|\\.)changed(?:\\.|$)",
                        "description": "Disallow vague 'changed'; specify the nature of the change (e.g. status.changed -> status.transitioned)."
                    }
                },
                {
                    "type": "string",
                    "not": {
                        "pattern": "(?:^|\\.)processed(?:\\.|$)",
                        "description": "Disallow 'processed'; state WHAT happened, not that a process occurred."
                    }
                },
                {
                    "type": "string",
                    "not": {
                        "pattern": "(?:^|\\.)handled(?:\\.|$)",
                        "description": "Disallow 'handled'; overly generic and not business meaningful."
                    }
                },
                {
                    "type": "string",
                    "not": {
                        "pattern": "(?:^|\\.)status(?:\\.|$)",
                        "description": "Disallow bare 'status'; event types should represent a domain occurrence, not a generic label."
                    }
                },
                {
                    "type": "string",
                    "not": {
                        "pattern": "(?:^|\\.)started(?:\\.|$)",
                        "description": "Disallow 'started'; prefer a specific lifecycle action (e.g. session.opened)."
                    }
                },
                {
                    "type": "string",
                    "not": {
                        "pattern": "(?:^|\\.)failed(?:\\.|$)",
                        "description": "Disallow 'failed'; model the concrete failure (e.g. payment.authorization.failed -> payment.authorization.rejected)."
                    }
                }
            ],
            "description": "Event type (uk.nhs.notify.*) using reverse-DNS style; ambiguous verbs (completed, finished, updated, changed, processed, handled, status, started, failed) disallowed.",
            "examples": [
                "uk.nhs.notify.ordering.order.read"
            ],
            "$comment": "NHS naming: lower-dot namespaced; allowed chars a-z0-9 and dots; banned tokens: completed, finished, updated, changed, processed, handled, status, started, failed."
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
            "additionalProperties": false,
            "required": [
                "notify-payload"
            ],
            "properties": {
                "notify-payload": {
                    "$ref": "./nhs-notify-payload.schema.json",
                    "description": "Structured Notify payload containing domain data (notify-data) and metadata (notify-metadata)."
                }
            },
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
        "data"
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
                        "pattern": "^/data-plane"
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
            "dataschema": "https://nhsdigital.github.io/nhs-notify-standards/cloudevents/nhs-notify-example-event-data.schema.json",
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
```


