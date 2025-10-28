# uk.nhs.notify.logging.new.log.v1

**Event Type:** `uk.nhs.notify.logging.new.log.v1`

**Source:** `/nhs/england/notify/staging/primary/data-plane/logging`

**Subject:** `customer/bea5c6b2-bdf4-2faa-cffc-e42f6ccec94d/order/c7df5c5d-8e0d-ebff-11a2-3db34fdbaa3c/item/cffd3d7b-2fff-9fce-cc2e-db0f40cbc50c`

**Event ID:** `367fe8bf-840e-4b13-b6ee-5dc9ffa42223`

**Timestamp:** 2025-10-28T09:56:57.744Z

## Related Schema Documentation

- [Event Schema](../log-item.schema.md)
- [Event Schema (Bundled)](../log-item.bundle.schema.md)
- [Event Schema (Flattened)](../log-item.flattened.schema.md)

## Complete Event Instance

```json
{
  "type": "uk.nhs.notify.logging.new.log.v1",
  "source": "/nhs/england/notify/staging/primary/data-plane/logging",
  "subject": "customer/bea5c6b2-bdf4-2faa-cffc-e42f6ccec94d/order/c7df5c5d-8e0d-ebff-11a2-3db34fdbaa3c/item/cffd3d7b-2fff-9fce-cc2e-db0f40cbc50c",
  "dataschema": "../data/log-item-data.schema.json",
  "data": {
    "info": "cupidatat labore nostrud in"
  },
  "specversion": "1.0",
  "id": "367fe8bf-840e-4b13-b6ee-5dc9ffa42223",
  "time": "2025-10-28T09:56:57.744Z",
  "datacontenttype": "application/json",
  "traceparent": "00-9e13e6f799a97a83d3e12d5ea7c912bc-b03763d54a1e2aa3-01",
  "tracestate": "quis sit ipsum minim qui",
  "partitionkey": "customer-bea5c6b2",
  "recordedtime": "2025-10-28T09:56:58.744Z",
  "sampledrate": 1,
  "sequence": "00000000000314623944",
  "severitytext": "WARN",
  "severitynumber": 3,
  "dataclassification": "restricted",
  "dataregulation": "HIPAA",
  "datacategory": "standard"
}
```
