

# Example Event

<p>Example  event</p>

<table>
<tbody>
<tr><th>$id</th><td>/examples/2025-10/events/nhs-notify-example-event.schema.json</td></tr>
<tr><th>$schema</th><td>https://json-schema.org/draft/2020-12/schema</td></tr>
</tbody>
</table>

## Properties

<table class="jssd-properties-table"><thead><tr><th colspan="2">Name</th><th>Type</th></tr></thead><tbody><tr><td colspan="2"><a href="#type">type</a></td><td>String=uk.nhs.notify.ordering.order.read.v1</td></tr><tr><td colspan="2"><a href="#source">source</a></td><td>String</td></tr><tr><td colspan="2"><a href="#subject">subject</a></td><td>String</td></tr><tr><td colspan="2"><a href="#dataschema">dataschema</a></td><td>String=../data/nhs-notify-example-event-data.schema.json</td></tr><tr><td colspan="2"><a href="#data">data</a></td><td>Object (of type <a href="../data/nhs-notify-example-event-data.schema.html">Example data type</a>)</td></tr><tr><td colspan="2" rowspan="1">All of:</td><td>Object (of type <a href="../example-profile.schema.html">NHS Notify Example Event Profile</a>)</td></tr></tbody></table>


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

  <p>Defined in <a href="../data/nhs-notify-example-event-data.schema.html">../data/nhs-notify-example-event-data.schema.html</a></p>

<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>$id</th>
      <td colspan="2">/examples/2025-10/data/nhs-notify-example-event-data.schema.json</td>
    </tr>
    <tr>
      <th>Title</th>
      <td colspan="2">Example data type</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">Example payload wrapper containing notify-payload.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Object (of type <a href="../data/nhs-notify-example-event-data.schema.html">Example data type</a>)</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">Yes</td>
    </tr>
    
  </tbody>
</table>

### Properties
  <table class="jssd-properties-table"><thead><tr><th colspan="2">Name</th><th>Type</th></tr></thead><tbody><tr><td rowspan="2">nhsNumber</td><td rowspan="2">Any of:</td><td>String</td></tr><tr><td>String</td></tr></tbody></table>








<hr />

## Schema
```
{
    "$id": "/examples/2025-10/events/nhs-notify-example-event.schema.json",
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "title": "Example Event",
    "description": "Example  event",
    "type": "object",
    "allOf": [
        {
            "$ref": "../example-profile.schema.json"
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
            "$ref": "../data/nhs-notify-example-event-data.schema.json",
            "description": "Example payload wrapper containing notify-payload."
        }
    },
    "required": [
        "type",
        "source",
        "dataschema",
        "data"
    ],
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
    ]
}
```


