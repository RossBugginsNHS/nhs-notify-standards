

# NHS Notify CloudEvents Profile

<p>NHS Notify profile for CloudEvents 1.0 including additional governance and tracing attributes.</p>

<table>
<tbody>
<tr><th>$id</th><td>nhs-notify-profile.schema.json</td></tr>
<tr><th>$schema</th><td>https://json-schema.org/draft/2020-12/schema</td></tr>
</tbody>
</table>

## Properties

<table class="jssd-properties-table"><thead><tr><th colspan="2">Name</th><th>Type</th></tr></thead><tbody><tr><td colspan="2"><a href="#specversion">specversion</a></td><td>String=1.0</td></tr><tr><td colspan="2"><a href="#id">id</a></td><td>String</td></tr><tr><td colspan="2"><a href="#source">source</a></td><td>String</td></tr><tr><td colspan="2"><a href="#subject">subject</a></td><td>String</td></tr><tr><td rowspan="9">type</td><td rowspan="9">All of:</td><td>String</td></tr><tr><td>String</td></tr><tr><td>String</td></tr><tr><td>String</td></tr><tr><td>String</td></tr><tr><td>String</td></tr><tr><td>String</td></tr><tr><td>String</td></tr><tr><td>String</td></tr><tr><td colspan="2"><a href="#time">time</a></td><td>String</td></tr><tr><td colspan="2"><a href="#datacontenttype">datacontenttype</a></td><td>String=application/json</td></tr><tr><td colspan="2"><a href="#dataschema">dataschema</a></td><td>String</td></tr><tr><td colspan="2"><a href="#data">data</a></td><td>Object</td></tr><tr><td colspan="2"><a href="#traceparent">traceparent</a></td><td>String</td></tr><tr><td colspan="2"><a href="#tracestate">tracestate</a></td><td>String</td></tr><tr><td colspan="2"><a href="#partitionkey">partitionkey</a></td><td>String</td></tr><tr><td colspan="2"><a href="#recordedtime">recordedtime</a></td><td>String</td></tr><tr><td colspan="2"><a href="#sampledrate">sampledrate</a></td><td>Integer</td></tr><tr><td colspan="2"><a href="#sequence">sequence</a></td><td>String</td></tr><tr><td colspan="2"><a href="#severitytext">severitytext</a></td><td>String</td></tr><tr><td colspan="2"><a href="#severitynumber">severitynumber</a></td><td>Integer</td></tr><tr><td colspan="2"><a href="#dataclassification">dataclassification</a></td><td>String</td></tr><tr><td colspan="2"><a href="#dataregulation">dataregulation</a></td><td>String</td></tr><tr><td colspan="2"><a href="#datacategory">datacategory</a></td><td>String</td></tr><tr><td colspan="2" rowspan="1">All of:</td><td></td></tr></tbody></table>



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
    </tr>
  </tbody>
</table>




## severitynumber


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Numeric severity (TRACE&#x3D;0 .. FATAL&#x3D;6).</td>
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
      <td colspan="2"><ul><li>on-sensitive</li><li>standard</li><li>sensitive</li><li>special-category</li></ul></td>
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
            "$comment": "CloudEvents version used. Core attributes: specversion,id,source,type (+ optional subject,time,datacontenttype,dataschema,data). Ref: CloudEvents core spec."
        },
        "id": {
            "type": "string",
            "format": "uuid",
            "minLength": 1,
            "description": "Unique identifier for this event instance (UUID).",
            "$comment": "Unique per (source,id). This should be a randomly generated guid that represents the id of the event itself."
        },
        "source": {
            "type": "string",
            "pattern": "^/(data-plane|control-plane)(?:/[a-z0-9-]+)*$",
            "minLength": 12,
            "format": "uri-reference",
            "description": "Logical event producer path starting /data-plane or /control-plane followed by lowercase segments.",
            "$comment": "Must begin with '/data-plane' or '/control-plane'. Subsequent segments: lowercase alphanumeric or hyphen. No trailing '/'."
        },
        "subject": {
            "type": "string",
            "pattern": "^(?:[a-z0-9-]+)(?:/[a-z0-9-]+)*$",
            "minLength": 5,
            "format": "uri-reference",
            "description": "Resource path (no leading slash) within the source made of lowercase segments separated by '/'.",
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
            "description": "Event type (uk.nhs.notify.*) using reverse-DNS style; ambiguous verbs (completed, finished, updated, changed, processed, handled, status, started, failed) disallowed.",
            "$comment": "NHS naming: lower-dot namespaced; allowed chars a-z0-9 and dots; banned tokens: completed, finished, updated, changed, processed, handled, status, started, failed."
        },
        "time": {
            "type": "string",
            "format": "date-time",
            "description": "Timestamp when the event occurred (RFC 3339).",
            "$comment": "RFC3339 UTC occurred-at (REQUIRED in NHS profile)."
        },
        "datacontenttype": {
            "type": "string",
            "const": "application/json",
            "description": "Media type for the data field (fixed to application/json).",
            "$comment": "Usually application/json."
        },
        "dataschema": {
            "type": "string",
            "description": "URI of a schema that describes the event payload (notify-payload).",
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
            "$comment": "Domain payload (arbitrary JSON value)."
        },
        "traceparent": {
            "type": "string",
            "minLength": 1,
            "pattern": "^00-[0-9a-f]{32}-[0-9a-f]{16}-[0-9a-f]{2}$",
            "description": "W3C Trace Context traceparent header value.",
            "$comment": "W3C Trace Context traceparent (required when tracing used)."
        },
        "tracestate": {
            "type": "string",
            "description": "Optional W3C Trace Context tracestate header value.",
            "$comment": "W3C Trace Context tracestate (optional)."
        },
        "partitionkey": {
            "type": "string",
            "minLength": 1,
            "maxLength": 64,
            "pattern": "^[a-z0-9-]+$",
            "description": "Partition / ordering key (lowercase alphanumerics and hyphen, 1-64 chars).",
            "$comment": "Non-empty partition key for scaling / causal grouping. Must be 1-64 characters, only lowercase letters, numbers, and hyphen."
        },
        "recordedtime": {
            "type": "string",
            "format": "date-time",
            "description": "Timestamp when the event was recorded/persisted (should be >= time).",
            "$comment": "Bitemporal created-at; should be >= time."
        },
        "sampledrate": {
            "type": "integer",
            "minimum": 1,
            "description": "Sampling factor: number of similar occurrences this event represents.",
            "$comment": "Integer > 0 indicating how many similar occurrences this event represents."
        },
        "sequence": {
            "type": "string",
            "pattern": "^\\d{20}$",
            "description": "Zero-padded 20 digit numeric sequence (lexicographically sortable).",
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
            "$comment": "Severity text (TRACE, DEBUG, INFO, WARN, ERROR, FATAL, etc.)."
        },
        "severitynumber": {
            "type": "integer",
            "minimum": 0,
            "maximum": 6,
            "description": "Numeric severity (TRACE=0 .. FATAL=6).",
            "$comment": "Numeric severity corresponding to severitytext."
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
            "$comment": "Regulation tags e.g. GDPR, HIPAA."
        },
        "datacategory": {
            "type": "string",
            "enum": [
                "on-sensitive",
                "standard",
                "sensitive",
                "special-category"
            ],
            "description": "Data category classification (e.g. standard, special-category).",
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
        }
    ]
}
```


