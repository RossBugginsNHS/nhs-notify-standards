# uk.nhs.notify.example.order.read.v1

**Event Type:** `uk.nhs.notify.example.order.read.v1`

**Source:** `/nhs/england/notify/uat/secondary/data-plane/example`

**Subject:** `customer/f5fdfccc-fead-cb4a-fe5a-34eeec0ddef8/order/dbccee72-ea05-0fb7-af12-b2d1c9c4e24f/item/c4d2fcee-1bab-a03d-9b40-f57c6dff6d4c`

**Event ID:** `278c521f-c378-4b47-bd79-c09331509712`

**Timestamp:** 2025-10-27T21:18:08.281Z

## Related Schema Documentation

- [Event Schema](../nhs-notify-example-event.schema.md)
- [Event Schema (Bundled)](../nhs-notify-example-event.bundle.schema.md)
- [Event Schema (Flattened)](../nhs-notify-example-event.flattened.schema.md)

## Complete Event Instance

```json
{
  "type": "uk.nhs.notify.example.order.read.v1",
  "source": "/nhs/england/notify/uat/secondary/data-plane/example",
  "subject": "customer/f5fdfccc-fead-cb4a-fe5a-34eeec0ddef8/order/dbccee72-ea05-0fb7-af12-b2d1c9c4e24f/item/c4d2fcee-1bab-a03d-9b40-f57c6dff6d4c",
  "dataschema": "../data/nhs-notify-example-event-data.schema.json",
  "data": {
    "nhsNumber": "9434765919"
  },
  "profileversion": "1.0.0",
  "profilepublished": "2025-10",
  "specversion": "1.0",
  "id": "278c521f-c378-4b47-bd79-c09331509712",
  "time": "2025-10-27T21:18:08.281Z",
  "datacontenttype": "application/json",
  "traceparent": "00-621b943a1908c5a50752ec64ab4ea046-f1905bf1d2481da7-01",
  "tracestate": "in ex",
  "partitionkey": "customer-f5fdfccc",
  "recordedtime": "2025-10-27T21:18:09.281Z",
  "sampledrate": 1,
  "sequence": "00000000000785160899",
  "severitytext": "ERROR",
  "severitynumber": 4,
  "dataclassification": "restricted",
  "dataregulation": "NIST-800-53",
  "datacategory": "non-sensitive"
}
```
