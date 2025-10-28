# uk.nhs.notify.example.order.read.v1

**Event Type:** `uk.nhs.notify.example.order.read.v1`

**Source:** `/nhs/england/notify/staging/dev-171246895/data-plane/example`

**Subject:** `customer/c7db92f6-b83a-db3b-c47d-fe390a0e5a78/order/91fb3ba1-fe5d-44bd-9dcb-9fafe05ba27d/item/2e37aa43-cba1-ff34-bf7f-7a4ed6bb6d6a`

**Event ID:** `9c58951b-2f1a-4d29-b01a-a262b0f93b17`

**Timestamp:** 2025-10-28T08:52:32.770Z

## Related Schema Documentation

- [Event Schema](../nhs-notify-example-event.schema.md)
- [Event Schema (Bundled)](../nhs-notify-example-event.bundle.schema.md)
- [Event Schema (Flattened)](../nhs-notify-example-event.flattened.schema.md)

## Complete Event Instance

```json
{
  "type": "uk.nhs.notify.example.order.read.v1",
  "source": "/nhs/england/notify/staging/dev-171246895/data-plane/example",
  "subject": "customer/c7db92f6-b83a-db3b-c47d-fe390a0e5a78/order/91fb3ba1-fe5d-44bd-9dcb-9fafe05ba27d/item/2e37aa43-cba1-ff34-bf7f-7a4ed6bb6d6a",
  "dataschema": "../data/nhs-notify-example-event-data.schema.json",
  "data": {
    "nhsNumber": "9434765919"
  },
  "profileversion": "1.0.0",
  "profilepublished": "2025-10",
  "specversion": "1.0",
  "id": "9c58951b-2f1a-4d29-b01a-a262b0f93b17",
  "time": "2025-10-28T08:52:32.770Z",
  "datacontenttype": "application/json",
  "traceparent": "00-415fca62d1c551345d48d5420e7667df-ce00f879ae8bc498-01",
  "tracestate": "exercitation consequat",
  "partitionkey": "customer-c7db92f6",
  "recordedtime": "2025-10-28T08:52:33.770Z",
  "sampledrate": 1,
  "sequence": "00000000000210115809",
  "severitytext": "WARN",
  "severitynumber": 3,
  "dataclassification": "public",
  "dataregulation": "GDPR",
  "datacategory": "special-category"
}
```
