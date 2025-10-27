

# NHS Notify Example Event Profile

<p>NHS Notify Example Event profile for CloudEvents 1.0 including additional governance and tracing attributes.</p>

<table>
<tbody>
<tr><th>$id</th><td>/examples/2025-10/example-profile.schema.json</td></tr>
<tr><th>$schema</th><td>https://json-schema.org/draft/2020-12/schema</td></tr>
</tbody>
</table>




<hr />




<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>$id</th>
      <td colspan="2">/examples/2025-10/example-profile.schema.json</td>
    </tr>
    <tr>
      <th>Title</th>
      <td colspan="2">NHS Notify Example Event Profile</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">NHS Notify Example Event profile for CloudEvents 1.0 including additional governance and tracing attributes.</td>
    </tr>
    <tr><tr><td rowspan="1">Type</td><td rowspan="1">All of:</td><td>Object (of type <a href="../../common/2025-10/nhs-notify-profile.schema.html">NHS Notify CloudEvents Profile</a>)</td></tr></tr>
    
  </tbody>
</table>



## 0

  <p>Defined in <a href="../../common/2025-10/nhs-notify-profile.schema.html">../../common/2025-10/nhs-notify-profile.schema.html</a></p>

<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>$id</th>
      <td colspan="2">/common/2025-10/nhs-notify-profile.schema.json</td>
    </tr>
    <tr>
      <th>Title</th>
      <td colspan="2">NHS Notify CloudEvents Profile</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">NHS Notify profile for CloudEvents 1.0 including additional governance and tracing attributes.</td>
    </tr>
    <tr><tr><td rowspan="7">Type</td><td rowspan="7">All of:</td><td>Object (of type <a href="../../common/2025-10/nhs-notify-profile.schema.html">NHS Notify CloudEvents Profile</a>)</td></tr><tr><td>Object (of type <a href="../../common/2025-10/nhs-notify-profile.schema.html">NHS Notify CloudEvents Profile</a>)</td></tr><tr><td>Object (of type <a href="../../common/2025-10/nhs-notify-profile.schema.html">NHS Notify CloudEvents Profile</a>)</td></tr><tr><td>Object (of type <a href="../../common/2025-10/nhs-notify-profile.schema.html">NHS Notify CloudEvents Profile</a>)</td></tr><tr><td>Object (of type <a href="../../common/2025-10/nhs-notify-profile.schema.html">NHS Notify CloudEvents Profile</a>)</td></tr><tr><td>Object (of type <a href="../../common/2025-10/nhs-notify-profile.schema.html">NHS Notify CloudEvents Profile</a>)</td></tr><tr><td>Object (of type <a href="../../common/2025-10/nhs-notify-profile.schema.html">NHS Notify CloudEvents Profile</a>)</td></tr></tr>
    
  </tbody>
</table>

### Properties
  <table class="jssd-properties-table"><thead><tr><th colspan="2">Name</th><th>Type</th></tr></thead><tbody><tr><td colspan="2"><a href="#profileversion">profileversion</a></td><td>String=1.0.0</td></tr><tr><td colspan="2"><a href="#profilepublished">profilepublished</a></td><td>String=2025-10</td></tr><tr><td colspan="2"><a href="#specversion">specversion</a></td><td>String=1.0</td></tr><tr><td colspan="2"><a href="#id">id</a></td><td>String</td></tr><tr><td colspan="2"><a href="#source">source</a></td><td>String</td></tr><tr><td colspan="2"><a href="#subject">subject</a></td><td>String</td></tr><tr><td rowspan="10"><a href="#type">type</a></td><td rowspan="10">All of:</td><td><a href="#type-0">String</a></td></tr>
<tr><td><a href="#type-1">String</a></td></tr>
<tr><td><a href="#type-2">String</a></td></tr>
<tr><td><a href="#type-3">String</a></td></tr>
<tr><td><a href="#type-4">String</a></td></tr>
<tr><td><a href="#type-5">String</a></td></tr>
<tr><td><a href="#type-6">String</a></td></tr>
<tr><td><a href="#type-7">String</a></td></tr>
<tr><td><a href="#type-8">String</a></td></tr>
<tr><td><a href="#type-9">String</a></td></tr><tr><td colspan="2"><a href="#time">time</a></td><td>String</td></tr><tr><td colspan="2"><a href="#datacontenttype">datacontenttype</a></td><td>String=application/json</td></tr><tr><td colspan="2"><a href="#dataschema">dataschema</a></td><td>String</td></tr><tr><td colspan="2"><a href="#data">data</a></td><td>Object</td></tr><tr><td colspan="2"><a href="#traceparent">traceparent</a></td><td>String</td></tr><tr><td colspan="2"><a href="#tracestate">tracestate</a></td><td>String</td></tr><tr><td colspan="2"><a href="#partitionkey">partitionkey</a></td><td>String</td></tr><tr><td colspan="2"><a href="#recordedtime">recordedtime</a></td><td>String</td></tr><tr><td colspan="2"><a href="#sampledrate">sampledrate</a></td><td>Integer</td></tr><tr><td colspan="2"><a href="#sequence">sequence</a></td><td>String</td></tr><tr><td colspan="2"><a href="#severitytext">severitytext</a></td><td>String</td></tr><tr><td colspan="2"><a href="#severitynumber">severitynumber</a></td><td>Integer</td></tr><tr><td colspan="2"><a href="#dataclassification">dataclassification</a></td><td>String</td></tr><tr><td colspan="2"><a href="#dataregulation">dataregulation</a></td><td>String</td></tr><tr><td colspan="2"><a href="#datacategory">datacategory</a></td><td>String</td></tr><tr><td colspan="2" rowspan="7">All of:</td><td></td></tr><tr><td></td></tr><tr><td></td></tr><tr><td></td></tr><tr><td></td></tr><tr><td></td></tr><tr><td></td></tr></tbody></table>









<hr />

## Schema
```
{
    "$id": "/examples/2025-10/example-profile.schema.json",
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "title": "NHS Notify Example Event Profile",
    "description": "NHS Notify Example Event profile for CloudEvents 1.0 including additional governance and tracing attributes.",
    "type": "object",
    "allOf": [
        {
            "$ref": "../../common/2025-10/nhs-notify-profile.schema.json"
        }
    ]
}
```


