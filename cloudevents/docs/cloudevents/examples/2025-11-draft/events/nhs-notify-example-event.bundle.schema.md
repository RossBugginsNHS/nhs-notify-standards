

# Example Event

<p>Example  event</p>

<table>
<tbody>
<tr><th>$id</th><td>/examples/2025-11-draft/events/nhs-notify-example-event.bundle.schema.json</td></tr>
<tr><th>$schema</th><td>https://json-schema.org/draft/2020-12/schema</td></tr>
</tbody>
</table>

## Properties

<table class="jssd-properties-table"><thead><tr><th colspan="2">Name</th><th>Type</th></tr></thead><tbody><tr><td colspan="2"><a href="#type">type</a></td><td>String=uk.nhs.notify.example.order.read.v1</td></tr><tr><td colspan="2"><a href="#source">source</a></td><td>String</td></tr><tr><td colspan="2"><a href="#subject">subject</a></td><td>String</td></tr><tr><td colspan="2"><a href="#dataschema">dataschema</a></td><td>String=../data/nhs-notify-example-event-data.schema.json</td></tr><tr><td colspan="2"><a href="#data">data</a></td><td>Object</td></tr><tr><td colspan="2" rowspan="1">All of:</td><td>Object</td></tr></tbody></table>


## Example



```
{
    "specversion": "1.0",
    "id": "6f1c2a53-3d54-4a0a-9a0b-0e9ae2d4c111",
    "type": "uk.nhs.notify.example.order.read.v1",
    "source": "/data-plane/example",
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
      <td colspan="2">uk.nhs.notify.example.order.read.v1</td>
    </tr><tr>
      <th>Examples</th>
      <td colspan="2"><li>uk.nhs.notify.example.order.read.v1</li></td>
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
      <td colspan="2">^/nhs/england/notify/(production|staging|development|uat)/(primary|secondary|dev-[0-9]+)/data-plane/example</td>
    </tr><tr>
      <th>Examples</th>
      <td colspan="2"><li>/nhs/england/notify/production/primary/data-plane/example</li></td>
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
      <th>Title</th>
      <td colspan="2">Example data type</td>
    </tr>
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
  <table class="jssd-properties-table"><thead><tr><th colspan="2">Name</th><th>Type</th></tr></thead><tbody><tr><td rowspan="4"><a href="#weather">weather</a></td><td rowspan="4">All of:</td><td><a href="#weather-0">Object</a></td></tr>
<tr><td><a href="#weather-1">Object</a></td></tr>
<tr><td><a href="#weather-2">Object</a></td></tr>
<tr><td><a href="#weather-3">Object</a></td></tr><tr><td rowspan="2">nhsNumber</td><td rowspan="2">Any of:</td><td>String</td></tr><tr><td>String</td></tr></tbody></table>


### data.weather


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2"> - Weather Forecast schema</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">A harmonised description of a Weather Forecast</td>
    </tr>
    <tr><tr><td rowspan="4"><a href="#type">Type</a></td><td rowspan="4">All of:</td><td><a href="#type-0">Object</a></td></tr>
<tr><td><a href="#type-1">Object</a></td></tr>
<tr><td><a href="#type-2">Object</a></td></tr>
<tr><td><a href="#type-3">Object</a></td></tr></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    
  </tbody>
</table>



### data.weather.0


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">Object</td></tr>
    
  </tbody>
</table>



### data.weather.0.id


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Relationship. Unique identifier of the entity</td>
    </tr>
    <tr><tr><td rowspan="2">Type</td><td rowspan="2">Any of:</td><td>String</td></tr><tr><td>String</td></tr></tr>
    
  </tbody>
</table>



### data.weather.0.id.0


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Property. Identifier format of any NGSI entity</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Min Length</th>
      <td colspan="2">1</td>
    </tr><tr>
      <th>Max Length</th>
      <td colspan="2">256</td>
    </tr><tr>
      <th>Pattern</th>
      <td colspan="2">^[\w\-\.\{\}\$\+\*\[\]&#x60;|~^@!,:\\]+$</td>
    </tr>
  </tbody>
</table>




### data.weather.0.id.1


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Property. Identifier format of any NGSI entity</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Format</th>
      <td colspan="2">uri</td>
    </tr>
  </tbody>
</table>





### data.weather.0.dateCreated


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Property. Entity creation timestamp. This will usually be allocated by the storage platform</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Format</th>
      <td colspan="2">date-time</td>
    </tr>
  </tbody>
</table>




### data.weather.0.dateModified


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Property. Timestamp of the last modification of the entity. This will usually be allocated by the storage platform</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Format</th>
      <td colspan="2">date-time</td>
    </tr>
  </tbody>
</table>




### data.weather.0.source


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Property. A sequence of characters giving the original source of the entity data as a URL. Recommended to be the fully qualified domain name of the source provider, or the URL to the source object</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    
  </tbody>
</table>




### data.weather.0.name


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Property. The name of this item</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    
  </tbody>
</table>




### data.weather.0.alternateName


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Property. An alternative name for this item</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    
  </tbody>
</table>




### data.weather.0.description


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Property. A description of this item</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    
  </tbody>
</table>




### data.weather.0.dataProvider


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Property. A sequence of characters identifying the provider of the harmonised data entity</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    
  </tbody>
</table>




### data.weather.0.owner


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Property. A List containing a JSON encoded sequence of characters referencing the unique Ids of the owner(s)</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Array</td></tr>
    
  </tbody>
</table>




### data.weather.0.seeAlso


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Property. list of uri pointing to additional resources about the item</td>
    </tr>
    <tr><tr><td rowspan="2">Type</td><td rowspan="2">One of:</td><td>Array</td></tr><tr><td>String</td></tr></tr>
    
  </tbody>
</table>



### data.weather.0.seeAlso.0


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">Array</td></tr>
    <tr>
      <th>Min Items</th>
      <td colspan="2">1</td>
    </tr>
  </tbody>
</table>




### data.weather.0.seeAlso.1


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Format</th>
      <td colspan="2">uri</td>
    </tr>
  </tbody>
</table>






### data.weather.1


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">Object</td></tr>
    
  </tbody>
</table>



### data.weather.1.location


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">GeoProperty. Geojson reference to the item. It can be Point, LineString, Polygon, MultiPoint, MultiLineString or MultiPolygon</td>
    </tr>
    <tr><tr><td rowspan="6">Type</td><td rowspan="6">One of:</td><td>Object</td></tr><tr><td>Object</td></tr><tr><td>Object</td></tr><tr><td>Object</td></tr><tr><td>Object</td></tr><tr><td>Object</td></tr></tr>
    
  </tbody>
</table>



### data.weather.1.location.0


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">GeoJSON Point</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">GeoProperty. Geojson reference to the item. Point</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Object</td></tr>
    
  </tbody>
</table>



### data.weather.1.location.0.type


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Enum</th>
      <td colspan="2"><ul><li>Point</li></ul></td>
    </tr>
  </tbody>
</table>




### data.weather.1.location.0.coordinates


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Property. Coordinates of the Point</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Array</td></tr>
    <tr>
      <th>Min Items</th>
      <td colspan="2">2</td>
    </tr>
  </tbody>
</table>




### data.weather.1.location.0.bbox


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Property. BBox of the  Point</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Array</td></tr>
    <tr>
      <th>Min Items</th>
      <td colspan="2">4</td>
    </tr>
  </tbody>
</table>





### data.weather.1.location.1


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">GeoJSON LineString</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">GeoProperty. Geojson reference to the item. LineString</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Object</td></tr>
    
  </tbody>
</table>



### data.weather.1.location.1.type


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Enum</th>
      <td colspan="2"><ul><li>LineString</li></ul></td>
    </tr>
  </tbody>
</table>




### data.weather.1.location.1.coordinates


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Property. Coordinates of the LineString</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Array</td></tr>
    <tr>
      <th>Min Items</th>
      <td colspan="2">2</td>
    </tr>
  </tbody>
</table>




### data.weather.1.location.1.bbox


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Property. BBox coordinates of the LineString</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Array</td></tr>
    <tr>
      <th>Min Items</th>
      <td colspan="2">4</td>
    </tr>
  </tbody>
</table>





### data.weather.1.location.2


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">GeoJSON Polygon</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">GeoProperty. Geojson reference to the item. Polygon</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Object</td></tr>
    
  </tbody>
</table>



### data.weather.1.location.2.type


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Enum</th>
      <td colspan="2"><ul><li>Polygon</li></ul></td>
    </tr>
  </tbody>
</table>




### data.weather.1.location.2.coordinates


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Property. Coordinates of the Polygon</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Array</td></tr>
    
  </tbody>
</table>




### data.weather.1.location.2.bbox


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Property. BBox coordinates of the Polygon</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Array</td></tr>
    <tr>
      <th>Min Items</th>
      <td colspan="2">4</td>
    </tr>
  </tbody>
</table>





### data.weather.1.location.3


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">GeoJSON MultiPoint</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">GeoProperty. Geojson reference to the item. MultiPoint</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Object</td></tr>
    
  </tbody>
</table>



### data.weather.1.location.3.type


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Enum</th>
      <td colspan="2"><ul><li>MultiPoint</li></ul></td>
    </tr>
  </tbody>
</table>




### data.weather.1.location.3.coordinates


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Property. Coordinates of the MulitPoint</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Array</td></tr>
    
  </tbody>
</table>




### data.weather.1.location.3.bbox


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Property. BBox coordinates of the LineString</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Array</td></tr>
    <tr>
      <th>Min Items</th>
      <td colspan="2">4</td>
    </tr>
  </tbody>
</table>





### data.weather.1.location.4


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">GeoJSON MultiLineString</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">GeoProperty. Geojson reference to the item. MultiLineString</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Object</td></tr>
    
  </tbody>
</table>



### data.weather.1.location.4.type


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Enum</th>
      <td colspan="2"><ul><li>MultiLineString</li></ul></td>
    </tr>
  </tbody>
</table>




### data.weather.1.location.4.coordinates


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Property. Coordinates of the MultiLineString</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Array</td></tr>
    
  </tbody>
</table>




### data.weather.1.location.4.bbox


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Property. BBox coordinates of the LineString</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Array</td></tr>
    <tr>
      <th>Min Items</th>
      <td colspan="2">4</td>
    </tr>
  </tbody>
</table>





### data.weather.1.location.5


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">GeoJSON MultiPolygon</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">GeoProperty. Geojson reference to the item. MultiLineString</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Object</td></tr>
    
  </tbody>
</table>



### data.weather.1.location.5.type


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Enum</th>
      <td colspan="2"><ul><li>MultiPolygon</li></ul></td>
    </tr>
  </tbody>
</table>




### data.weather.1.location.5.coordinates


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Property. Coordinates of the MultiPolygon</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Array</td></tr>
    
  </tbody>
</table>




### data.weather.1.location.5.bbox


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">Array</td></tr>
    <tr>
      <th>Min Items</th>
      <td colspan="2">4</td>
    </tr>
  </tbody>
</table>






### data.weather.1.address


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Property. The mailing address. Model:&#x27;https://schema.org/address&#x27;</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Object</td></tr>
    
  </tbody>
</table>



### data.weather.1.address.streetAddress


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Property. The street address. Model:&#x27;https://schema.org/streetAddress&#x27;</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    
  </tbody>
</table>




### data.weather.1.address.addressLocality


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Property. The locality in which the street address is, and which is in the region. Model:&#x27;https://schema.org/addressLocality&#x27;</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    
  </tbody>
</table>




### data.weather.1.address.addressRegion


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Property. The region in which the locality is, and which is in the country. Model:&#x27;https://schema.org/addressRegion&#x27;</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    
  </tbody>
</table>




### data.weather.1.address.addressCountry


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Property. The country. For example, Spain. Model:&#x27;https://schema.org/addressCountry&#x27;</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    
  </tbody>
</table>




### data.weather.1.address.postalCode


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Property. The postal code. For example, 24004. Model:&#x27;https://schema.org/https://schema.org/postalCode&#x27;</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    
  </tbody>
</table>




### data.weather.1.address.postOfficeBoxNumber


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Property. The post office box number for PO box addresses. For example, 03578. Model:&#x27;https://schema.org/postOfficeBoxNumber&#x27;</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    
  </tbody>
</table>




### data.weather.1.address.streetNr


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Property. Number identifying a specific property on a public street</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    
  </tbody>
</table>




### data.weather.1.address.district


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Property. A district is a type of administrative division that, in some countries, is managed by the local government</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    
  </tbody>
</table>





### data.weather.1.areaServed


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Property. The geographic area where a service or offered item is provided. Model:&#x27;https://schema.org/Text&#x27;</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    
  </tbody>
</table>





### data.weather.2


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">Object</td></tr>
    
  </tbody>
</table>



### data.weather.2.weatherType


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Property. Text description of the weather. Model:&#x27;http://schema.org/Text&#x27;</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    
  </tbody>
</table>




### data.weather.2.visibility


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Property. Model:&#x27;http://schema.org/Text&#x27;. Categories of visibility</td>
    </tr>
    <tr><tr><td rowspan="2">Type</td><td rowspan="2">Any of:</td><td>String</td></tr><tr><td>Number</td></tr></tr>
    
  </tbody>
</table>



### data.weather.2.visibility.0


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Enum</th>
      <td colspan="2"><ul><li>veryPoor</li><li>poor</li><li>moderate</li><li>good</li><li>veryGood</li><li>excellent</li></ul></td>
    </tr>
  </tbody>
</table>




### data.weather.2.visibility.1


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">Number</td></tr>
    
  </tbody>
</table>





### data.weather.2.windDirection


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Property. Model:&#x27;http://schema.org/Number&#x27;. Direction of the wind bet</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Number</td></tr>
    <tr>
      <th>Maximum</th>
      <td colspan="2">360</td>
    </tr>
  </tbody>
</table>




### data.weather.2.windSpeed


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Property. Model:&#x27;http//schema.org/Number&#x27;. Intensity of the wind</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Number</td></tr>
    
  </tbody>
</table>




### data.weather.2.gustSpeed


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Property. A sudden burst of high-speed wind over the observed average wind speed lasting only for a few seconds</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Number</td></tr>
    
  </tbody>
</table>




### data.weather.2.refPointOfInterest


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Relationship. Model:&#x27;http://schema.org/URL&#x27;. Point of interest related to the item</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    
  </tbody>
</table>




### data.weather.2.atmosphericPressure


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Property. Model:&#x27;https://schema.org/Number&#x27;. The atmospheric pressure observed measured in Hecto Pascals. Units:&#x27;Hecto pascals&#x27;</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Number</td></tr>
    
  </tbody>
</table>




### data.weather.2.illuminance


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Property. Model:&#x27;https://schema.org/Number&#x27;. (https://en.wikipedia.org/wiki/Illuminance) observed measured in lux (lx) or lumens per square metre (cd·sr·m−2). Units:&#x27;Lux&#x27;</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Number</td></tr>
    
  </tbody>
</table>




### data.weather.2.temperature


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Property. Temperature of the item</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Number</td></tr>
    
  </tbody>
</table>




### data.weather.2.feelsLikeTemperature


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Property. Temperature appreciation of the item</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Number</td></tr>
    
  </tbody>
</table>




### data.weather.2.relativeHumidity


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Property. Humidity in the Air. Observed instantaneous relative humidity (water vapour in air)</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Number</td></tr>
    <tr>
      <th>Maximum</th>
      <td colspan="2">1</td>
    </tr>
  </tbody>
</table>





### data.weather.3


<table class="jssd-property-table">
  <tbody>
    
    
  </tbody>
</table>



### data.weather.3.type


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Property. NGSI Entity type. It has to be WeatherForecast</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Enum</th>
      <td colspan="2"><ul><li>WeatherForecast</li></ul></td>
    </tr>
  </tbody>
</table>




### data.weather.3.dateRetrieved


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Property. Model:&#x27;https://schema.org/DateTime&#x27;. The date and time the forecast was retrieved in ISO8601 UTC format</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Format</th>
      <td colspan="2">date-time</td>
    </tr>
  </tbody>
</table>




### data.weather.3.dateIssued


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Property. Model:&#x27;https://schema.org/DateTime&#x27;. The date and time the forecast was issued by the meteorological bureau in ISO8601 UTC format</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Format</th>
      <td colspan="2">date-time</td>
    </tr>
  </tbody>
</table>




### data.weather.3.validity


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Property. Model:&#x27;https://schema.org/Text&#x27;. Includes the validity period for this forecast as a ISO8601 time interval. As a workaround for the lack of support of Orion Context Broker for datetime intervals, it can be used two separate attributes: &#x60;validFrom&#x60;, &#x60;validTo&#x60;</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    
  </tbody>
</table>




### data.weather.3.validFrom


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Property. Model:&#x27;https://schema.org/Text&#x27;. Validity period start date and time</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Format</th>
      <td colspan="2">date-time</td>
    </tr>
  </tbody>
</table>




### data.weather.3.validTo


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Property. Model:&#x27;https://schema.org/Text&#x27;. Validity period end date and time</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Format</th>
      <td colspan="2">date-time</td>
    </tr>
  </tbody>
</table>




### data.weather.3.dayMaximum


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Property. Model:&#x27;https://schema.org/StructuredValue&#x27;. Maximum values for the reported period. Subattributes:- &#x60;temperature&#x60; : Maximum temperature. See &#x60;WeatherForecast.temperature&#x60; for description and units. - &#x60;feelLikesTemperature&#x60;. Maximum feels like temperature. Same semantics and units as &#x60;WeatherForecast.feelsLikeTemperature&#x60;.-   &#x60;relativeHumidity&#x60;. Maximum relative humidity. Same semantics and units as &#x60;WeatherForecast.relativeHumidity&#x60;</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Object</td></tr>
    
  </tbody>
</table>



### data.weather.3.dayMaximum.temperature


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Property. Temperature of the item</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Number</td></tr>
    
  </tbody>
</table>




### data.weather.3.dayMaximum.feelLikesTemperature


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Property. Temperature appreciation of the item</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Number</td></tr>
    
  </tbody>
</table>




### data.weather.3.dayMaximum.relativeHumidity


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Property. Humidity in the Air. Observed instantaneous relative humidity (water vapour in air)</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Number</td></tr>
    <tr>
      <th>Maximum</th>
      <td colspan="2">1</td>
    </tr>
  </tbody>
</table>





### data.weather.3.dayMinimum


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Property. Model:&#x27;https://schema.org/Text&#x27;. Minimum values forecasted for the reported period.  Minimum values for the reported period. Subattributes:- &#x60;temperature&#x60; : Minimum temperature. See &#x60;WeatherForecast.temperature&#x60; for description and units. - &#x60;feelLikesTemperature&#x60;. Minimum feels like temperature. Same semantics and units as &#x60;WeatherForecast.feelsLikeTemperature&#x60;.- &#x60;relativeHumidity&#x60;. Minimum relative humidity. Same semantics and units as &#x60;WeatherForecast.relativeHumidity&#x60;</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Object</td></tr>
    
  </tbody>
</table>



### data.weather.3.dayMinimum.temperature


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Property. Temperature of the item</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Number</td></tr>
    
  </tbody>
</table>




### data.weather.3.dayMinimum.feelLikesTemperature


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Property. Temperature appreciation of the item</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Number</td></tr>
    
  </tbody>
</table>




### data.weather.3.dayMinimum.relativeHumidity


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Property. Humidity in the Air. Observed instantaneous relative humidity (water vapour in air)</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Number</td></tr>
    <tr>
      <th>Maximum</th>
      <td colspan="2">1</td>
    </tr>
  </tbody>
</table>





### data.weather.3.uVIndexMax


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Property. Model:&#x27;https://schema.org/Number&#x27;. The maximum UV index for the period, based on the World Health Organization&#x27;s UV Index measure. Normative references: [http://www.who.int/uv/intersunprogramme/activities/uv_index/en/](http://www.who.int/uv/intersunprogramme/activities/uv_index/en/)</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Number</td></tr>
    
  </tbody>
</table>




### data.weather.3.precipitation


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Property. Model:&#x27;https://schema.org/Number&#x27;. Amount of water rain expected. Units:&#x27;Liters per square meter&#x27;</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Number</td></tr>
    
  </tbody>
</table>




### data.weather.3.precipitationProbability


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Property. Model:&#x27;https://schema.org/Number&#x27;. Probability of rainfall.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Number</td></tr>
    
  </tbody>
</table>






### data.nhsNumber


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



### data.nhsNumber.0


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




### data.nhsNumber.1


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











<hr />

## Schema
```
{
    "$id": "/examples/2025-11-draft/events/nhs-notify-example-event.bundle.schema.json",
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
            ],
            "properties": {
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
    ],
    "properties": {
        "type": {
            "type": "string",
            "const": "uk.nhs.notify.example.order.read.v1",
            "description": "Concrete versioned event type string for this example event (.vN suffix).",
            "examples": [
                "uk.nhs.notify.example.order.read.v1"
            ]
        },
        "source": {
            "type": "string",
            "pattern": "^/nhs/england/notify/(production|staging|development|uat)/(primary|secondary|dev-[0-9]+)/data-plane/example",
            "description": "Event source for ordering domain examples.",
            "examples": [
                "/nhs/england/notify/production/primary/data-plane/example"
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
            "description": "Example payload wrapper containing notify-payload.",
            "$schema": "https://json-schema.org/draft/2020-12/schema",
            "title": "Example data type",
            "type": "object",
            "additionalProperties": false,
            "properties": {
                "weather": {
                    "$schema": "https://json-schema.org/draft/2020-12/schema",
                    "$schemaVersion": "0.0.3",
                    "modelTags": "",
                    "title": " - Weather Forecast schema",
                    "description": "A harmonised description of a Weather Forecast",
                    "type": "object",
                    "allOf": [
                        {
                            "type": "object",
                            "properties": {
                                "id": {
                                    "anyOf": [
                                        {
                                            "type": "string",
                                            "minLength": 1,
                                            "maxLength": 256,
                                            "pattern": "^[\\w\\-\\.\\{\\}\\$\\+\\*\\[\\]`|~^@!,:\\\\]+$",
                                            "description": "Property. Identifier format of any NGSI entity"
                                        },
                                        {
                                            "type": "string",
                                            "format": "uri",
                                            "description": "Property. Identifier format of any NGSI entity"
                                        }
                                    ],
                                    "description": "Relationship. Unique identifier of the entity"
                                },
                                "dateCreated": {
                                    "type": "string",
                                    "format": "date-time",
                                    "description": "Property. Entity creation timestamp. This will usually be allocated by the storage platform"
                                },
                                "dateModified": {
                                    "type": "string",
                                    "format": "date-time",
                                    "description": "Property. Timestamp of the last modification of the entity. This will usually be allocated by the storage platform"
                                },
                                "source": {
                                    "type": "string",
                                    "description": "Property. A sequence of characters giving the original source of the entity data as a URL. Recommended to be the fully qualified domain name of the source provider, or the URL to the source object"
                                },
                                "name": {
                                    "type": "string",
                                    "description": "Property. The name of this item"
                                },
                                "alternateName": {
                                    "type": "string",
                                    "description": "Property. An alternative name for this item"
                                },
                                "description": {
                                    "type": "string",
                                    "description": "Property. A description of this item"
                                },
                                "dataProvider": {
                                    "type": "string",
                                    "description": "Property. A sequence of characters identifying the provider of the harmonised data entity"
                                },
                                "owner": {
                                    "type": "array",
                                    "description": "Property. A List containing a JSON encoded sequence of characters referencing the unique Ids of the owner(s)",
                                    "items": {
                                        "$ref": "#/properties/data/properties/weather/allOf/0/properties/id"
                                    }
                                },
                                "seeAlso": {
                                    "oneOf": [
                                        {
                                            "type": "array",
                                            "minItems": 1,
                                            "items": {
                                                "type": "string",
                                                "format": "uri"
                                            }
                                        },
                                        {
                                            "type": "string",
                                            "format": "uri"
                                        }
                                    ],
                                    "description": "Property. list of uri pointing to additional resources about the item"
                                }
                            }
                        },
                        {
                            "type": "object",
                            "properties": {
                                "location": {
                                    "oneOf": [
                                        {
                                            "title": "GeoJSON Point",
                                            "type": "object",
                                            "required": [
                                                "type",
                                                "coordinates"
                                            ],
                                            "description": "GeoProperty. Geojson reference to the item. Point",
                                            "properties": {
                                                "type": {
                                                    "type": "string",
                                                    "enum": [
                                                        "Point"
                                                    ]
                                                },
                                                "coordinates": {
                                                    "type": "array",
                                                    "minItems": 2,
                                                    "items": {
                                                        "type": "number"
                                                    },
                                                    "description": "Property. Coordinates of the Point"
                                                },
                                                "bbox": {
                                                    "type": "array",
                                                    "minItems": 4,
                                                    "items": {
                                                        "type": "number"
                                                    },
                                                    "description": "Property. BBox of the  Point"
                                                }
                                            }
                                        },
                                        {
                                            "title": "GeoJSON LineString",
                                            "type": "object",
                                            "required": [
                                                "type",
                                                "coordinates"
                                            ],
                                            "description": "GeoProperty. Geojson reference to the item. LineString",
                                            "properties": {
                                                "type": {
                                                    "type": "string",
                                                    "enum": [
                                                        "LineString"
                                                    ]
                                                },
                                                "coordinates": {
                                                    "type": "array",
                                                    "minItems": 2,
                                                    "description": "Property. Coordinates of the LineString",
                                                    "items": {
                                                        "type": "array",
                                                        "minItems": 2,
                                                        "items": {
                                                            "type": "number"
                                                        }
                                                    }
                                                },
                                                "bbox": {
                                                    "type": "array",
                                                    "minItems": 4,
                                                    "items": {
                                                        "type": "number"
                                                    },
                                                    "description": "Property. BBox coordinates of the LineString"
                                                }
                                            }
                                        },
                                        {
                                            "title": "GeoJSON Polygon",
                                            "type": "object",
                                            "required": [
                                                "type",
                                                "coordinates"
                                            ],
                                            "description": "GeoProperty. Geojson reference to the item. Polygon",
                                            "properties": {
                                                "type": {
                                                    "type": "string",
                                                    "enum": [
                                                        "Polygon"
                                                    ]
                                                },
                                                "coordinates": {
                                                    "type": "array",
                                                    "description": "Property. Coordinates of the Polygon",
                                                    "items": {
                                                        "type": "array",
                                                        "minItems": 4,
                                                        "items": {
                                                            "type": "array",
                                                            "minItems": 2,
                                                            "items": {
                                                                "type": "number"
                                                            }
                                                        }
                                                    }
                                                },
                                                "bbox": {
                                                    "type": "array",
                                                    "minItems": 4,
                                                    "items": {
                                                        "type": "number"
                                                    },
                                                    "description": "Property. BBox coordinates of the Polygon"
                                                }
                                            }
                                        },
                                        {
                                            "title": "GeoJSON MultiPoint",
                                            "type": "object",
                                            "required": [
                                                "type",
                                                "coordinates"
                                            ],
                                            "description": "GeoProperty. Geojson reference to the item. MultiPoint",
                                            "properties": {
                                                "type": {
                                                    "type": "string",
                                                    "enum": [
                                                        "MultiPoint"
                                                    ]
                                                },
                                                "coordinates": {
                                                    "type": "array",
                                                    "description": "Property. Coordinates of the MulitPoint",
                                                    "items": {
                                                        "type": "array",
                                                        "minItems": 2,
                                                        "items": {
                                                            "type": "number"
                                                        }
                                                    }
                                                },
                                                "bbox": {
                                                    "type": "array",
                                                    "minItems": 4,
                                                    "items": {
                                                        "type": "number"
                                                    },
                                                    "description": "Property. BBox coordinates of the LineString"
                                                }
                                            }
                                        },
                                        {
                                            "title": "GeoJSON MultiLineString",
                                            "type": "object",
                                            "required": [
                                                "type",
                                                "coordinates"
                                            ],
                                            "description": "GeoProperty. Geojson reference to the item. MultiLineString",
                                            "properties": {
                                                "type": {
                                                    "type": "string",
                                                    "enum": [
                                                        "MultiLineString"
                                                    ]
                                                },
                                                "coordinates": {
                                                    "type": "array",
                                                    "description": "Property. Coordinates of the MultiLineString",
                                                    "items": {
                                                        "type": "array",
                                                        "minItems": 2,
                                                        "items": {
                                                            "type": "array",
                                                            "minItems": 2,
                                                            "items": {
                                                                "type": "number"
                                                            }
                                                        }
                                                    }
                                                },
                                                "bbox": {
                                                    "type": "array",
                                                    "minItems": 4,
                                                    "items": {
                                                        "type": "number"
                                                    },
                                                    "description": "Property. BBox coordinates of the LineString"
                                                }
                                            }
                                        },
                                        {
                                            "title": "GeoJSON MultiPolygon",
                                            "type": "object",
                                            "required": [
                                                "type",
                                                "coordinates"
                                            ],
                                            "description": "GeoProperty. Geojson reference to the item. MultiLineString",
                                            "properties": {
                                                "type": {
                                                    "type": "string",
                                                    "enum": [
                                                        "MultiPolygon"
                                                    ]
                                                },
                                                "coordinates": {
                                                    "type": "array",
                                                    "description": "Property. Coordinates of the MultiPolygon",
                                                    "items": {
                                                        "type": "array",
                                                        "items": {
                                                            "type": "array",
                                                            "minItems": 4,
                                                            "items": {
                                                                "type": "array",
                                                                "minItems": 2,
                                                                "items": {
                                                                    "type": "number"
                                                                }
                                                            }
                                                        }
                                                    }
                                                },
                                                "bbox": {
                                                    "type": "array",
                                                    "minItems": 4,
                                                    "items": {
                                                        "type": "number"
                                                    }
                                                }
                                            }
                                        }
                                    ],
                                    "description": "GeoProperty. Geojson reference to the item. It can be Point, LineString, Polygon, MultiPoint, MultiLineString or MultiPolygon"
                                },
                                "address": {
                                    "type": "object",
                                    "description": "Property. The mailing address. Model:'https://schema.org/address'",
                                    "properties": {
                                        "streetAddress": {
                                            "type": "string",
                                            "description": "Property. The street address. Model:'https://schema.org/streetAddress'"
                                        },
                                        "addressLocality": {
                                            "type": "string",
                                            "description": "Property. The locality in which the street address is, and which is in the region. Model:'https://schema.org/addressLocality'"
                                        },
                                        "addressRegion": {
                                            "type": "string",
                                            "description": "Property. The region in which the locality is, and which is in the country. Model:'https://schema.org/addressRegion'"
                                        },
                                        "addressCountry": {
                                            "type": "string",
                                            "description": "Property. The country. For example, Spain. Model:'https://schema.org/addressCountry'"
                                        },
                                        "postalCode": {
                                            "type": "string",
                                            "description": "Property. The postal code. For example, 24004. Model:'https://schema.org/https://schema.org/postalCode'"
                                        },
                                        "postOfficeBoxNumber": {
                                            "type": "string",
                                            "description": "Property. The post office box number for PO box addresses. For example, 03578. Model:'https://schema.org/postOfficeBoxNumber'"
                                        },
                                        "streetNr": {
                                            "type": "string",
                                            "description": "Property. Number identifying a specific property on a public street"
                                        },
                                        "district": {
                                            "type": "string",
                                            "description": "Property. A district is a type of administrative division that, in some countries, is managed by the local government"
                                        }
                                    }
                                },
                                "areaServed": {
                                    "type": "string",
                                    "description": "Property. The geographic area where a service or offered item is provided. Model:'https://schema.org/Text'"
                                }
                            }
                        },
                        {
                            "type": "object",
                            "properties": {
                                "weatherType": {
                                    "type": "string",
                                    "description": "Property. Text description of the weather. Model:'http://schema.org/Text'"
                                },
                                "visibility": {
                                    "description": "Property. Model:'http://schema.org/Text'. Categories of visibility",
                                    "anyOf": [
                                        {
                                            "type": "string",
                                            "enum": [
                                                "veryPoor",
                                                "poor",
                                                "moderate",
                                                "good",
                                                "veryGood",
                                                "excellent"
                                            ]
                                        },
                                        {
                                            "type": "number",
                                            "minimum": 0
                                        }
                                    ]
                                },
                                "windDirection": {
                                    "type": "number",
                                    "description": "Property. Model:'http://schema.org/Number'. Direction of the wind bet",
                                    "minimum": 0,
                                    "maximum": 360
                                },
                                "windSpeed": {
                                    "type": "number",
                                    "description": "Property. Model:'http//schema.org/Number'. Intensity of the wind",
                                    "minimum": 0
                                },
                                "gustSpeed": {
                                    "type": "number",
                                    "description": "Property. A sudden burst of high-speed wind over the observed average wind speed lasting only for a few seconds"
                                },
                                "refPointOfInterest": {
                                    "type": "string",
                                    "description": "Relationship. Model:'http://schema.org/URL'. Point of interest related to the item"
                                },
                                "atmosphericPressure": {
                                    "type": "number",
                                    "minimum": 0,
                                    "description": "Property. Model:'https://schema.org/Number'. The atmospheric pressure observed measured in Hecto Pascals. Units:'Hecto pascals'"
                                },
                                "illuminance": {
                                    "type": "number",
                                    "minimum": 0,
                                    "description": "Property. Model:'https://schema.org/Number'. (https://en.wikipedia.org/wiki/Illuminance) observed measured in lux (lx) or lumens per square metre (cd·sr·m−2). Units:'Lux'"
                                },
                                "temperature": {
                                    "type": "number",
                                    "description": "Property. Temperature of the item"
                                },
                                "feelsLikeTemperature": {
                                    "type": "number",
                                    "description": "Property. Temperature appreciation of the item"
                                },
                                "relativeHumidity": {
                                    "type": "number",
                                    "minimum": 0,
                                    "maximum": 1,
                                    "description": "Property. Humidity in the Air. Observed instantaneous relative humidity (water vapour in air)"
                                }
                            }
                        },
                        {
                            "properties": {
                                "type": {
                                    "type": "string",
                                    "enum": [
                                        "WeatherForecast"
                                    ],
                                    "description": "Property. NGSI Entity type. It has to be WeatherForecast"
                                },
                                "dateRetrieved": {
                                    "type": "string",
                                    "format": "date-time",
                                    "description": "Property. Model:'https://schema.org/DateTime'. The date and time the forecast was retrieved in ISO8601 UTC format"
                                },
                                "dateIssued": {
                                    "type": "string",
                                    "format": "date-time",
                                    "description": "Property. Model:'https://schema.org/DateTime'. The date and time the forecast was issued by the meteorological bureau in ISO8601 UTC format"
                                },
                                "validity": {
                                    "type": "string",
                                    "description": "Property. Model:'https://schema.org/Text'. Includes the validity period for this forecast as a ISO8601 time interval. As a workaround for the lack of support of Orion Context Broker for datetime intervals, it can be used two separate attributes: `validFrom`, `validTo`"
                                },
                                "validFrom": {
                                    "type": "string",
                                    "format": "date-time",
                                    "description": "Property. Model:'https://schema.org/Text'. Validity period start date and time"
                                },
                                "validTo": {
                                    "type": "string",
                                    "format": "date-time",
                                    "description": "Property. Model:'https://schema.org/Text'. Validity period end date and time"
                                },
                                "dayMaximum": {
                                    "type": "object",
                                    "description": "Property. Model:'https://schema.org/StructuredValue'. Maximum values for the reported period. Subattributes:- `temperature` : Maximum temperature. See `WeatherForecast.temperature` for description and units. - `feelLikesTemperature`. Maximum feels like temperature. Same semantics and units as `WeatherForecast.feelsLikeTemperature`.-   `relativeHumidity`. Maximum relative humidity. Same semantics and units as `WeatherForecast.relativeHumidity`",
                                    "properties": {
                                        "temperature": {
                                            "type": "number",
                                            "description": "Property. Temperature of the item"
                                        },
                                        "feelLikesTemperature": {
                                            "type": "number",
                                            "description": "Property. Temperature appreciation of the item"
                                        },
                                        "relativeHumidity": {
                                            "type": "number",
                                            "minimum": 0,
                                            "maximum": 1,
                                            "description": "Property. Humidity in the Air. Observed instantaneous relative humidity (water vapour in air)"
                                        }
                                    }
                                },
                                "dayMinimum": {
                                    "type": "object",
                                    "description": "Property. Model:'https://schema.org/Text'. Minimum values forecasted for the reported period.  Minimum values for the reported period. Subattributes:- `temperature` : Minimum temperature. See `WeatherForecast.temperature` for description and units. - `feelLikesTemperature`. Minimum feels like temperature. Same semantics and units as `WeatherForecast.feelsLikeTemperature`.- `relativeHumidity`. Minimum relative humidity. Same semantics and units as `WeatherForecast.relativeHumidity`",
                                    "properties": {
                                        "temperature": {
                                            "$ref": "#/properties/data/properties/weather/allOf/3/properties/dayMaximum/properties/temperature"
                                        },
                                        "feelLikesTemperature": {
                                            "$ref": "#/properties/data/properties/weather/allOf/3/properties/dayMaximum/properties/feelLikesTemperature"
                                        },
                                        "relativeHumidity": {
                                            "$ref": "#/properties/data/properties/weather/allOf/3/properties/dayMaximum/properties/relativeHumidity"
                                        }
                                    }
                                },
                                "uVIndexMax": {
                                    "type": "number",
                                    "description": "Property. Model:'https://schema.org/Number'. The maximum UV index for the period, based on the World Health Organization's UV Index measure. Normative references: [http://www.who.int/uv/intersunprogramme/activities/uv_index/en/](http://www.who.int/uv/intersunprogramme/activities/uv_index/en/)",
                                    "minimum": 0
                                },
                                "precipitation": {
                                    "type": "number",
                                    "minimum": 0,
                                    "description": "Property. Model:'https://schema.org/Number'. Amount of water rain expected. Units:'Liters per square meter'"
                                },
                                "precipitationProbability": {
                                    "type": "number",
                                    "minimum": 0,
                                    "description": "Property. Model:'https://schema.org/Number'. Probability of rainfall."
                                }
                            }
                        }
                    ],
                    "required": [
                        "id",
                        "type",
                        "dateIssued"
                    ]
                },
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
            "type": "uk.nhs.notify.example.order.read.v1",
            "source": "/data-plane/example",
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
    "$comment": "Bundled schema (all external $ref inlined).",
    "$defs": {}
}
```


