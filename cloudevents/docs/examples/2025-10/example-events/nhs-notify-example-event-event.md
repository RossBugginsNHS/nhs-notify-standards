# uk.nhs.notify.example.order.read.v1

**Event Type:** `uk.nhs.notify.example.order.read.v1`

**Source:** `/nhs/england/notify/uat/dev-176186791/data-plane/example`

**Subject:** `customer/3aaef7cf-7423-63d9-ba2d-ecedc5cec3eb/order/3fb8be1c-5cdf-45db-ddde-f4df5fe39ff1/item/9fcab0d8-1916-49ff-73d1-a328883db85b`

**Event ID:** `c1520826-4848-4287-ae9d-294c920bb115`

**Timestamp:** 2025-10-28T08:58:08.160Z

## Related Schema Documentation

- [Event Schema](../nhs-notify-example-event.schema.md)
- [Event Schema (Bundled)](../nhs-notify-example-event.bundle.schema.md)
- [Event Schema (Flattened)](../nhs-notify-example-event.flattened.schema.md)

## Complete Event Instance

```json
{
  "type": "uk.nhs.notify.example.order.read.v1",
  "source": "/nhs/england/notify/uat/dev-176186791/data-plane/example",
  "subject": "customer/3aaef7cf-7423-63d9-ba2d-ecedc5cec3eb/order/3fb8be1c-5cdf-45db-ddde-f4df5fe39ff1/item/9fcab0d8-1916-49ff-73d1-a328883db85b",
  "dataschema": "../data/nhs-notify-example-event-data.schema.json",
  "data": {
    "nhsNumber": "9434765919"
  },
  "profileversion": "1.0.0",
  "profilepublished": "2025-10",
  "domainprofileversion": "1370992.6395.77",
  "domainprofilepublished": "5444-71-draft",
  "specversion": "1.0",
  "id": "c1520826-4848-4287-ae9d-294c920bb115",
  "time": "2025-10-28T08:58:08.160Z",
  "datacontenttype": "application/json",
  "traceparent": "00-eefb39b660f4e0e8df03f2ad92787739-d725c3c944bcf284-01",
  "tracestate": "ipsum elit",
  "partitionkey": "customer-3aaef7cf",
  "recordedtime": "2025-10-28T08:58:09.160Z",
  "sampledrate": 1,
  "sequence": "00000000000654597755",
  "severitytext": "TRACE",
  "severitynumber": 0,
  "dataclassification": "public",
  "dataregulation": "CCPA",
  "datacategory": "special-category"
}
```
