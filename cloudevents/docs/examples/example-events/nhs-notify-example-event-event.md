# uk.nhs.notify.example.order.read.v1

**Event Type:** `uk.nhs.notify.example.order.read.v1`

**Source:** `/nhs/england/notify/staging/primary/data-plane/example`

**Subject:** `customer/5df98d4e-9a16-0ddc-77dd-f80ebd3bb79b/order/0cb77fff-cbb6-eeca-a886-1b8fbde41b0e/item/a4bdd7fb-50a8-2b5e-d3ac-729cefb4a797`

**Event ID:** `ecaea615-a0f3-4dad-8125-0e41fe6b8c67`

**Timestamp:** 2025-10-27T18:41:44.365Z

## Related Schema Documentation

- [Event Schema](../nhs-notify-example-event.schema.md)
- [Event Schema (Bundled)](../nhs-notify-example-event.bundle.schema.md)
- [Event Schema (Flattened)](../nhs-notify-example-event.flattened.schema.md)

## Complete Event Instance

```json
{
  "type": "uk.nhs.notify.example.order.read.v1",
  "source": "/nhs/england/notify/staging/primary/data-plane/example",
  "subject": "customer/5df98d4e-9a16-0ddc-77dd-f80ebd3bb79b/order/0cb77fff-cbb6-eeca-a886-1b8fbde41b0e/item/a4bdd7fb-50a8-2b5e-d3ac-729cefb4a797",
  "dataschema": "../data/nhs-notify-example-event-data.schema.json",
  "data": {
    "nhsNumber": "9434765919"
  },
  "profileversion": "1.0.0",
  "profilepublished": "2025-10",
  "specversion": "1.0",
  "id": "ecaea615-a0f3-4dad-8125-0e41fe6b8c67",
  "time": "2025-10-27T18:41:44.365Z",
  "datacontenttype": "application/json",
  "traceparent": "00-519b4929c839428e03b20136f366456b-cd667a05422621b5-01",
  "tracestate": "cillum",
  "partitionkey": "customer-5df98d4e",
  "recordedtime": "2025-10-27T18:41:45.365Z",
  "sampledrate": 1,
  "sequence": "00000000000845448949",
  "severitytext": "INFO",
  "severitynumber": 2,
  "dataclassification": "restricted",
  "dataregulation": "HIPAA",
  "datacategory": "special-category"
}
```
