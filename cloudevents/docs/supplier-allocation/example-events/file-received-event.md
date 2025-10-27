# uk.nhs.notify.supplier.allocation.file.received.v1

**Event Type:** `uk.nhs.notify.supplier.allocation.file.received.v1`

**Source:** `/nhs/england/notify/uat/dev-86622/data-plane/supplierallocation`

**Subject:** `customer/58eda19f-1b5e-b2b3-ddef-11dca771b758/8/tfllu1hs0/f28aznj-/bfb274b5-1adf-0202-7f84-2b8835dfe37b`

**Event ID:** `d2aaa375-7a87-4454-83ec-0d676faa4f62`

**Timestamp:** 2025-10-27T21:45:11.733Z

## Related Schema Documentation

- [Event Schema](../file-received.schema.md)
- [Event Schema (Bundled)](../file-received.bundle.schema.md)
- [Event Schema (Flattened)](../file-received.flattened.schema.md)

## Complete Event Instance

```json
{
  "type": "uk.nhs.notify.supplier.allocation.file.received.v1",
  "source": "/nhs/england/notify/uat/dev-86622/data-plane/supplierallocation",
  "dataschema": "../data/file-data.schema.json",
  "data": {
    "something": "officia nostrud"
  },
  "profileversion": "1.0.0",
  "profilepublished": "2025-10",
  "specversion": "1.0",
  "id": "d2aaa375-7a87-4454-83ec-0d676faa4f62",
  "subject": "customer/58eda19f-1b5e-b2b3-ddef-11dca771b758/8/tfllu1hs0/f28aznj-/bfb274b5-1adf-0202-7f84-2b8835dfe37b",
  "time": "2025-10-27T21:45:11.733Z",
  "datacontenttype": "application/json",
  "traceparent": "00-5d8476b6a8d6370738a4f0d717154514-1469977e7eaee50b-01",
  "tracestate": "eu consectetur occaecat adipisicing",
  "partitionkey": "customer-58eda19f",
  "recordedtime": "2025-10-27T21:45:12.733Z",
  "sampledrate": 1,
  "sequence": "00000000000319002373",
  "severitytext": "DEBUG",
  "severitynumber": 1,
  "dataclassification": "internal",
  "dataregulation": "GDPR",
  "datacategory": "standard"
}
```
