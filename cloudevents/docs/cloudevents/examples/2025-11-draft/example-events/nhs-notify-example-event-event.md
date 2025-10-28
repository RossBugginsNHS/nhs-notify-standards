# uk.nhs.notify.example.order.read.v1

**Event Type:** `uk.nhs.notify.example.order.read.v1`

**Source:** `/nhs/england/notify/uat/dev-392214695/data-plane/example`

**Subject:** `customer/f1acabe9-9efd-fdac-3afe-9aa6dffe7b97/order/5d0fcf3a-d3d4-cabf-a3ea-fdc7f80a0c4e/item/a4f3e5ee-d47e-fbdc-f0cd-dffbf435ffee`

**Event ID:** `f592cb44-204f-4971-a75b-f75f4e9265c9`

**Timestamp:** 2025-10-28T16:21:15.475Z

## Related Schema Documentation

- [Event Schema](../nhs-notify-example-event.schema.md)
- [Event Schema (Bundled)](../nhs-notify-example-event.bundle.schema.md)
- [Event Schema (Flattened)](../nhs-notify-example-event.flattened.schema.md)

## Complete Event Instance

```json
{
  "type": "uk.nhs.notify.example.order.read.v1",
  "source": "/nhs/england/notify/uat/dev-392214695/data-plane/example",
  "subject": "customer/f1acabe9-9efd-fdac-3afe-9aa6dffe7b97/order/5d0fcf3a-d3d4-cabf-a3ea-fdc7f80a0c4e/item/a4f3e5ee-d47e-fbdc-f0cd-dffbf435ffee",
  "dataschema": "../data/nhs-notify-example-event-data.schema.json",
  "data": {
    "weather": {
      "id": "l^6:21`V4Vi",
      "dateCreated": "1923-09-21T08:49:59.0Z",
      "dateModified": "1968-06-27T01:12:18.0Z",
      "source": "laboris consequat commodo fugiat dolore",
      "name": "commodo sint",
      "alternateName": "in",
      "description": "eu in",
      "dataProvider": "in mollit minim labore",
      "owner": [
        "$X@O",
        "http://PNyZXNiCXNegLmBzENgL.sykgY.VnFu+Ux,zFAYx6wJHEQWxWJBWPVvL38BgXFhd1nDNzKurMDW,C"
      ],
      "seeAlso": [
        "http://nyLsknqMZdkXOfJpqUbXDEcW.igpeT1hz1lY,LWpBnS,LiJZ8FrYaQgFaNnaurCWlwiRFExb,iaKrbxJ,C-Nzj5h8EMfD"
      ],
      "location": {
        "type": "MultiPolygon",
        "coordinates": [
          [
            [
              [
                -66716282.78676005,
                32566135.943738565
              ],
              [
                72254137.41610426,
                73670610.30919504,
                -44749468.142934345
              ],
              [
                -96393041.77786867,
                39756137.07234952,
                75942214.51227316,
                82137435.2050362
              ],
              [
                30609114.874019757,
                40162302.37367043
              ]
            ],
            [
              [
                -41920182.883059435,
                68236633.41107234,
                -26891428.17829597
              ],
              [
                -26065348.766554147,
                43252107.72811988
              ],
              [
                9389013.436649367,
                41050500.419424474,
                3821485.9013792723,
                39816653.97016612,
                -92034858.82563722
              ],
              [
                30995537.877574414,
                -28780906.94115168,
                -10060344.673320428,
                -35785425.26529504
              ]
            ],
            [
              [
                39973210.710149586,
                -55590456.586762495,
                67691001.04822347,
                -90827229.08308516,
                -82092242.31935307
              ],
              [
                -22440570.564070866,
                -11376353.369547829
              ],
              [
                -48430576.17488982,
                -29381102.036213607,
                5040588.796551466
              ],
              [
                28137912.97945571,
                -3581729.430035591,
                4761990.295962274,
                -16522798.71793814
              ],
              [
                10428461.987335846,
                -56971883.285256974,
                -84977705.87076047,
                -81114548.81526864
              ]
            ]
          ]
        ],
        "bbox": [
          51247603.45174649,
          -29956888.266071394,
          -9802915.593579993,
          -96149559.48423056,
          -6950163.792918906
        ]
      },
      "address": {
        "streetAddress": "commodo ex dolor eiusmod",
        "addressLocality": "id",
        "addressRegion": "Lorem esse Ut consequat nulla",
        "addressCountry": "ut",
        "postalCode": "pariatur occaecat dolore",
        "postOfficeBoxNumber": "labore occaecat mollit dolore adipisicing",
        "streetNr": "dolor cillum ullamco aute quis",
        "district": "nostrud qui sed labore anim"
      },
      "areaServed": "aliqua ipsum",
      "weatherType": "tempor amet labore officia exercitation",
      "visibility": "excellent",
      "windDirection": 58.20503087004438,
      "windSpeed": 73844104.15677571,
      "gustSpeed": -79788528.59553057,
      "refPointOfInterest": "incididunt",
      "atmosphericPressure": 35997009.456473604,
      "illuminance": 84481323.36706206,
      "temperature": 72714718.56575525,
      "feelsLikeTemperature": 73434754.52275571,
      "relativeHumidity": 0.9635293438439779,
      "type": "WeatherForecast",
      "dateRetrieved": "1950-12-13T02:22:49.0Z",
      "dateIssued": "1926-04-02T04:45:34.0Z",
      "validity": "in",
      "validFrom": "1931-12-12T19:18:01.0Z",
      "validTo": "1941-08-19T15:16:12.0Z",
      "dayMaximum": {
        "temperature": -90561617.31967354,
        "feelLikesTemperature": 29778930.680190995,
        "relativeHumidity": 0.664132237459782
      },
      "dayMinimum": {
        "temperature": -10092072.394502982,
        "feelLikesTemperature": -19271164.86109808,
        "relativeHumidity": 0.6707303225790564
      },
      "uVIndexMax": 51795640.9824238,
      "precipitation": 10821964.805733008,
      "precipitationProbability": 51893032.8988655
    },
    "nhsNumber": "9434765919"
  },
  "specversion": "1.0",
  "id": "f592cb44-204f-4971-a75b-f75f4e9265c9",
  "time": "2025-10-28T16:21:15.475Z",
  "datacontenttype": "application/json",
  "traceparent": "00-29d761bb8920674913cd7688735032e5-6125310527b26563-01",
  "tracestate": "adipisicing ut do id",
  "partitionkey": "customer-f1acabe9",
  "recordedtime": "2025-10-28T16:21:16.475Z",
  "sampledrate": 1,
  "sequence": "00000000000502967131",
  "severitytext": "ERROR",
  "severitynumber": 4,
  "dataclassification": "internal",
  "dataregulation": "PCI-DSS",
  "datacategory": "sensitive"
}
```
