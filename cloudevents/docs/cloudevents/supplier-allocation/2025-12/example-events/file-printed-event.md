# uk.nhs.notify.supplier.allocation.file.printed.v1

**Event Type:** `uk.nhs.notify.supplier.allocation.file.printed.v1`

**Source:** `/nhs/england/notify/development/primary/data-plane/supplierallocation`

**Subject:** `customer/d4d41cb3-ad0f-f5d5-ce8a-310ff14cfc55/2bf3b9ec-066f-8fc9-2d83-fced7f71d4af/u01o4k`

**Event ID:** `85f905c6-b4d2-4223-a936-9d697b8852a2`

**Timestamp:** 2025-10-29T16:22:53.856Z

## Related Schema Documentation

- [Event Schema](../file-printed.schema.md)
- [Event Schema (Bundled)](../file-printed.bundle.schema.md)
- [Event Schema (Flattened)](../file-printed.flattened.schema.md)

## Complete Event Instance

```json
{
  "type": "uk.nhs.notify.supplier.allocation.file.printed.v1",
  "source": "/nhs/england/notify/development/primary/data-plane/supplierallocation",
  "dataschema": "file://../data/file-data.schema.json",
  "specversion": "1.0",
  "id": "85f905c6-b4d2-4223-a936-9d697b8852a2",
  "subject": "customer/d4d41cb3-ad0f-f5d5-ce8a-310ff14cfc55/2bf3b9ec-066f-8fc9-2d83-fced7f71d4af/u01o4k",
  "time": "2025-10-29T16:22:53.856Z",
  "datacontenttype": "application/json",
  "traceparent": "00-e28bf79c18421ea53298b808405f1179-76f149a0677efe6e-01",
  "tracestate": "officia esse adipisicing non voluptate",
  "partitionkey": "customer-d4d41cb3",
  "recordedtime": "2025-10-29T16:22:54.856Z",
  "sampledrate": 1,
  "sequence": "00000000000533146703",
  "severitytext": "DEBUG",
  "severitynumber": 1,
  "dataclassification": "internal",
  "dataregulation": "CCPA",
  "datacategory": "non-sensitive",
  "data": {
    "something": "pariatur"
  }
}
```
