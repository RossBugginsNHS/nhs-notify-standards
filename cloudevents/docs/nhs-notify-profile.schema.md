

# NHS Notify CloudEvents Profile

<p>NHS Notify profile for CloudEvents 1.0 with selected extensions.</p>

<table>
<tbody>
<tr><th>$id</th><td>nhs-notify-profile.schema.json</td></tr>
<tr><th>$schema</th><td>https://json-schema.org/draft/2020-12/schema</td></tr>
</tbody>
</table>

## Properties

<table class="jssd-properties-table"><thead><tr><th colspan="2">Name</th><th>Type</th></tr></thead><tbody><tr><td colspan="2"><a href="#specversion">specversion</a></td><td>String=1.0</td></tr><tr><td colspan="2"><a href="#id">id</a></td><td>String</td></tr><tr><td colspan="2"><a href="#source">source</a></td><td>String</td></tr><tr><td colspan="2"><a href="#subject">subject</a></td><td>String</td></tr><tr><td rowspan="9">type</td><td rowspan="9">All of:</td><td>String</td></tr><tr><td>String</td></tr><tr><td>String</td></tr><tr><td>String</td></tr><tr><td>String</td></tr><tr><td>String</td></tr><tr><td>String</td></tr><tr><td>String</td></tr><tr><td>String</td></tr><tr><td colspan="2"><a href="#time">time</a></td><td>String</td></tr><tr><td colspan="2"><a href="#datacontenttype">datacontenttype</a></td><td>String=application/json</td></tr><tr><td colspan="2"><a href="#dataschema">dataschema</a></td><td>String</td></tr><tr><td colspan="2"><a href="#data">data</a></td><td>Object</td></tr><tr><td colspan="2"><a href="#traceparent">traceparent</a></td><td>String</td></tr><tr><td colspan="2"><a href="#tracestate">tracestate</a></td><td>String</td></tr><tr><td colspan="2"><a href="#partitionkey">partitionkey</a></td><td>String</td></tr><tr><td colspan="2"><a href="#recordedtime">recordedtime</a></td><td>String</td></tr><tr><td colspan="2"><a href="#sampledrate">sampledrate</a></td><td>Integer</td></tr><tr><td colspan="2"><a href="#sequence">sequence</a></td><td>String</td></tr><tr><td rowspan="6">severitytext</td><td rowspan="6">One of:</td><td>String</td></tr><tr><td>String</td></tr><tr><td>String</td></tr><tr><td>String</td></tr><tr><td>String</td></tr><tr><td>String</td></tr><tr><td colspan="2"><a href="#severitynumber">severitynumber</a></td><td>Integer</td></tr><tr><td rowspan="4">dataclassification</td><td rowspan="4">One of:</td><td>String</td></tr><tr><td>String</td></tr><tr><td>String</td></tr><tr><td>String</td></tr><tr><td rowspan="6">dataregulation</td><td rowspan="6">One of:</td><td>String</td></tr><tr><td>String</td></tr><tr><td>String</td></tr><tr><td>String</td></tr><tr><td>String</td></tr><tr><td>String</td></tr><tr><td rowspan="4">datacategory</td><td rowspan="4">One of:</td><td>String</td></tr><tr><td>String</td></tr><tr><td>String</td></tr><tr><td>String</td></tr><tr><td colspan="2" rowspan="1">All of:</td><td></td></tr></tbody></table>



<hr />


## specversion


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">CloudEvents specification version (must be 1.0).</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">Yes</td>
    </tr>
    <tr>
      <th>Const</th>
      <td colspan="2">1.0</td>
    </tr>
  </tbody>
</table>




## id


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Unique event identifier (UUID v4 recommended) that is unique for the producing source.</td>
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
    </tr>
  </tbody>
</table>




## source


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Logical producer path starting with /data-plane or /control-plane followed by lowercase segments.</td>
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
    </tr>
  </tbody>
</table>




## subject


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Resource path (no leading slash) within the source; lowercase segments separated by &#x27;/&#x27;.</td>
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
    </tr>
  </tbody>
</table>




## type


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Event type in reverse-DNS style: uk.nhs.notify.&lt;domain&gt;[.&lt;subtype&gt;...]; certain ambiguous verbs are disallowed.</td>
    </tr>
    <tr><tr><td rowspan="9">Type</td><td rowspan="9">All of:</td><td>String</td></tr><tr><td>String</td></tr><tr><td>String</td></tr><tr><td>String</td></tr><tr><td>String</td></tr><tr><td>String</td></tr><tr><td>String</td></tr><tr><td>String</td></tr><tr><td>String</td></tr></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">Yes</td>
    </tr>
    <tr>
      <th>Min Length</th>
      <td colspan="2">1</td>
    </tr><tr>
      <th>Pattern</th>
      <td colspan="2">^uk\.nhs\.notify\.[a-z0-9]+(\.[a-z0-9]+)*$</td>
    </tr>
  </tbody>
</table>



### type.0


<table class="jssd-property-table">
  <tbody>
    
    
  </tbody>
</table>




### type.1


<table class="jssd-property-table">
  <tbody>
    
    
  </tbody>
</table>




### type.2


<table class="jssd-property-table">
  <tbody>
    
    
  </tbody>
</table>




### type.3


<table class="jssd-property-table">
  <tbody>
    
    
  </tbody>
</table>




### type.4


<table class="jssd-property-table">
  <tbody>
    
    
  </tbody>
</table>




### type.5


<table class="jssd-property-table">
  <tbody>
    
    
  </tbody>
</table>




### type.6


<table class="jssd-property-table">
  <tbody>
    
    
  </tbody>
</table>




### type.7


<table class="jssd-property-table">
  <tbody>
    
    
  </tbody>
</table>




### type.8


<table class="jssd-property-table">
  <tbody>
    
    
  </tbody>
</table>





## time


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Time the event occurred (RFC 3339 UTC).</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">Yes</td>
    </tr>
    <tr>
      <th>Format</th>
      <td colspan="2">date-time</td>
    </tr>
  </tbody>
</table>




## datacontenttype


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Media type of the &#x27;data&#x27; value; NHS profile fixes this to application/json.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    <tr>
      <th>Const</th>
      <td colspan="2">application/json</td>
    </tr>
  </tbody>
</table>




## dataschema


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">URI of a schema that describes data.notify-payload (if published).</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
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
  <table class="jssd-properties-table"><thead><tr><th colspan="2">Name</th><th>Type</th></tr></thead><tbody><tr><td rowspan="1">notify-payload</td><td rowspan="1">All of:</td><td>Object</td></tr></tbody></table>


### data.notify-payload


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Structured Notify payload containing domain data (notify-data) and metadata (notify-metadata).</td>
    </tr>
    <tr><tr><td rowspan="1">Type</td><td rowspan="1">All of:</td><td>Object</td></tr></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">Yes</td>
    </tr>
    
  </tbody>
</table>



### data.notify-payload.0


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>$id</th>
      <td colspan="2">nhs-notify-payload.schema.json</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Object</td></tr>
    
  </tbody>
</table>



### data.notify-payload.0.notify-data


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Domain specific data attributes (variant: DataPlane | ControlPlane).</td>
    </tr>
    <tr><tr><td rowspan="2">Type</td><td rowspan="2">Any of:</td><td>Object</td></tr><tr><td>Object</td></tr></tr>
    
  </tbody>
</table>



### data.notify-payload.0.notify-data.0


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Placeholder for data-plane specific properties (extend in concrete event schemas).</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Object</td></tr>
    
  </tbody>
</table>




### data.notify-payload.0.notify-data.1


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Placeholder for control-plane specific properties (extend in concrete event schemas).</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Object</td></tr>
    
  </tbody>
</table>





### data.notify-payload.0.notify-metadata


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Standard metadata set shared across Notify events.</td>
    </tr>
    <tr><tr><td rowspan="1">Type</td><td rowspan="1">All of:</td><td>Object</td></tr></tr>
    
  </tbody>
</table>



### data.notify-payload.0.notify-metadata.0


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



### data.notify-payload.0.notify-metadata.0.teamResponsible


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Owning engineering team accountable for this event&#x27;s domain logic.</td>
    </tr>
    <tr><tr><td rowspan="3">Type</td><td rowspan="3">One of:</td><td>String</td></tr><tr><td>String</td></tr><tr><td>String</td></tr></tr>
    
  </tbody>
</table>



### data.notify-payload.0.notify-metadata.0.teamResponsible.0


<table class="jssd-property-table">
  <tbody>
    
    <tr>
      <th>Const</th>
      <td colspan="2">Team 1</td>
    </tr>
  </tbody>
</table>




### data.notify-payload.0.notify-metadata.0.teamResponsible.1


<table class="jssd-property-table">
  <tbody>
    
    <tr>
      <th>Const</th>
      <td colspan="2">Team 2</td>
    </tr>
  </tbody>
</table>




### data.notify-payload.0.notify-metadata.0.teamResponsible.2


<table class="jssd-property-table">
  <tbody>
    
    <tr>
      <th>Const</th>
      <td colspan="2">Team 3</td>
    </tr>
  </tbody>
</table>





### data.notify-payload.0.notify-metadata.0.notifyDomain


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">High-level business domain to which the event belongs.</td>
    </tr>
    <tr><tr><td rowspan="4">Type</td><td rowspan="4">One of:</td><td>String</td></tr><tr><td>String</td></tr><tr><td>String</td></tr><tr><td>String</td></tr></tr>
    
  </tbody>
</table>



### data.notify-payload.0.notify-metadata.0.notifyDomain.0


<table class="jssd-property-table">
  <tbody>
    
    <tr>
      <th>Const</th>
      <td colspan="2">Ordering</td>
    </tr>
  </tbody>
</table>




### data.notify-payload.0.notify-metadata.0.notifyDomain.1


<table class="jssd-property-table">
  <tbody>
    
    <tr>
      <th>Const</th>
      <td colspan="2">Delivering</td>
    </tr>
  </tbody>
</table>




### data.notify-payload.0.notify-metadata.0.notifyDomain.2


<table class="jssd-property-table">
  <tbody>
    
    <tr>
      <th>Const</th>
      <td colspan="2">Reporting</td>
    </tr>
  </tbody>
</table>




### data.notify-payload.0.notify-metadata.0.notifyDomain.3


<table class="jssd-property-table">
  <tbody>
    
    <tr>
      <th>Const</th>
      <td colspan="2">Enquries</td>
    </tr>
  </tbody>
</table>





### data.notify-payload.0.notify-metadata.0.microservice


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




### data.notify-payload.0.notify-metadata.0.version


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









## traceparent


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">W3C Trace Context traceparent header value for distributed tracing.</td>
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
    </tr>
  </tbody>
</table>




## tracestate


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Optional W3C Trace Context tracestate header value carrying vendor extension info.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    
  </tbody>
</table>




## partitionkey


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Key used to deterministically partition events (ordering / scaling). 1-64 lowercase alphanumeric or hyphen characters.</td>
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
    </tr>
  </tbody>
</table>




## recordedtime


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Time the event was recorded/persisted (bitemporal) in RFC 3339 UTC; should be &gt;&#x3D; time.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">Yes</td>
    </tr>
    <tr>
      <th>Format</th>
      <td colspan="2">date-time</td>
    </tr>
  </tbody>
</table>




## sampledrate


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Positive integer indicating how many occurrences this single event represents (sampling).</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Integer</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    <tr>
      <th>Minimum</th>
      <td colspan="2">1</td>
    </tr>
  </tbody>
</table>




## sequence


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">String representation of a 64-bit unsigned integer, left-padded with zeros to 20 digits.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    <tr>
      <th>Pattern</th>
      <td colspan="2">^\d{20}$</td>
    </tr>
  </tbody>
</table>




## severitytext


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Textual severity level of the event (TRACE, DEBUG, INFO, WARN, ERROR, FATAL).</td>
    </tr>
    <tr><tr><td rowspan="6">Type</td><td rowspan="6">One of:</td><td>String</td></tr><tr><td>String</td></tr><tr><td>String</td></tr><tr><td>String</td></tr><tr><td>String</td></tr><tr><td>String</td></tr></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    <tr>
      <th>Min Length</th>
      <td colspan="2">1</td>
    </tr>
  </tbody>
</table>



### severitytext.0


<table class="jssd-property-table">
  <tbody>
    
    <tr>
      <th>Const</th>
      <td colspan="2">TRACE</td>
    </tr>
  </tbody>
</table>




### severitytext.1


<table class="jssd-property-table">
  <tbody>
    
    <tr>
      <th>Const</th>
      <td colspan="2">DEBUG</td>
    </tr>
  </tbody>
</table>




### severitytext.2


<table class="jssd-property-table">
  <tbody>
    
    <tr>
      <th>Const</th>
      <td colspan="2">INFO</td>
    </tr>
  </tbody>
</table>




### severitytext.3


<table class="jssd-property-table">
  <tbody>
    
    <tr>
      <th>Const</th>
      <td colspan="2">WARN</td>
    </tr>
  </tbody>
</table>




### severitytext.4


<table class="jssd-property-table">
  <tbody>
    
    <tr>
      <th>Const</th>
      <td colspan="2">ERROR</td>
    </tr>
  </tbody>
</table>




### severitytext.5


<table class="jssd-property-table">
  <tbody>
    
    <tr>
      <th>Const</th>
      <td colspan="2">FATAL</td>
    </tr>
  </tbody>
</table>





## severitynumber


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Numeric severity 0-6 aligned with severitytext (mapping consistent with OpenTelemetry).</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Integer</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">Yes</td>
    </tr>
    <tr>
      <th>Maximum</th>
      <td colspan="2">6</td>
    </tr>
  </tbody>
</table>




## dataclassification


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Classification of the event data&#x27;s sensitivity (public | internal | confidential | restricted).</td>
    </tr>
    <tr><tr><td rowspan="4">Type</td><td rowspan="4">One of:</td><td>String</td></tr><tr><td>String</td></tr><tr><td>String</td></tr><tr><td>String</td></tr></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    <tr>
      <th>Min Length</th>
      <td colspan="2">1</td>
    </tr>
  </tbody>
</table>



### dataclassification.0


<table class="jssd-property-table">
  <tbody>
    
    <tr>
      <th>Const</th>
      <td colspan="2">public</td>
    </tr>
  </tbody>
</table>




### dataclassification.1


<table class="jssd-property-table">
  <tbody>
    
    <tr>
      <th>Const</th>
      <td colspan="2">internal</td>
    </tr>
  </tbody>
</table>




### dataclassification.2


<table class="jssd-property-table">
  <tbody>
    
    <tr>
      <th>Const</th>
      <td colspan="2">confidential</td>
    </tr>
  </tbody>
</table>




### dataclassification.3


<table class="jssd-property-table">
  <tbody>
    
    <tr>
      <th>Const</th>
      <td colspan="2">restricted</td>
    </tr>
  </tbody>
</table>





## dataregulation


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Regulatory regime(s) applicable to handling of this data (e.g. GDPR).</td>
    </tr>
    <tr><tr><td rowspan="6">Type</td><td rowspan="6">One of:</td><td>String</td></tr><tr><td>String</td></tr><tr><td>String</td></tr><tr><td>String</td></tr><tr><td>String</td></tr><tr><td>String</td></tr></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    <tr>
      <th>Min Length</th>
      <td colspan="2">1</td>
    </tr>
  </tbody>
</table>



### dataregulation.0


<table class="jssd-property-table">
  <tbody>
    
    <tr>
      <th>Const</th>
      <td colspan="2">GDPR</td>
    </tr>
  </tbody>
</table>




### dataregulation.1


<table class="jssd-property-table">
  <tbody>
    
    <tr>
      <th>Const</th>
      <td colspan="2">HIPAA</td>
    </tr>
  </tbody>
</table>




### dataregulation.2


<table class="jssd-property-table">
  <tbody>
    
    <tr>
      <th>Const</th>
      <td colspan="2">PCI-DSS</td>
    </tr>
  </tbody>
</table>




### dataregulation.3


<table class="jssd-property-table">
  <tbody>
    
    <tr>
      <th>Const</th>
      <td colspan="2">ISO-27001</td>
    </tr>
  </tbody>
</table>




### dataregulation.4


<table class="jssd-property-table">
  <tbody>
    
    <tr>
      <th>Const</th>
      <td colspan="2">NIST-800-53</td>
    </tr>
  </tbody>
</table>




### dataregulation.5


<table class="jssd-property-table">
  <tbody>
    
    <tr>
      <th>Const</th>
      <td colspan="2">CCPA</td>
    </tr>
  </tbody>
</table>





## datacategory


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Data category or sensitivity grouping (e.g. standard | sensitive | special-category).</td>
    </tr>
    <tr><tr><td rowspan="4">Type</td><td rowspan="4">One of:</td><td>String</td></tr><tr><td>String</td></tr><tr><td>String</td></tr><tr><td>String</td></tr></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    <tr>
      <th>Min Length</th>
      <td colspan="2">1</td>
    </tr>
  </tbody>
</table>



### datacategory.0


<table class="jssd-property-table">
  <tbody>
    
    <tr>
      <th>Const</th>
      <td colspan="2">on-sensitive</td>
    </tr>
  </tbody>
</table>




### datacategory.1


<table class="jssd-property-table">
  <tbody>
    
    <tr>
      <th>Const</th>
      <td colspan="2">standard</td>
    </tr>
  </tbody>
</table>




### datacategory.2


<table class="jssd-property-table">
  <tbody>
    
    <tr>
      <th>Const</th>
      <td colspan="2">sensitive</td>
    </tr>
  </tbody>
</table>




### datacategory.3


<table class="jssd-property-table">
  <tbody>
    
    <tr>
      <th>Const</th>
      <td colspan="2">special-category</td>
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
    "type": "object",
    "additionalProperties": false,
    "$comment": "CloudEvents allows arbitrary extension attributes. NHS profile: time (occurred-at) is mandatory though optional in CloudEvents spec.",
    "properties": {
        "specversion": {
            "type": "string",
            "const": "1.0",
            "description": "CloudEvents specification version (must be 1.0).",
            "$comment": "CloudEvents version used. Core attributes: specversion,id,source,type (+ optional subject,time,datacontenttype,dataschema,data). Ref: CloudEvents core spec."
        },
        "id": {
            "type": "string",
            "format": "uuid",
            "minLength": 1,
            "description": "Unique event identifier (UUID v4 recommended) that is unique for the producing source.",
            "$comment": "Unique per (source,id). This should be a randomly generated guid that represents the id of the event itself."
        },
        "source": {
            "type": "string",
            "pattern": "^/(data-plane|control-plane)(?:/[a-z0-9-]+)*$",
            "minLength": 12,
            "format": "uri-reference",
            "description": "Logical producer path starting with /data-plane or /control-plane followed by lowercase segments.",
            "$comment": "Must begin with '/data-plane' or '/control-plane'. Subsequent segments: lowercase alphanumeric or hyphen. No trailing '/'."
        },
        "subject": {
            "type": "string",
            "pattern": "^(?:[a-z0-9-]+)(?:/[a-z0-9-]+)*$",
            "minLength": 5,
            "format": "uri-reference",
            "description": "Resource path (no leading slash) within the source; lowercase segments separated by '/'.",
            "$comment": "URI path: must not start with '/', only lowercase alphanumeric and hyphen segments separated by '/', must not end with '/'."
        },
        "type": {
            "type": "string",
            "minLength": 1,
            "pattern": "^uk\\.nhs\\.notify\\.[a-z0-9]+(\\.[a-z0-9]+)*$",
            "allOf": [
                {
                    "not": {
                        "pattern": "(?:^|\\.)completed(?:\\.|$)"
                    }
                },
                {
                    "not": {
                        "pattern": "(?:^|\\.)finished(?:\\.|$)"
                    }
                },
                {
                    "not": {
                        "pattern": "(?:^|\\.)updated(?:\\.|$)"
                    }
                },
                {
                    "not": {
                        "pattern": "(?:^|\\.)changed(?:\\.|$)"
                    }
                },
                {
                    "not": {
                        "pattern": "(?:^|\\.)processed(?:\\.|$)"
                    }
                },
                {
                    "not": {
                        "pattern": "(?:^|\\.)handled(?:\\.|$)"
                    }
                },
                {
                    "not": {
                        "pattern": "(?:^|\\.)status(?:\\.|$)"
                    }
                },
                {
                    "not": {
                        "pattern": "(?:^|\\.)started(?:\\.|$)"
                    }
                },
                {
                    "not": {
                        "pattern": "(?:^|\\.)failed(?:\\.|$)"
                    }
                }
            ],
            "description": "Event type in reverse-DNS style: uk.nhs.notify.<domain>[.<subtype>...]; certain ambiguous verbs are disallowed.",
            "$comment": "NHS naming: lower-dot namespaced; allowed chars a-z0-9 and dots; banned tokens: completed, finished, updated, changed, processed, handled, status, started, failed."
        },
        "time": {
            "type": "string",
            "format": "date-time",
            "description": "Time the event occurred (RFC 3339 UTC).",
            "$comment": "RFC3339 UTC occurred-at (REQUIRED in NHS profile)."
        },
        "datacontenttype": {
            "type": "string",
            "const": "application/json",
            "description": "Media type of the 'data' value; NHS profile fixes this to application/json.",
            "$comment": "Usually application/json."
        },
        "dataschema": {
            "type": "string",
            "description": "URI of a schema that describes data.notify-payload (if published).",
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
                    "type": "object",
                    "allOf": [
                        {
                            "$ref": "./nhs-notify-payload.schema.json"
                        }
                    ],
                    "description": "Structured Notify payload containing domain data (notify-data) and metadata (notify-metadata)."
                }
            },
            "description": "Container object wrapping the structured Notify payload.",
            "$comment": "Domain payload (arbitrary JSON value)."
        },
        "traceparent": {
            "type": "string",
            "minLength": 1,
            "pattern": "^00-[0-9a-f]{32}-[0-9a-f]{16}-[0-9a-f]{2}$",
            "description": "W3C Trace Context traceparent header value for distributed tracing.",
            "$comment": "W3C Trace Context traceparent (required when tracing used)."
        },
        "tracestate": {
            "type": "string",
            "description": "Optional W3C Trace Context tracestate header value carrying vendor extension info.",
            "$comment": "W3C Trace Context tracestate (optional)."
        },
        "partitionkey": {
            "type": "string",
            "minLength": 1,
            "maxLength": 64,
            "pattern": "^[a-z0-9-]+$",
            "description": "Key used to deterministically partition events (ordering / scaling). 1-64 lowercase alphanumeric or hyphen characters.",
            "$comment": "Non-empty partition key for scaling / causal grouping. Must be 1-64 characters, only lowercase letters, numbers, and hyphen."
        },
        "recordedtime": {
            "type": "string",
            "format": "date-time",
            "description": "Time the event was recorded/persisted (bitemporal) in RFC 3339 UTC; should be >= time.",
            "$comment": "Bitemporal created-at; should be >= time."
        },
        "sampledrate": {
            "type": "integer",
            "minimum": 1,
            "description": "Positive integer indicating how many occurrences this single event represents (sampling).",
            "$comment": "Integer > 0 indicating how many similar occurrences this event represents."
        },
        "sequence": {
            "type": "string",
            "pattern": "^\\d{20}$",
            "description": "String representation of a 64-bit unsigned integer, left-padded with zeros to 20 digits.",
            "$comment": "Lexicographically comparable ordering string per source. Must be a string of exactly 20 digits, left-padded with zeros, representing a 64-bit unsigned integer."
        },
        "severitytext": {
            "type": "string",
            "minLength": 1,
            "oneOf": [
                {
                    "const": "TRACE"
                },
                {
                    "const": "DEBUG"
                },
                {
                    "const": "INFO"
                },
                {
                    "const": "WARN"
                },
                {
                    "const": "ERROR"
                },
                {
                    "const": "FATAL"
                }
            ],
            "description": "Textual severity level of the event (TRACE, DEBUG, INFO, WARN, ERROR, FATAL).",
            "$comment": "Severity text (TRACE, DEBUG, INFO, WARN, ERROR, FATAL, etc.)."
        },
        "severitynumber": {
            "type": "integer",
            "minimum": 0,
            "maximum": 6,
            "description": "Numeric severity 0-6 aligned with severitytext (mapping consistent with OpenTelemetry).",
            "$comment": "Numeric severity corresponding to severitytext."
        },
        "dataclassification": {
            "type": "string",
            "minLength": 1,
            "oneOf": [
                {
                    "const": "public"
                },
                {
                    "const": "internal"
                },
                {
                    "const": "confidential"
                },
                {
                    "const": "restricted"
                }
            ],
            "description": "Classification of the event data's sensitivity (public | internal | confidential | restricted).",
            "$comment": "Data classification e.g. public|internal|confidential|restricted."
        },
        "dataregulation": {
            "type": "string",
            "minLength": 1,
            "oneOf": [
                {
                    "const": "GDPR"
                },
                {
                    "const": "HIPAA"
                },
                {
                    "const": "PCI-DSS"
                },
                {
                    "const": "ISO-27001"
                },
                {
                    "const": "NIST-800-53"
                },
                {
                    "const": "CCPA"
                }
            ],
            "description": "Regulatory regime(s) applicable to handling of this data (e.g. GDPR).",
            "$comment": "Regulation tags e.g. GDPR, HIPAA."
        },
        "datacategory": {
            "type": "string",
            "minLength": 1,
            "oneOf": [
                {
                    "const": "on-sensitive"
                },
                {
                    "const": "standard"
                },
                {
                    "const": "sensitive"
                },
                {
                    "const": "special-category"
                }
            ],
            "description": "Data category or sensitivity grouping (e.g. standard | sensitive | special-category).",
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
    "description": "NHS Notify profile for CloudEvents 1.0 with selected extensions.",
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
                        "$comment": "When source is /data-plane..., subject must start with customer/{uuid} and may have further segments which are either lowercase tokens or UUIDs."
                    }
                },
                "required": [
                    "subject"
                ]
            }
        }
    ]
}
```


