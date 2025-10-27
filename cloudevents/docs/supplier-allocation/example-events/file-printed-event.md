# uk.nhs.notify.supplier.allocation.file.printed.v1

**Event Type:** `uk.nhs.notify.supplier.allocation.file.printed.v1`

**Source:** `/nhs/england/notify/staging/primary/data-plane/supplierallocation`

**Subject:** `customer/dabb07fd-3cc1-0dd4-a5eb-21d1d8da85dc/e5d3dddb-ad90-f5ce-0dff-286333eca27d/e12aa/5deb6e44-fa58-d2f0-8fda-5b9b5fffdcbb`

**Event ID:** `e28631b3-aed9-43bc-9f29-98cd69cc5fef`

**Timestamp:** 2025-10-27T21:37:28.560Z

## Related Schema Documentation

- [Event Schema](../file-printed.schema.md)
- [Event Schema (Bundled)](../file-printed.bundle.schema.md)
- [Event Schema (Flattened)](../file-printed.flattened.schema.md)

## Complete Event Instance

```json
{
  "type": "uk.nhs.notify.supplier.allocation.file.printed.v1",
  "source": "/nhs/england/notify/staging/primary/data-plane/supplierallocation",
  "dataschema": "../data/file-data.schema.json",
  "data": {
    "something": "quis in ex elit"
  },
  "profileversion": "1.0.0",
  "profilepublished": "2025-10",
  "specversion": "1.0",
  "id": "e28631b3-aed9-43bc-9f29-98cd69cc5fef",
  "subject": "customer/dabb07fd-3cc1-0dd4-a5eb-21d1d8da85dc/e5d3dddb-ad90-f5ce-0dff-286333eca27d/e12aa/5deb6e44-fa58-d2f0-8fda-5b9b5fffdcbb",
  "time": "2025-10-27T21:37:28.560Z",
  "datacontenttype": "application/json",
  "traceparent": "00-60ef40de0afce5efbdc58e3f9deb51e8-12ba7568a731d6ad-01",
  "tracestate": "deserunt proident in",
  "partitionkey": "customer-dabb07fd",
  "recordedtime": "2025-10-27T21:37:29.560Z",
  "sampledrate": 1,
  "sequence": "00000000000132552070",
  "severitytext": "FATAL",
  "severitynumber": 5,
  "dataclassification": "confidential",
  "dataregulation": "CCPA",
  "datacategory": "non-sensitive"
}
```
