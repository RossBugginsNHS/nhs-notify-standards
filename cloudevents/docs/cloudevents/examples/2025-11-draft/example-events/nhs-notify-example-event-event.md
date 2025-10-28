# uk.nhs.notify.example.order.read.v1

**Event Type:** `uk.nhs.notify.example.order.read.v1`

**Source:** `/nhs/england/notify/uat/secondary/data-plane/example`

**Subject:** `customer/8c6b5e65-e02e-7bc8-cdcd-a6cfb43f5fbe/order/41085ded-4115-c6d3-ab6f-be9c0c2edf7d/item/90dac58d-ffc1-9dc2-a097-5abc4ce6c4e6`

**Event ID:** `d39b100e-8614-4027-b3ec-2eaefce071f9`

**Timestamp:** 2025-10-28T13:22:55.391Z

## Related Schema Documentation

- [Event Schema](../nhs-notify-example-event.schema.md)
- [Event Schema (Bundled)](../nhs-notify-example-event.bundle.schema.md)
- [Event Schema (Flattened)](../nhs-notify-example-event.flattened.schema.md)

## Complete Event Instance

```json
{
  "type": "uk.nhs.notify.example.order.read.v1",
  "source": "/nhs/england/notify/uat/secondary/data-plane/example",
  "subject": "customer/8c6b5e65-e02e-7bc8-cdcd-a6cfb43f5fbe/order/41085ded-4115-c6d3-ab6f-be9c0c2edf7d/item/90dac58d-ffc1-9dc2-a097-5abc4ce6c4e6",
  "dataschema": "../data/nhs-notify-example-event-data.schema.json",
  "data": {
    "nhsNumber": "9434765919"
  },
  "specversion": "1.0",
  "id": "d39b100e-8614-4027-b3ec-2eaefce071f9",
  "time": "2025-10-28T13:22:55.391Z",
  "datacontenttype": "application/json",
  "traceparent": "00-894773d321566d7b3533bbd0e2d6cc77-e362a2316b896488-01",
  "tracestate": "do mollit reprehenderit",
  "partitionkey": "customer-8c6b5e65",
  "recordedtime": "2025-10-28T13:22:56.391Z",
  "sampledrate": 1,
  "sequence": "00000000000204272578",
  "severitytext": "TRACE",
  "severitynumber": 0,
  "dataclassification": "restricted",
  "dataregulation": "GDPR",
  "datacategory": "sensitive"
}
```
