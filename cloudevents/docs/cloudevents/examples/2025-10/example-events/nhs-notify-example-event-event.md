# uk.nhs.notify.example.order.read.v1

**Event Type:** `uk.nhs.notify.example.order.read.v1`

**Source:** `/nhs/england/notify/uat/dev-2669/data-plane/example`

**Subject:** `customer/a6afc5db-d0d8-421c-e177-370d58e1d4de/order/eaf3ce3b-cc3e-eadb-a893-514c267888ce/item/2fadbeaa-ab0c-2e03-379d-4d6e1ab4cfd4`

**Event ID:** `38261614-f4de-442d-aef6-aae0b53393d2`

**Timestamp:** 2025-10-29T17:14:24.585Z

## Related Schema Documentation

- [Event Schema](../nhs-notify-example-event.schema.md)
- [Event Schema (Bundled)](../nhs-notify-example-event.bundle.schema.md)
- [Event Schema (Flattened)](../nhs-notify-example-event.flattened.schema.md)

## Complete Event Instance

```json
{
  "type": "uk.nhs.notify.example.order.read.v1",
  "source": "/nhs/england/notify/uat/dev-2669/data-plane/example",
  "subject": "customer/a6afc5db-d0d8-421c-e177-370d58e1d4de/order/eaf3ce3b-cc3e-eadb-a893-514c267888ce/item/2fadbeaa-ab0c-2e03-379d-4d6e1ab4cfd4",
  "dataschema": "file://../data/nhs-notify-example-event-data.schema.json",
  "data": {
    "notify-payload": {
      "notify-data": {
        "nhsNumber": "9434765919"
      },
      "notify-metadata": {
        "teamResponsible": "Team 1",
        "notifyDomain": "Reporting",
        "microservice": "mh3WYNmt",
        "repositoryUrl": "https://VPWuMTMjtFtwMd.maOy3QOlQVRRu08rwAy2Tx7-",
        "accountId": "6mHF3mKzjC",
        "environment": "testing",
        "instance": "2W-1",
        "microserviceInstanceId": "AnjWihD",
        "microserviceVersion": "8.903195.533280036-0.19768of7eWb7.2.0.0.8260hF6UpI.1196990944zUYdsX.2334",
        "commitSha": "ec88879d672b73c278bf3f738f5010f",
        "buildTimestamp": "1910-08-05T18:05:54.0Z",
        "serviceTier": "critical",
        "region": "eu-west-2",
        "pseudonymisationLevel": "tokenised",
        "replayIndicator": true,
        "originalEventId": "9c4fc910-aac8-4dbd-990c-d8699daf5ee9",
        "integrityHash": "sha256:ec71de3c17433283dd4e065a1a3b4ccb5a4e5b35ee6848ea8ae071abddf11a0a",
        "producedByType": "vm"
      }
    }
  },
  "profileversion": "1.0.0",
  "profilepublished": "2025-10",
  "specversion": "1.0",
  "id": "38261614-f4de-442d-aef6-aae0b53393d2",
  "time": "2025-10-29T17:14:24.585Z",
  "datacontenttype": "application/json",
  "traceparent": "00-4d678967f96e353c07a0a31c1849b500-07f83ba58dd8df70-01",
  "tracestate": "ad",
  "partitionkey": "customer-a6afc5db",
  "recordedtime": "2025-10-29T17:14:25.585Z",
  "sampledrate": 1,
  "sequence": "00000000000544522433",
  "severitytext": "ERROR",
  "severitynumber": 4,
  "dataclassification": "restricted",
  "dataregulation": "NIST-800-53",
  "datacategory": "non-sensitive"
}
```
