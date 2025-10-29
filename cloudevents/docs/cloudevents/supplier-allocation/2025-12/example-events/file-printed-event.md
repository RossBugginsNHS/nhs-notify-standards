# uk.nhs.notify.supplier.allocation.file.printed.v1

**Event Type:** `uk.nhs.notify.supplier.allocation.file.printed.v1`

**Source:** `/nhs/england/notify/production/secondary/data-plane/supplierallocation`

**Subject:** `customer/1eb37526-0ea1-68f0-c31e-1b888b3b75f1`

**Event ID:** `b9d341bb-dce2-4e69-b194-59da7920c067`

**Timestamp:** 2025-10-29T16:25:33.646Z

## Related Schema Documentation

- [Event Schema](../file-printed.schema.md)
- [Event Schema (Bundled)](../file-printed.bundle.schema.md)
- [Event Schema (Flattened)](../file-printed.flattened.schema.md)

## Complete Event Instance

```json
{
  "type": "uk.nhs.notify.supplier.allocation.file.printed.v1",
  "source": "/nhs/england/notify/production/secondary/data-plane/supplierallocation",
  "dataschema": "file://../data/file-data.schema.json",
  "specversion": "1.0",
  "id": "b9d341bb-dce2-4e69-b194-59da7920c067",
  "subject": "customer/1eb37526-0ea1-68f0-c31e-1b888b3b75f1",
  "time": "2025-10-29T16:25:33.646Z",
  "datacontenttype": "application/json",
  "traceparent": "00-1581a6592a538d424b36f47036938f62-08f965b0964f95fd-01",
  "tracestate": "velit mollit",
  "partitionkey": "customer-1eb37526",
  "recordedtime": "2025-10-29T16:25:34.646Z",
  "sampledrate": 1,
  "sequence": "00000000000452701531",
  "severitytext": "TRACE",
  "severitynumber": 0,
  "dataclassification": "internal",
  "dataregulation": "GDPR",
  "datacategory": "sensitive",
  "data": {
    "something": "enim proident aute"
  }
}
```
