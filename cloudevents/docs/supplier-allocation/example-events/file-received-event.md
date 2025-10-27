# uk.nhs.notify.supplier.allocation.file.received.v1

**Event Type:** `uk.nhs.notify.supplier.allocation.file.received.v1`

**Source:** `/nhs/england/notify/development/dev-65765291/data-plane/supplierallocation`

**Subject:** `customer/bf60cf28-33bb-e30f-978f-76c338f5b33f`

**Event ID:** `7e967b17-1397-4f03-99d2-1a16663cb073`

**Timestamp:** 2025-10-27T21:37:28.831Z

## Related Schema Documentation

- [Event Schema](../file-received.schema.md)
- [Event Schema (Bundled)](../file-received.bundle.schema.md)
- [Event Schema (Flattened)](../file-received.flattened.schema.md)

## Complete Event Instance

```json
{
  "type": "uk.nhs.notify.supplier.allocation.file.received.v1",
  "source": "/nhs/england/notify/development/dev-65765291/data-plane/supplierallocation",
  "dataschema": "../data/file-data.schema.json",
  "data": {
    "something": "ad"
  },
  "profileversion": "1.0.0",
  "profilepublished": "2025-10",
  "specversion": "1.0",
  "id": "7e967b17-1397-4f03-99d2-1a16663cb073",
  "subject": "customer/bf60cf28-33bb-e30f-978f-76c338f5b33f",
  "time": "2025-10-27T21:37:28.831Z",
  "datacontenttype": "application/json",
  "traceparent": "00-e3bbe747fed8f91f2ff506fbe14c10a7-3fe514b19ffbae7c-01",
  "tracestate": "non",
  "partitionkey": "customer-bf60cf28",
  "recordedtime": "2025-10-27T21:37:29.831Z",
  "sampledrate": 1,
  "sequence": "00000000000487235270",
  "severitytext": "TRACE",
  "severitynumber": 0,
  "dataclassification": "confidential",
  "dataregulation": "PCI-DSS",
  "datacategory": "sensitive"
}
```
