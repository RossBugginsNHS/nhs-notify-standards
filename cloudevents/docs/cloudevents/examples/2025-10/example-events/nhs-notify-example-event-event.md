# uk.nhs.notify.example.order.read.v1

**Event Type:** `uk.nhs.notify.example.order.read.v1`

**Source:** `/nhs/england/notify/uat/secondary/data-plane/example`

**Subject:** `customer/27375fdd-2b70-eecc-b9de-dc58b82fb7f0/order/34de7d7e-c28a-4f86-c8db-5c49bedd7baf/item/feab2abe-eeea-8abc-2b9f-a60dc46898bf`

**Event ID:** `cf522750-2036-4f35-8e9b-edee0ad8c299`

**Timestamp:** 2025-10-29T16:22:39.655Z

## Related Schema Documentation

- [Event Schema](../nhs-notify-example-event.schema.md)
- [Event Schema (Bundled)](../nhs-notify-example-event.bundle.schema.md)
- [Event Schema (Flattened)](../nhs-notify-example-event.flattened.schema.md)

## Complete Event Instance

```json
{
  "type": "uk.nhs.notify.example.order.read.v1",
  "source": "/nhs/england/notify/uat/secondary/data-plane/example",
  "subject": "customer/27375fdd-2b70-eecc-b9de-dc58b82fb7f0/order/34de7d7e-c28a-4f86-c8db-5c49bedd7baf/item/feab2abe-eeea-8abc-2b9f-a60dc46898bf",
  "dataschema": "file://../data/nhs-notify-example-event-data.schema.json",
  "data": {
    "notify-payload": {
      "notify-data": {
        "nhsNumber": "9434765919"
      },
      "notify-metadata": {
        "teamResponsible": "Team 1",
        "notifyDomain": "Reporting",
        "microservice": "VBGhyV1S",
        "repositoryUrl": "https://BaKQGJvRANZwARPiASjhj.wzzyGR6UVAOhCUK",
        "accountId": "f6g",
        "environment": "development",
        "instance": "UmDTU8I",
        "microserviceInstanceId": "aOG",
        "microserviceVersion": "0.0.0-0.0.5812562477.7905634.5064599.295725333zySFjQ6WcE.5413301017.0.7983NI-.0.26U8Epe5Kq+uKJJEFWR.PEa0tL.sk.p2.lgQDZh3-F",
        "commitSha": "7a8000b58b3cabd9438b22577ca739d6a",
        "buildTimestamp": "1922-02-08T03:16:55.0Z",
        "serviceTier": "experimental",
        "region": "eu-west-1",
        "pseudonymisationLevel": "none",
        "replayIndicator": true,
        "originalEventId": "fc1b3a58-20cb-4a47-8d4b-db3c77c2449f",
        "integrityHash": "sha256:276aeb9e19f871105bf76530acf57583e0bba49103a35f1f08f21afec2439290",
        "producedByType": "other"
      }
    }
  },
  "profileversion": "1.0.0",
  "profilepublished": "2025-10",
  "specversion": "1.0",
  "id": "cf522750-2036-4f35-8e9b-edee0ad8c299",
  "time": "2025-10-29T16:22:39.655Z",
  "datacontenttype": "application/json",
  "traceparent": "00-e4ccc3f4d893af5751164992022ba506-c028847e1a2cfa00-01",
  "tracestate": "ut ut incididunt dolore ullamco",
  "partitionkey": "customer-27375fdd",
  "recordedtime": "2025-10-29T16:22:40.655Z",
  "sampledrate": 1,
  "sequence": "00000000000803805163",
  "severitytext": "WARN",
  "severitynumber": 3,
  "dataclassification": "restricted",
  "dataregulation": "HIPAA",
  "datacategory": "special-category"
}
```
