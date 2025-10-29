# uk.nhs.notify.example.order.read.v1

**Event Type:** `uk.nhs.notify.example.order.read.v1`

**Source:** `/nhs/england/notify/development/primary/data-plane/example`

**Subject:** `customer/010013e6-ccd7-bbec-ccd8-f70c0bd320bc/order/0f2d0e49-ad89-a0a8-cad2-cdc21da2d22b/item/ef6f65a5-05cd-cc60-f5d4-f76d1d234f6f`

**Event ID:** `e5968293-49d5-4ca9-9f9a-e5aa22ca736a`

**Timestamp:** 2025-10-29T16:25:26.843Z

## Related Schema Documentation

- [Event Schema](../nhs-notify-example-event.schema.md)
- [Event Schema (Bundled)](../nhs-notify-example-event.bundle.schema.md)
- [Event Schema (Flattened)](../nhs-notify-example-event.flattened.schema.md)

## Complete Event Instance

```json
{
  "type": "uk.nhs.notify.example.order.read.v1",
  "source": "/nhs/england/notify/development/primary/data-plane/example",
  "subject": "customer/010013e6-ccd7-bbec-ccd8-f70c0bd320bc/order/0f2d0e49-ad89-a0a8-cad2-cdc21da2d22b/item/ef6f65a5-05cd-cc60-f5d4-f76d1d234f6f",
  "dataschema": "file://../data/nhs-notify-example-event-data.schema.json",
  "specversion": "1.0",
  "id": "e5968293-49d5-4ca9-9f9a-e5aa22ca736a",
  "time": "2025-10-29T16:25:26.843Z",
  "datacontenttype": "application/json",
  "traceparent": "00-b536fe57ea93540baae22147242b83de-2f0c3255abc64697-01",
  "tracestate": "aliquip in cillum Duis laborum",
  "partitionkey": "customer-010013e6",
  "recordedtime": "2025-10-29T16:25:27.843Z",
  "sampledrate": 1,
  "sequence": "00000000000105734347",
  "severitytext": "WARN",
  "severitynumber": 3,
  "dataclassification": "internal",
  "dataregulation": "PCI-DSS",
  "datacategory": "special-category",
  "data": {
    "weather": {
      "id": "[",
      "dateCreated": "1904-03-28T17:50:23.0Z",
      "dateModified": "1963-03-25T18:45:52.0Z",
      "source": "irure sed amet Ut",
      "name": "nisi deserunt esse labore proident",
      "alternateName": "deserunt id",
      "description": "sunt minim",
      "dataProvider": "elit dolor labore pariatur nostrud",
      "owner": [
        "http://cAQVHnr.iezuNLbjLo8HYEdvOD363GCzQza068YvXuK0zTGaW8JV5L9yxQ0wcwjt",
        "HPd|V2E",
        "~32",
        "https://fqWoiLduTKnGsvgVAxzEbbaiHslcf.pujiF,juxwV6qVZ"
      ],
      "seeAlso": [
        "https://oZgQNPupDjwvHoLsZZYNhDJW.npi89dilhyZeL3XPz,EaQflGkrzS,z,VFY.IwiJGFCG13XmaDH-EpblCotRFLl",
        "http://wqNtlhnaWNxAfxowbsUbvFsPok.gopz7Ss1zuaAT+Dx2nrFXbUEIAufbI065BNUzcyKqC98PraRU"
      ],
      "location": {
        "type": "MultiPolygon",
        "coordinates": [
          [
            [
              [
                81879458.59046647,
                -20969427.466636643,
                -8979370.435322225,
                -28136675.587581724,
                -77481098.12986495
              ],
              [
                92533456.6594963,
                -68094413.22808537,
                10102637.325166449,
                -59208737.30844232
              ],
              [
                -36727751.584652446,
                -86599937.9049242
              ],
              [
                60762468.9207688,
                -57377206.004168294,
                -83066679.64032184
              ]
            ],
            [
              [
                -57848373.34773812,
                -40726059.335058615
              ],
              [
                39780318.416820526,
                -9635608.924207866,
                74930289.26288182,
                -35747218.27253973
              ],
              [
                -44526801.22343331,
                43594801.20933613,
                32816633.0980639,
                -31377904.666297123
              ],
              [
                -32093201.20710437,
                36362443.36657509,
                45972496.524594575,
                37601915.415901184
              ]
            ],
            [
              [
                -93158929.18162459,
                74401142.57226533,
                -97854093.71646267,
                61962987.74613279,
                -30513892.59110184
              ],
              [
                39501879.23983002,
                31487800.747461602
              ],
              [
                -8772228.089408457,
                -99125963.51618992,
                25548168.030317813,
                88861949.7490716,
                -49616287.51470419
              ],
              [
                50197104.32734075,
                -91007818.6170502,
                -19576986.394716054,
                -53693739.49139125
              ],
              [
                89932171.7746273,
                -11689402.920007288,
                -22104099.240902647
              ]
            ],
            [
              [
                -62061596.490767635,
                -74657747.28507611
              ],
              [
                95943230.78140238,
                89699789.70498526,
                -8521974.362521708,
                -74514588.0296662,
                1826425.6297169775
              ],
              [
                -74934235.84781879,
                67994142.73534924,
                -53140025.12942788,
                -8111772.552784994,
                96031682.6172671
              ],
              [
                65684080.482776284,
                48488695.09335056
              ],
              [
                29077086.971299917,
                -20239860.93482697,
                -76739028.19862872
              ]
            ],
            [
              [
                -30715199.592314303,
                -14560960.67357248
              ],
              [
                12548140.378271475,
                34690282.34091437,
                -79660006.76330252,
                36526157.77062139,
                -81168993.11309083
              ],
              [
                -57552202.98800401,
                -95507604.60810368,
                -49518002.28711381,
                -80641547.06857556
              ],
              [
                53145366.86298123,
                -83359952.07990125,
                -2626903.5495944917,
                21944784.18432799,
                -90733720.78936885
              ]
            ]
          ],
          [
            [
              [
                -6157550.750884429,
                -84945267.43290116
              ],
              [
                3681609.927949056,
                -29654177.94465007,
                57062699.61907816
              ],
              [
                45082472.34199056,
                -46094596.65314832,
                -93502665.58091922,
                -67819252.08691525
              ],
              [
                -92835341.08594178,
                -86787899.34234543,
                -69864362.54220948,
                -97628350.04851176
              ],
              [
                59572210.94757542,
                -87503584.04526389,
                84041861.46107632
              ]
            ]
          ]
        ],
        "bbox": [
          -87734843.39555673,
          88202081.32928619,
          32848699.890982464,
          33202622.884043083,
          89441417.3468714
        ]
      },
      "address": {
        "streetAddress": "consequat nostrud in",
        "addressLocality": "ipsum culpa fugiat",
        "addressRegion": "in nostrud laborum",
        "addressCountry": "dolor in exercitation",
        "postalCode": "tempor deserunt quis",
        "postOfficeBoxNumber": "Ut labore nulla",
        "streetNr": "ad pariatur Excepteur",
        "district": "officia in veniam ut"
      },
      "areaServed": "occaecat aute",
      "weatherType": "sit reprehenderit",
      "visibility": "veryGood",
      "windDirection": 120.30457289456783,
      "windSpeed": 26911352.065764483,
      "gustSpeed": 39691797.23877293,
      "refPointOfInterest": "pariatur Lorem",
      "atmosphericPressure": 1499093.5514764492,
      "illuminance": 51894898.82097404,
      "temperature": -4600763.593206823,
      "feelsLikeTemperature": 36566670.24330515,
      "relativeHumidity": 0.7889564173149717,
      "type": "WeatherForecast",
      "dateRetrieved": "1922-04-19T09:19:01.0Z",
      "dateIssued": "1935-09-23T06:16:15.0Z",
      "validity": "in occaecat",
      "validFrom": "1961-06-16T23:17:19.0Z",
      "validTo": "1916-08-21T06:16:08.0Z",
      "dayMaximum": {
        "temperature": -51867396.32428654,
        "feelLikesTemperature": -54639013.852902174,
        "relativeHumidity": 0.6859825440032715
      },
      "dayMinimum": {
        "temperature": -57653473.249090515,
        "feelLikesTemperature": 34461086.91721904,
        "relativeHumidity": 0.085406251232225
      },
      "uVIndexMax": 8160766.081252191,
      "precipitation": 40814321.174730174,
      "precipitationProbability": 54863929.04632441
    },
    "nhsNumber": "9434765919"
  }
}
```
