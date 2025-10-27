# uk.nhs.notify.example.order.read.v1

**Event Type:** `uk.nhs.notify.example.order.read.v1`

**Source:** `/nhs/england/notify/uat/secondary/data-plane/example`

**Subject:** `customer/e0076de8-a26d-1dea-9fef-77d67e1d27cf/order/a5a227db-8d2d-a8dd-9fd1-b974e5efda5e/item/c7204bf4-1b26-96de-1fba-7cfc1fa45efa`

**Event ID:** `0ffb5f51-80a0-49fa-bd60-dd489b24e89a`

**Timestamp:** 2025-10-27T21:39:31.606Z

## Related Schema Documentation

- [Event Schema](../nhs-notify-example-event.schema.md)
- [Event Schema (Bundled)](../nhs-notify-example-event.bundle.schema.md)
- [Event Schema (Flattened)](../nhs-notify-example-event.flattened.schema.md)

## Complete Event Instance

```json
{
  "type": "uk.nhs.notify.example.order.read.v1",
  "source": "/nhs/england/notify/uat/secondary/data-plane/example",
  "subject": "customer/e0076de8-a26d-1dea-9fef-77d67e1d27cf/order/a5a227db-8d2d-a8dd-9fd1-b974e5efda5e/item/c7204bf4-1b26-96de-1fba-7cfc1fa45efa",
  "dataschema": "../data/nhs-notify-example-event-data.schema.json",
  "data": {
    "nhsNumber": "9434765919"
  },
  "profileversion": "1.0.0",
  "profilepublished": "2025-10",
  "specversion": "1.0",
  "id": "0ffb5f51-80a0-49fa-bd60-dd489b24e89a",
  "time": "2025-10-27T21:39:31.606Z",
  "datacontenttype": "application/json",
  "traceparent": "00-3ad56d1bb7df241016c90b67fba88349-cfd462b2fa566ce8-01",
  "tracestate": "fugiat dolor magna exercitation in",
  "partitionkey": "customer-e0076de8",
  "recordedtime": "2025-10-27T21:39:32.606Z",
  "sampledrate": 1,
  "sequence": "00000000000906580115",
  "severitytext": "INFO",
  "severitynumber": 2,
  "dataclassification": "internal",
  "dataregulation": "NIST-800-53",
  "datacategory": "sensitive"
}
```
