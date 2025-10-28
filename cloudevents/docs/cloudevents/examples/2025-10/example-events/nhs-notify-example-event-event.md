# uk.nhs.notify.example.order.read.v1

**Event Type:** `uk.nhs.notify.example.order.read.v1`

**Source:** `/nhs/england/notify/production/dev-226/data-plane/example`

**Subject:** `customer/6002975c-e83e-a0b6-b86f-713f45e17ce6/order/8badcadb-7abc-c466-7bbe-b9d06fbb4ef7/item/a7629d11-ec8e-a9bf-ba5e-1a909acb489d`

**Event ID:** `3d40a8dc-3e85-474e-bd7a-771a1f45cf62`

**Timestamp:** 2025-10-28T13:22:50.840Z

## Related Schema Documentation

- [Event Schema](../nhs-notify-example-event.schema.md)
- [Event Schema (Bundled)](../nhs-notify-example-event.bundle.schema.md)
- [Event Schema (Flattened)](../nhs-notify-example-event.flattened.schema.md)

## Complete Event Instance

```json
{
  "type": "uk.nhs.notify.example.order.read.v1",
  "source": "/nhs/england/notify/production/dev-226/data-plane/example",
  "subject": "customer/6002975c-e83e-a0b6-b86f-713f45e17ce6/order/8badcadb-7abc-c466-7bbe-b9d06fbb4ef7/item/a7629d11-ec8e-a9bf-ba5e-1a909acb489d",
  "dataschema": "../data/nhs-notify-example-event-data.schema.json",
  "data": {
    "nhsNumber": "9434765919"
  },
  "specversion": "1.0",
  "id": "3d40a8dc-3e85-474e-bd7a-771a1f45cf62",
  "time": "2025-10-28T13:22:50.840Z",
  "datacontenttype": "application/json",
  "traceparent": "00-eb71c2b71577babe1ba58481e6be26fc-36ab23f57f1b8282-01",
  "tracestate": "ipsum",
  "partitionkey": "customer-6002975c",
  "recordedtime": "2025-10-28T13:22:51.840Z",
  "sampledrate": 1,
  "sequence": "00000000000970540696",
  "severitytext": "WARN",
  "severitynumber": 3,
  "dataclassification": "public",
  "dataregulation": "HIPAA",
  "datacategory": "standard"
}
```
