# uk.nhs.notify.supplier.allocation.file.received.v1

**Event Type:** `uk.nhs.notify.supplier.allocation.file.received.v1`

**Source:** `/nhs/england/notify/staging/secondary/data-plane/supplierallocation`

**Subject:** `customer/ba6899d9-fba4-dfea-bc32-6aafc21a39b3/v7/5c1f7d41-cb0b-ed54-e4ef-bf8b6a6001be/3eb7bdb8-ea30-dea2-add6-0f15e4aabcaa/lu6u/7tv-ygv8l2/hqoxq5g/wrlpbre8/84ftjyl/vsb/l1zx0cfx8br`

**Event ID:** `c50735f2-84ee-464c-bc2f-1a66922fb23f`

**Timestamp:** 2025-10-28T13:23:01.347Z

## Related Schema Documentation

- [Event Schema](../file-received.schema.md)
- [Event Schema (Bundled)](../file-received.bundle.schema.md)
- [Event Schema (Flattened)](../file-received.flattened.schema.md)

## Complete Event Instance

```json
{
  "type": "uk.nhs.notify.supplier.allocation.file.received.v1",
  "source": "/nhs/england/notify/staging/secondary/data-plane/supplierallocation",
  "dataschema": "../data/file-data.schema.json",
  "data": {
    "something": "dolore nostrud dolor dolor"
  },
  "specversion": "1.0",
  "id": "c50735f2-84ee-464c-bc2f-1a66922fb23f",
  "subject": "customer/ba6899d9-fba4-dfea-bc32-6aafc21a39b3/v7/5c1f7d41-cb0b-ed54-e4ef-bf8b6a6001be/3eb7bdb8-ea30-dea2-add6-0f15e4aabcaa/lu6u/7tv-ygv8l2/hqoxq5g/wrlpbre8/84ftjyl/vsb/l1zx0cfx8br",
  "time": "2025-10-28T13:23:01.347Z",
  "datacontenttype": "application/json",
  "traceparent": "00-9cc14b930ce29ec3d887bdd9dcf3d39c-43da7d02035842c0-01",
  "tracestate": "eiusmod ullamco Excepteur aliqua commodo",
  "partitionkey": "customer-ba6899d9",
  "recordedtime": "2025-10-28T13:23:02.347Z",
  "sampledrate": 1,
  "sequence": "00000000000444200239",
  "severitytext": "FATAL",
  "severitynumber": 5,
  "dataclassification": "restricted",
  "dataregulation": "HIPAA",
  "datacategory": "standard"
}
```
