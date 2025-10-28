# uk.nhs.notify.supplier.allocation.file.printed.v1

**Event Type:** `uk.nhs.notify.supplier.allocation.file.printed.v1`

**Source:** `/nhs/england/notify/production/dev-9098751754/data-plane/supplierallocation`

**Subject:** `customer/3ec6b8e7-704f-745a-a429-fae6dd581fee`

**Event ID:** `076100f7-83c1-4a67-8c16-e9ad9886e8f8`

**Timestamp:** 2025-10-28T16:21:21.787Z

## Related Schema Documentation

- [Event Schema](../file-printed.schema.md)
- [Event Schema (Bundled)](../file-printed.bundle.schema.md)
- [Event Schema (Flattened)](../file-printed.flattened.schema.md)

## Complete Event Instance

```json
{
  "type": "uk.nhs.notify.supplier.allocation.file.printed.v1",
  "source": "/nhs/england/notify/production/dev-9098751754/data-plane/supplierallocation",
  "dataschema": "../data/file-data.schema.json",
  "data": {
    "something": "Lorem cillum cupidatat laboris ea"
  },
  "specversion": "1.0",
  "id": "076100f7-83c1-4a67-8c16-e9ad9886e8f8",
  "subject": "customer/3ec6b8e7-704f-745a-a429-fae6dd581fee",
  "time": "2025-10-28T16:21:21.787Z",
  "datacontenttype": "application/json",
  "traceparent": "00-a712c112033b5a8ac4eabc20b0c9f6e5-fbdfdc8d39051588-01",
  "tracestate": "ipsum enim deserunt",
  "partitionkey": "customer-3ec6b8e7",
  "recordedtime": "2025-10-28T16:21:22.787Z",
  "sampledrate": 1,
  "sequence": "00000000000883000902",
  "severitytext": "TRACE",
  "severitynumber": 0,
  "dataclassification": "restricted",
  "dataregulation": "HIPAA",
  "datacategory": "special-category"
}
```
