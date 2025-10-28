# uk.nhs.notify.supplier.allocation.file.received.v1

**Event Type:** `uk.nhs.notify.supplier.allocation.file.received.v1`

**Source:** `/nhs/england/notify/staging/dev-715844/data-plane/supplierallocation`

**Subject:** `customer/0d29728b-126d-eeff-711a-778e6ac8aaba`

**Event ID:** `8834b78d-731d-4a0a-94bc-254b0524de5a`

**Timestamp:** 2025-10-28T09:57:13.150Z

## Related Schema Documentation

- [Event Schema](../file-received.schema.md)
- [Event Schema (Bundled)](../file-received.bundle.schema.md)
- [Event Schema (Flattened)](../file-received.flattened.schema.md)

## Complete Event Instance

```json
{
  "type": "uk.nhs.notify.supplier.allocation.file.received.v1",
  "source": "/nhs/england/notify/staging/dev-715844/data-plane/supplierallocation",
  "dataschema": "../data/file-data.schema.json",
  "data": {
    "something": "nulla exercitation id"
  },
  "specversion": "1.0",
  "id": "8834b78d-731d-4a0a-94bc-254b0524de5a",
  "subject": "customer/0d29728b-126d-eeff-711a-778e6ac8aaba",
  "time": "2025-10-28T09:57:13.150Z",
  "datacontenttype": "application/json",
  "traceparent": "00-d740bfa6fd7df1ff8a7f004618b52c92-fcd79a35ce1430c4-01",
  "tracestate": "dolore sint",
  "partitionkey": "customer-0d29728b",
  "recordedtime": "2025-10-28T09:57:14.150Z",
  "sampledrate": 1,
  "sequence": "00000000000550406254",
  "severitytext": "WARN",
  "severitynumber": 3,
  "dataclassification": "internal",
  "dataregulation": "HIPAA",
  "datacategory": "standard"
}
```
