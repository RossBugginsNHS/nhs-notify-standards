# uk.nhs.notify.example.order.read.v1

**Event Type:** `uk.nhs.notify.example.order.read.v1`

**Source:** `/nhs/england/notify/production/primary/data-plane/example`

**Subject:** `customer/6af9c2d7-92ab-be0a-6aed-61ac30eeb58c/order/e4bf3711-a5b7-f5e1-feee-4c53f10b29c0/item/abff1c77-b3bd-da31-07e1-fdadda8c6ebb`

**Event ID:** `2970056d-b090-421f-9286-07f823b89e90`

**Timestamp:** 2025-10-28T09:57:07.249Z

## Related Schema Documentation

- [Event Schema](../nhs-notify-example-event.schema.md)
- [Event Schema (Bundled)](../nhs-notify-example-event.bundle.schema.md)
- [Event Schema (Flattened)](../nhs-notify-example-event.flattened.schema.md)

## Complete Event Instance

```json
{
  "type": "uk.nhs.notify.example.order.read.v1",
  "source": "/nhs/england/notify/production/primary/data-plane/example",
  "subject": "customer/6af9c2d7-92ab-be0a-6aed-61ac30eeb58c/order/e4bf3711-a5b7-f5e1-feee-4c53f10b29c0/item/abff1c77-b3bd-da31-07e1-fdadda8c6ebb",
  "dataschema": "../data/nhs-notify-example-event-data.schema.json",
  "data": {
    "nhsNumber": "9434765919"
  },
  "specversion": "1.0",
  "id": "2970056d-b090-421f-9286-07f823b89e90",
  "time": "2025-10-28T09:57:07.249Z",
  "datacontenttype": "application/json",
  "traceparent": "00-d2112daa13cf96d3cdbd342e786ec31f-bda29a08f363d0fd-01",
  "tracestate": "quis tempor Ut elit",
  "partitionkey": "customer-6af9c2d7",
  "recordedtime": "2025-10-28T09:57:08.249Z",
  "sampledrate": 1,
  "sequence": "00000000000704998352",
  "severitytext": "ERROR",
  "severitynumber": 4,
  "dataclassification": "restricted",
  "dataregulation": "HIPAA",
  "datacategory": "standard"
}
```
