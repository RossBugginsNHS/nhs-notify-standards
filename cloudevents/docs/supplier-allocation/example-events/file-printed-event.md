# uk.nhs.notify.supplier.allocation.file.printed.v1

**Event Type:** `uk.nhs.notify.supplier.allocation.file.printed.v1`

**Source:** `/nhs/england/notify/staging/primary/data-plane/supplierallocation`

**Subject:** `customer/11faa770-f7cb-454b-a1ed-a0b2f6f6a15e/hq7`

**Event ID:** `58cd5f25-50a2-46d0-a587-6039d52c59ac`

**Timestamp:** 2025-10-27T18:41:49.340Z

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
    "something": "occaecat est reprehenderit elit"
  },
  "profileversion": "1.0.0",
  "profilepublished": "2025-10",
  "specversion": "1.0",
  "id": "58cd5f25-50a2-46d0-a587-6039d52c59ac",
  "subject": "customer/11faa770-f7cb-454b-a1ed-a0b2f6f6a15e/hq7",
  "time": "2025-10-27T18:41:49.340Z",
  "datacontenttype": "application/json",
  "traceparent": "00-9728a3ee90bfa3e9e56026c7b3e53102-2a916b5763d209f1-01",
  "tracestate": "in",
  "partitionkey": "customer-11faa770",
  "recordedtime": "2025-10-27T18:41:50.340Z",
  "sampledrate": 1,
  "sequence": "00000000000376711039",
  "severitytext": "DEBUG",
  "severitynumber": 1,
  "dataclassification": "confidential",
  "dataregulation": "PCI-DSS",
  "datacategory": "special-category"
}
```
