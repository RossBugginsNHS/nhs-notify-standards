# uk.nhs.notify.supplier.allocation.file.printed.v1

**Event Type:** `uk.nhs.notify.supplier.allocation.file.printed.v1`

**Source:** `/nhs/england/notify/staging/dev-75920028831/data-plane/supplierallocation`

**Subject:** `customer/29da8470-dbb0-dee4-f5b0-84f9c40abe0d/10f98b8e-c55f-ebd1-5c24-ddfcf4bc1cdb/c35fee3a-fbbe-17fb-60bc-c92a2aec8fee/6/tmp3aq7ok/0ja0i8`

**Event ID:** `297fb0f7-7c6d-4022-9d9b-9ac7b217304c`

**Timestamp:** 2025-10-29T17:00:11.474Z

## Related Schema Documentation

- [Event Schema](../file-printed.schema.md)
- [Event Schema (Bundled)](../file-printed.bundle.schema.md)
- [Event Schema (Flattened)](../file-printed.flattened.schema.md)

## Complete Event Instance

```json
{
  "type": "uk.nhs.notify.supplier.allocation.file.printed.v1",
  "source": "/nhs/england/notify/staging/dev-75920028831/data-plane/supplierallocation",
  "dataschema": "file://../data/file-data.schema.json",
  "specversion": "1.0",
  "id": "297fb0f7-7c6d-4022-9d9b-9ac7b217304c",
  "subject": "customer/29da8470-dbb0-dee4-f5b0-84f9c40abe0d/10f98b8e-c55f-ebd1-5c24-ddfcf4bc1cdb/c35fee3a-fbbe-17fb-60bc-c92a2aec8fee/6/tmp3aq7ok/0ja0i8",
  "time": "2025-10-29T17:00:11.474Z",
  "datacontenttype": "application/json",
  "traceparent": "00-b79ae48ec8bfa51e4161be06afd9a3e7-8256f7f095afe216-01",
  "tracestate": "nostrud aliquip et ut",
  "partitionkey": "customer-29da8470",
  "recordedtime": "2025-10-29T17:00:12.474Z",
  "sampledrate": 1,
  "sequence": "00000000000747252340",
  "severitytext": "DEBUG",
  "severitynumber": 1,
  "dataclassification": "confidential",
  "dataregulation": "HIPAA",
  "datacategory": "standard",
  "data": {
    "something": "voluptate Excepteur"
  }
}
```
