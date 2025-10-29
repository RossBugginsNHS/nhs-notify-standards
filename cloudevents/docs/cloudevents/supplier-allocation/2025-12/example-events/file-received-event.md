# uk.nhs.notify.supplier.allocation.file.received.v1

**Event Type:** `uk.nhs.notify.supplier.allocation.file.received.v1`

**Source:** `/nhs/england/notify/staging/secondary/data-plane/supplierallocation`

**Subject:** `customer/a534bf53-0cab-eebd-bffc-acfa4b510f84/t5w2kxqd/1f6da8c7-6eda-c28a-17dc-e5bf1cfa2bca/8/z0elxt9gi`

**Event ID:** `90dbd507-1648-4b13-bed6-10ca95cf14e9`

**Timestamp:** 2025-10-29T17:00:11.818Z

## Related Schema Documentation

- [Event Schema](../file-received.schema.md)
- [Event Schema (Bundled)](../file-received.bundle.schema.md)
- [Event Schema (Flattened)](../file-received.flattened.schema.md)

## Complete Event Instance

```json
{
  "type": "uk.nhs.notify.supplier.allocation.file.received.v1",
  "source": "/nhs/england/notify/staging/secondary/data-plane/supplierallocation",
  "dataschema": "file://../data/file-data.schema.json",
  "specversion": "1.0",
  "id": "90dbd507-1648-4b13-bed6-10ca95cf14e9",
  "subject": "customer/a534bf53-0cab-eebd-bffc-acfa4b510f84/t5w2kxqd/1f6da8c7-6eda-c28a-17dc-e5bf1cfa2bca/8/z0elxt9gi",
  "time": "2025-10-29T17:00:11.818Z",
  "datacontenttype": "application/json",
  "traceparent": "00-4b15eb2d2824253a6b70f3c7ca92a45d-383e61b96bc7dcc3-01",
  "tracestate": "commodo",
  "partitionkey": "customer-a534bf53",
  "recordedtime": "2025-10-29T17:00:12.818Z",
  "sampledrate": 1,
  "sequence": "00000000000404781691",
  "severitytext": "WARN",
  "severitynumber": 3,
  "dataclassification": "public",
  "dataregulation": "HIPAA",
  "datacategory": "sensitive",
  "data": {
    "something": "in enim"
  }
}
```
