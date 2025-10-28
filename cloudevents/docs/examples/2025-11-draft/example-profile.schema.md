

# NHS Notify Example Event Profile

<p>NHS Notify Example Event profile for CloudEvents 1.0 including additional governance and tracing attributes.</p>

<table>
<tbody>
<tr><th>$id</th><td>/examples/2025-11-draft/example-profile.schema.json</td></tr>
<tr><th>$schema</th><td>https://json-schema.org/draft/2020-12/schema</td></tr>
</tbody>
</table>

## Properties

<table class="jssd-properties-table"><thead><tr><th colspan="2">Name</th><th>Type</th></tr></thead><tbody><tr><td colspan="2"><a href="#domainprofileversion">domainprofileversion</a></td><td>String=1.0.0</td></tr><tr><td colspan="2"><a href="#domainprofilepublished">domainprofilepublished</a></td><td>String=2025-11-draft</td></tr><tr><td rowspan="1"><a href="#type">type</a></td><td rowspan="1">All of:</td><td><a href="#type-0">NHS Notify versioned event type pattern (String)</a></td></tr><tr><td colspan="2"><a href="#source">source</a></td><td>String</td></tr><tr><td colspan="2" rowspan="1">All of:</td><td>Object (of type <a href="../../common/2025-11-draft/nhs-notify-profile.schema.html">NHS Notify CloudEvents Profile</a>)</td></tr></tbody></table>



<hr />


## domainprofileversion


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">NHS Notify CloudEvents profile semantic version.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    <tr>
      <th>Const</th>
      <td colspan="2">1.0.0</td>
    </tr>
  </tbody>
</table>




## domainprofilepublished


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">NHS Notify CloudEvents profile publication date (YYYY-MM).</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    <tr>
      <th>Const</th>
      <td colspan="2">2025-11-draft</td>
    </tr>
  </tbody>
</table>




## <a id="type"></a> type


<table class="jssd-property-table">
  <tbody>
    <tr><tr><td rowspan="1"><a href="#type">Type</a></td><td rowspan="1">All of:</td><td><a href="#type-0">NHS Notify versioned event type pattern (String)</a></td></tr></tr>
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



### <a id="type-0"></a> type.0 – NHS Notify versioned event type pattern
<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Pattern</th>
      <td colspan="2">^uk\.nhs\.notify\.example\.[a-z0-9]+(?:\.[a-z0-9]+)*\.v[0-9]+$</td>
    </tr>
  </tbody>
</table>





## source


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    <tr>
      <th>Min Length</th>
      <td colspan="2">40</td>
    </tr><tr>
      <th>Format</th>
      <td colspan="2">uri-reference</td>
    </tr><tr>
      <th>Pattern</th>
      <td colspan="2">^/nhs/england/notify/(production|staging|development|uat)/(primary|secondary|dev-[0-9]+)/(data-plane|control-plane)/example</td>
    </tr>
  </tbody>
</table>









<hr />

## Schema
```
{
    "$id": "/examples/2025-11-draft/example-profile.schema.json",
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "title": "NHS Notify Example Event Profile",
    "description": "NHS Notify Example Event profile for CloudEvents 1.0 including additional governance and tracing attributes.",
    "type": "object",
    "allOf": [
        {
            "$ref": "../../common/2025-11-draft/nhs-notify-profile.schema.json"
        }
    ],
    "properties": {
        "domainprofileversion": {
            "type": "string",
            "const": "1.0.0",
            "description": "NHS Notify CloudEvents profile semantic version.",
            "$comment": "Increment: PATCH=add optional attrs; MINOR=add conditionally-required or new enums; MAJOR=breaking change."
        },
        "domainprofilepublished": {
            "type": "string",
            "const": "2025-11-draft",
            "description": "NHS Notify CloudEvents profile publication date (YYYY-MM).",
            "$comment": "Publication date of this profile version (YYYY-MM)."
        },
        "type": {
            "type": "string",
            "minLength": 1,
            "allOf": [
                {
                    "name": "NHS Notify versioned event type pattern",
                    "type": "string",
                    "pattern": "^uk\\.nhs\\.notify\\.example\\.[a-z0-9]+(?:\\.[a-z0-9]+)*\\.v[0-9]+$"
                }
            ]
        },
        "source": {
            "type": "string",
            "pattern": "^/nhs/england/notify/(production|staging|development|uat)/(primary|secondary|dev-[0-9]+)/(data-plane|control-plane)/example",
            "minLength": 40,
            "format": "uri-reference"
        }
    }
}
```


