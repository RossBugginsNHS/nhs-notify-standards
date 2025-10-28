# uk.nhs.notify.example.order.read.v1

**Event Type:** `uk.nhs.notify.example.order.read.v1`

**Source:** `/nhs/england/notify/production/dev-038/data-plane/example`

**Subject:** `customer/bbbdbe18-a1b8-fdd2-7cbd-b294df93fff7/order/70d11cab-ad5b-88a4-b9ca-73ee626c976b/item/78712a28-2b27-754f-3e80-adc7f0bc3a4b`

**Event ID:** `2ff7af8a-3385-4742-b32f-f04891a7eb47`

**Timestamp:** 2025-10-28T08:16:13.511Z

## Related Schema Documentation

- [Event Schema](../nhs-notify-example-event.schema.md)
- [Event Schema (Bundled)](../nhs-notify-example-event.bundle.schema.md)
- [Event Schema (Flattened)](../nhs-notify-example-event.flattened.schema.md)

## Complete Event Instance

```json
{
  "type": "uk.nhs.notify.example.order.read.v1",
  "source": "/nhs/england/notify/production/dev-038/data-plane/example",
  "subject": "customer/bbbdbe18-a1b8-fdd2-7cbd-b294df93fff7/order/70d11cab-ad5b-88a4-b9ca-73ee626c976b/item/78712a28-2b27-754f-3e80-adc7f0bc3a4b",
  "dataschema": "../data/nhs-notify-example-event-data.schema.json",
  "data": {
    "nhsNumber": "9434765919"
  },
  "profilebuildversion": "39630770364.28.342-12746055.401754+7973306",
  "profileversion": "1.0.0",
  "profilepublished": "2025-10",
  "specversion": "1.0",
  "id": "2ff7af8a-3385-4742-b32f-f04891a7eb47",
  "time": "2025-10-28T08:16:13.511Z",
  "datacontenttype": "application/json",
  "traceparent": "00-75e9998e1fdcf1acc3ea71dcfbe9baa0-46a07291cf82f74d-01",
  "tracestate": "est esse id",
  "partitionkey": "customer-bbbdbe18",
  "recordedtime": "2025-10-28T08:16:14.511Z",
  "sampledrate": 1,
  "sequence": "00000000000596185675",
  "severitytext": "WARN",
  "severitynumber": 3,
  "dataclassification": "confidential",
  "dataregulation": "PCI-DSS",
  "datacategory": "special-category"
}
```
