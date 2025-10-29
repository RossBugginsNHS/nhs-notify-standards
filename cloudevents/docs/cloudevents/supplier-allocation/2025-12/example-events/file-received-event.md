# uk.nhs.notify.supplier.allocation.file.received.v1

**Event Type:** `uk.nhs.notify.supplier.allocation.file.received.v1`

**Source:** `/nhs/england/notify/development/secondary/data-plane/supplierallocation`

**Subject:** `customer/cb9908f3-dcb0-fac0-131c-663d2db711d4/4834ca6b-a7ae-a010-e11d-596d7b3474af/y73iy9cewtj/d/efed4e7c-9ed8-eb76-d9fb-f32c74b9d1b4/flev9v0kef8`

**Event ID:** `563c633c-3240-4223-8e2a-590e8e110d68`

**Timestamp:** 2025-10-29T17:21:40.813Z

## Related Schema Documentation

- [Event Schema](../file-received.schema.md)
- [Event Schema (Bundled)](../file-received.bundle.schema.md)
- [Event Schema (Flattened)](../file-received.flattened.schema.md)

## Complete Event Instance

```json
{
  "type": "uk.nhs.notify.supplier.allocation.file.received.v1",
  "source": "/nhs/england/notify/development/secondary/data-plane/supplierallocation",
  "dataschema": "file://../data/file-data.schema.json",
  "specversion": "1.0",
  "id": "563c633c-3240-4223-8e2a-590e8e110d68",
  "subject": "customer/cb9908f3-dcb0-fac0-131c-663d2db711d4/4834ca6b-a7ae-a010-e11d-596d7b3474af/y73iy9cewtj/d/efed4e7c-9ed8-eb76-d9fb-f32c74b9d1b4/flev9v0kef8",
  "time": "2025-10-29T17:21:40.813Z",
  "datacontenttype": "application/json",
  "traceparent": "00-5bab51b90c51667a66f152b52d5368ba-9ccae8aca391f3f8-01",
  "tracestate": "pariatur in Excepteur fugiat",
  "partitionkey": "customer-cb9908f3",
  "recordedtime": "2025-10-29T17:21:41.813Z",
  "sampledrate": 1,
  "sequence": "00000000000188238958",
  "severitytext": "INFO",
  "severitynumber": 2,
  "dataclassification": "confidential",
  "dataregulation": "GDPR",
  "datacategory": "non-sensitive",
  "data": {
    "something": "minim"
  }
}
```
