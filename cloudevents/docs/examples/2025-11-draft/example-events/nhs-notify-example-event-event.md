# uk.nhs.notify.example.order.read.v1

**Event Type:** `uk.nhs.notify.example.order.read.v1`

**Source:** `/nhs/england/notify/production/secondary/data-plane/example`

**Subject:** `customer/5fe0adfc-4ff3-ecaa-14ee-dba7be1c2293/order/cd6cc38a-aadd-a963-fabe-e2efb1bfcbee/item/e38ef5fe-6837-eae4-a6af-5371fe6ec8ff`

**Event ID:** `0996f9ee-547a-4068-8796-06451cb7fda0`

**Timestamp:** 2025-10-28T08:58:12.386Z

## Related Schema Documentation

- [Event Schema](../nhs-notify-example-event.schema.md)
- [Event Schema (Bundled)](../nhs-notify-example-event.bundle.schema.md)
- [Event Schema (Flattened)](../nhs-notify-example-event.flattened.schema.md)

## Complete Event Instance

```json
{
  "type": "uk.nhs.notify.example.order.read.v1",
  "source": "/nhs/england/notify/production/secondary/data-plane/example",
  "subject": "customer/5fe0adfc-4ff3-ecaa-14ee-dba7be1c2293/order/cd6cc38a-aadd-a963-fabe-e2efb1bfcbee/item/e38ef5fe-6837-eae4-a6af-5371fe6ec8ff",
  "dataschema": "../data/nhs-notify-example-event-data.schema.json",
  "data": {
    "nhsNumber": "9434765919"
  },
  "domainprofileversion": "1.0.0",
  "domainprofilepublished": "2025-11-draft",
  "profileversion": "1.0.0",
  "profilepublished": "2025-11-draft",
  "specversion": "1.0",
  "id": "0996f9ee-547a-4068-8796-06451cb7fda0",
  "time": "2025-10-28T08:58:12.386Z",
  "datacontenttype": "application/json",
  "traceparent": "00-621bf7cda41478433d80ebbab70ccfa0-73bfdd0f6b7366a7-01",
  "tracestate": "et aliqua",
  "partitionkey": "customer-5fe0adfc",
  "recordedtime": "2025-10-28T08:58:13.386Z",
  "sampledrate": 1,
  "sequence": "00000000000379496058",
  "severitytext": "ERROR",
  "severitynumber": 4,
  "dataclassification": "confidential",
  "dataregulation": "PCI-DSS",
  "datacategory": "non-sensitive"
}
```
