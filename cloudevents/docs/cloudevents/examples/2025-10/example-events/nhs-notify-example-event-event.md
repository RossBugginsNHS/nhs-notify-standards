# uk.nhs.notify.example.order.read.v1

**Event Type:** `uk.nhs.notify.example.order.read.v1`

**Source:** `/nhs/england/notify/uat/secondary/data-plane/example`

**Subject:** `customer/27ccaae0-51bd-1f65-a8fe-a1dbafd64fbe/order/63651c17-be49-95fc-eea7-20d9af8fa1d6/item/efda055c-2e48-fade-192b-9592eeb2cafe`

**Event ID:** `45327de9-c5b6-4b7d-849d-631101e8d492`

**Timestamp:** 2025-10-28T16:21:10.627Z

## Related Schema Documentation

- [Event Schema](../nhs-notify-example-event.schema.md)
- [Event Schema (Bundled)](../nhs-notify-example-event.bundle.schema.md)
- [Event Schema (Flattened)](../nhs-notify-example-event.flattened.schema.md)

## Complete Event Instance

```json
{
  "type": "uk.nhs.notify.example.order.read.v1",
  "source": "/nhs/england/notify/uat/secondary/data-plane/example",
  "subject": "customer/27ccaae0-51bd-1f65-a8fe-a1dbafd64fbe/order/63651c17-be49-95fc-eea7-20d9af8fa1d6/item/efda055c-2e48-fade-192b-9592eeb2cafe",
  "dataschema": "../data/nhs-notify-example-event-data.schema.json",
  "data": {
    "nhsNumber": "9434765919"
  },
  "specversion": "1.0",
  "id": "45327de9-c5b6-4b7d-849d-631101e8d492",
  "time": "2025-10-28T16:21:10.627Z",
  "datacontenttype": "application/json",
  "traceparent": "00-eb86d564675440f7b6ac3be485cea9d9-d22fa141d1d9ba96-01",
  "tracestate": "eiusmod aliqua dolor ut adipisicing",
  "partitionkey": "customer-27ccaae0",
  "recordedtime": "2025-10-28T16:21:11.627Z",
  "sampledrate": 1,
  "sequence": "00000000000292966246",
  "severitytext": "DEBUG",
  "severitynumber": 1,
  "dataclassification": "confidential",
  "dataregulation": "HIPAA",
  "datacategory": "sensitive"
}
```
