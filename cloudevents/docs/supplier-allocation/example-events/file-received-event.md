# uk.nhs.notify.supplier.allocation.file.received.v1

**Event Type:** `uk.nhs.notify.supplier.allocation.file.received.v1`

**Source:** `/nhs/england/notify/development/primary/data-plane/supplierallocation`

**Subject:** `customer/ee0fdec2-ddfd-d0db-7bb6-4ad3c5c0cae9/j34c14/ybp4h2hco/5466fdee-cc0d-02ca-ba98-29ddaebcccd5/vrxax3lud/1995a2fd-dfa7-a43e-fbee-63debe08bf4d`

**Event ID:** `67a23509-d31b-42f5-be4e-806cae9592d1`

**Timestamp:** 2025-10-27T21:39:36.995Z

## Related Schema Documentation

- [Event Schema](../file-received.schema.md)
- [Event Schema (Bundled)](../file-received.bundle.schema.md)
- [Event Schema (Flattened)](../file-received.flattened.schema.md)

## Complete Event Instance

```json
{
  "type": "uk.nhs.notify.supplier.allocation.file.received.v1",
  "source": "/nhs/england/notify/development/primary/data-plane/supplierallocation",
  "dataschema": "../data/file-data.schema.json",
  "data": {
    "something": "nisi"
  },
  "profileversion": "1.0.0",
  "profilepublished": "2025-10",
  "specversion": "1.0",
  "id": "67a23509-d31b-42f5-be4e-806cae9592d1",
  "subject": "customer/ee0fdec2-ddfd-d0db-7bb6-4ad3c5c0cae9/j34c14/ybp4h2hco/5466fdee-cc0d-02ca-ba98-29ddaebcccd5/vrxax3lud/1995a2fd-dfa7-a43e-fbee-63debe08bf4d",
  "time": "2025-10-27T21:39:36.995Z",
  "datacontenttype": "application/json",
  "traceparent": "00-ff7054bdec4cff65fc2d633776767cc1-e5865fab0dcd6f6e-01",
  "tracestate": "velit",
  "partitionkey": "customer-ee0fdec2",
  "recordedtime": "2025-10-27T21:39:37.995Z",
  "sampledrate": 1,
  "sequence": "00000000000515830712",
  "severitytext": "ERROR",
  "severitynumber": 4,
  "dataclassification": "public",
  "dataregulation": "GDPR",
  "datacategory": "sensitive"
}
```
