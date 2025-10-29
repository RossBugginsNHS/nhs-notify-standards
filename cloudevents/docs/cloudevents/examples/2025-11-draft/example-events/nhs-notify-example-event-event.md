# uk.nhs.notify.example.order.read.v1

**Event Type:** `uk.nhs.notify.example.order.read.v1`

**Source:** `/nhs/england/notify/development/primary/data-plane/example`

**Subject:** `customer/22ee8c6f-a18b-f15a-41cf-7365009af95c/order/5ac4ef4a-202b-a99b-901d-a07f9ddad57d/item/6ffc48c3-bfe1-ff39-abeb-8bdf4bcf5fec`

**Event ID:** `a4f8799b-19a2-4fc0-ba1f-fc5d5d4fe434`

**Timestamp:** 2025-10-29T16:22:44.716Z

## Related Schema Documentation

- [Event Schema](../nhs-notify-example-event.schema.md)
- [Event Schema (Bundled)](../nhs-notify-example-event.bundle.schema.md)
- [Event Schema (Flattened)](../nhs-notify-example-event.flattened.schema.md)

## Complete Event Instance

```json
{
  "type": "uk.nhs.notify.example.order.read.v1",
  "source": "/nhs/england/notify/development/primary/data-plane/example",
  "subject": "customer/22ee8c6f-a18b-f15a-41cf-7365009af95c/order/5ac4ef4a-202b-a99b-901d-a07f9ddad57d/item/6ffc48c3-bfe1-ff39-abeb-8bdf4bcf5fec",
  "dataschema": "file://../data/nhs-notify-example-event-data.schema.json",
  "specversion": "1.0",
  "id": "a4f8799b-19a2-4fc0-ba1f-fc5d5d4fe434",
  "time": "2025-10-29T16:22:44.716Z",
  "datacontenttype": "application/json",
  "traceparent": "00-6e4c78986cc53a86c57679081e3d9436-3d62a5acc919fc41-01",
  "tracestate": "culpa",
  "partitionkey": "customer-22ee8c6f",
  "recordedtime": "2025-10-29T16:22:45.716Z",
  "sampledrate": 1,
  "sequence": "00000000000092521037",
  "severitytext": "ERROR",
  "severitynumber": 4,
  "dataclassification": "public",
  "dataregulation": "CCPA",
  "datacategory": "sensitive",
  "data": {
    "weather": {
      "id": "https://ztoj.uyhlBVn7PfbmN+gh0DLUGYNlqlEPr0gDqLfhKy",
      "dateCreated": "1963-08-28T18:29:06.0Z",
      "dateModified": "1893-09-13T21:06:22.0Z",
      "source": "aliqua labore Lorem Duis",
      "name": "veniam Lorem minim sint",
      "alternateName": "veniam",
      "description": "dolore in pariatur",
      "dataProvider": "velit",
      "owner": [],
      "seeAlso": "https://lUhMGqaPeLNfemvTNdRs.aodwIIpBIwgUH9ZLqb7LE3rPy9yQZSdWjqxh1pke",
      "location": {
        "type": "MultiPoint",
        "coordinates": [
          [
            20394671.99245864,
            -70027035.80852519,
            42035556.72759098,
            17341685.819501877
          ],
          [
            -5885402.421395928,
            -59431601.92715717,
            -94525520.8193685,
            34433546.01027727
          ],
          [
            -67780312.96712697,
            84678336.91241607
          ]
        ],
        "bbox": [
          81331588.17716292,
          -75006866.64155403,
          -38479382.41945688,
          -76335422.78456867
        ]
      },
      "address": {
        "streetAddress": "Duis proident",
        "addressLocality": "sunt laborum cillum",
        "addressRegion": "est pariatur labore",
        "addressCountry": "id nisi adipisicing",
        "postalCode": "qui in",
        "postOfficeBoxNumber": "commodo",
        "streetNr": "Ut Excepteur nulla dolor est",
        "district": "in Excepteur sunt officia cillum"
      },
      "areaServed": "elit minim Duis",
      "weatherType": "Lorem consectetur officia reprehenderit",
      "visibility": 87043400.62129113,
      "windDirection": 26.301230558732588,
      "windSpeed": 60150138.55006109,
      "gustSpeed": 1764775.164356649,
      "refPointOfInterest": "officia aliqua magna",
      "atmosphericPressure": 70954869.65450548,
      "illuminance": 24166314.688977532,
      "temperature": 5961348.102015406,
      "feelsLikeTemperature": 18336157.223145515,
      "relativeHumidity": 0.6715516723703094,
      "type": "WeatherForecast",
      "dateRetrieved": "1907-02-18T14:57:38.0Z",
      "dateIssued": "1939-02-09T06:58:05.0Z",
      "validity": "amet adipisicing",
      "validFrom": "1918-04-23T11:01:31.0Z",
      "validTo": "1938-01-04T03:34:33.0Z",
      "dayMaximum": {
        "temperature": -22571989.048018873,
        "feelLikesTemperature": 96052724.5444876,
        "relativeHumidity": 0.6144363901747318
      },
      "dayMinimum": {
        "temperature": 39814451.46985617,
        "feelLikesTemperature": -98659980.91434653,
        "relativeHumidity": 0.6732192184303981
      },
      "uVIndexMax": 10027917.673269449,
      "precipitation": 23712522.223578047,
      "precipitationProbability": 19163287.620370407
    },
    "nhsNumber": "9434765919"
  }
}
```
