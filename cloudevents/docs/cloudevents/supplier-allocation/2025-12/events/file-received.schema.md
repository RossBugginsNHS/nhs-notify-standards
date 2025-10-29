

# 



<table>
<tbody>
<tr><th>$id</th><td>/supplier-allocation/2025-12/events/file-received.schema.json</td></tr>
<tr><th>$schema</th><td>https://json-schema.org/draft/2020-12/schema</td></tr>
</tbody>
</table>

## Properties

<table class="jssd-properties-table"><thead><tr><th colspan="2">Name</th><th>Type</th></tr></thead><tbody><tr><td colspan="2"><a href="#type">type</a></td><td>String=uk.nhs.notify.supplier.allocation.file.received.v1</td></tr><tr><td colspan="2"><a href="#source">source</a></td><td>String</td></tr><tr><td colspan="2"><a href="#dataschema">dataschema</a></td><td>String=file://../data/file-data.schema.json</td></tr><tr><td colspan="2"><a href="#data">data</a></td><td>Object (of type <a href="../data/file-data.schema.html">Example data type</a>)</td></tr><tr><td colspan="2" rowspan="1">All of:</td><td>Object (of type <a href="../supplier-allocation-profile.schema.html">NHS Notify Supplier Allocation Profile</a>)</td></tr></tbody></table>



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
      <td colspan="2">No</td>
    </tr>
    <tr>
      <th>Const</th>
      <td colspan="2">uk.nhs.notify.supplier.allocation.file.received.v1</td>
    </tr><tr>
      <th>Examples</th>
      <td colspan="2"><li>uk.nhs.notify.supplier.allocation.file.received.v1</li></td>
    </tr>
  </tbody>
</table>




## source


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Event source for supplier allocation examples.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    <tr>
      <th>Pattern</th>
      <td colspan="2">^/nhs/england/notify/(production|staging|development|uat)/(primary|secondary|dev-[0-9]+)/data-plane/supplierallocation</td>
    </tr><tr>
      <th>Examples</th>
      <td colspan="2"><li>/nhs/england/notify/production/primary/data-plane/supplierallocation</li></td>
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
      <td colspan="2">No</td>
    </tr>
    <tr>
      <th>Const</th>
      <td colspan="2">file://../data/file-data.schema.json</td>
    </tr><tr>
      <th>Examples</th>
      <td colspan="2"><li>file-data.schema.json</li></td>
    </tr>
  </tbody>
</table>




## data

  <p>Defined in <a href="../data/file-data.schema.html">../data/file-data.schema.html</a></p>

<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>$id</th>
      <td colspan="2">/supplier-allocation/2025-12/data/file-data.schema.json</td>
    </tr>
    <tr>
      <th>Title</th>
      <td colspan="2">Example data type</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">Example payload wrapper containing notify-payload.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Object (of type <a href="../data/file-data.schema.html">Example data type</a>)</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    
  </tbody>
</table>

### Properties
  <table class="jssd-properties-table"><thead><tr><th colspan="2">Name</th><th>Type</th></tr></thead><tbody><tr><td colspan="2"><a href="#datasomething">something</a></td><td>String</td></tr></tbody></table>








<hr />

## Schema
```
{
    "$id": "/supplier-allocation/2025-12/events/file-received.schema.json",
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "type": "object",
    "allOf": [
        {
            "$ref": "../supplier-allocation-profile.schema.json"
        }
    ],
    "properties": {
        "type": {
            "type": "string",
            "const": "uk.nhs.notify.supplier.allocation.file.received.v1",
            "description": "Concrete versioned event type string for this example event (.vN suffix).",
            "examples": [
                "uk.nhs.notify.supplier.allocation.file.received.v1"
            ]
        },
        "source": {
            "type": "string",
            "pattern": "^/nhs/england/notify/(production|staging|development|uat)/(primary|secondary|dev-[0-9]+)/data-plane/supplierallocation",
            "description": "Event source for supplier allocation examples.",
            "examples": [
                "/nhs/england/notify/production/primary/data-plane/supplierallocation"
            ]
        },
        "dataschema": {
            "type": "string",
            "const": "file://../data/file-data.schema.json",
            "description": "Canonical URI of the example event's data schema.",
            "examples": [
                "file-data.schema.json"
            ]
        },
        "data": {
            "$ref": "../data/file-data.schema.json",
            "description": "Example payload wrapper containing notify-payload."
        }
    }
}
```


