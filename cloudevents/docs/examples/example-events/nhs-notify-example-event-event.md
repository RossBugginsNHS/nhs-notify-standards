# uk.nhs.notify.example.order.read.v1

**Event Type:** `uk.nhs.notify.example.order.read.v1`

**Source:** `/nhs/england/notify/staging/primary/data-plane/example`

**Subject:** `customer/9b11fa83-cd00-6b52-0b19-c53a61fbbdeb/order/d5dee68c-bb94-6bfe-fffa-c9bbade58eae/item/9ecadd0c-f9fa-3dc5-af41-09b8ac8fdded`

**Event ID:** `b12d6bff-aab2-489f-9e09-3fd4ed1f70d9`

**Timestamp:** 2025-10-27T21:37:23.639Z

## Related Schema Documentation

- [Event Schema](../nhs-notify-example-event.schema.md)
- [Event Schema (Bundled)](../nhs-notify-example-event.bundle.schema.md)
- [Event Schema (Flattened)](../nhs-notify-example-event.flattened.schema.md)

## Complete Event Instance

```json
{
  "type": "uk.nhs.notify.example.order.read.v1",
  "source": "/nhs/england/notify/staging/primary/data-plane/example",
  "subject": "customer/9b11fa83-cd00-6b52-0b19-c53a61fbbdeb/order/d5dee68c-bb94-6bfe-fffa-c9bbade58eae/item/9ecadd0c-f9fa-3dc5-af41-09b8ac8fdded",
  "dataschema": "../data/nhs-notify-example-event-data.schema.json",
  "data": {
    "nhsNumber": "9434765919"
  },
  "profileversion": "1.0.0",
  "profilepublished": "2025-10",
  "specversion": "1.0",
  "id": "b12d6bff-aab2-489f-9e09-3fd4ed1f70d9",
  "time": "2025-10-27T21:37:23.639Z",
  "datacontenttype": "application/json",
  "traceparent": "00-70d6ad367f9e48022b8e926ca47604e3-197b0c413a1153a2-01",
  "tracestate": "in dolore consectetur adipisicing Excepteur",
  "partitionkey": "customer-9b11fa83",
  "recordedtime": "2025-10-27T21:37:24.639Z",
  "sampledrate": 1,
  "sequence": "00000000000665691524",
  "severitytext": "ERROR",
  "severitynumber": 4,
  "dataclassification": "confidential",
  "dataregulation": "NIST-800-53",
  "datacategory": "sensitive"
}
```
