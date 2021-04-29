## Server API


<!-- currently database does not reference any propertyId but will probably have to modify -->
### Get property info
  * GET `/api/properties/:propertyId`

**Path Parameters:**
  * `propertyId` property id

**Success Status Code:** `200`

**Returns:** JSON

```json
    [{
      "image": "String",
      "superhost": "Boolean",
      "wasLiked": "Boolean",
      "avgRating": "Number",
      "numberOfRatings": "Number",
      "typeOfRoom": "String",
      "description": "String",
      "price": "Number",
    },
    // x12
    ]
```

### Add a property => can also use querystring instead of body of request
  * POST `/api/properties/:propertyId`

**Path Parameters:**
  * `propertyId` property id

**Success Status Code:** `201`

**Request Body**: Expects JSON with the following keys.

```json
    {
      "propertyId": "Number",
      "image": "String",
      "superhost": "Boolean",
      "wasLiked": "Boolean",
      "avgRating": "Number",
      "numberOfRatings": "Number",
      "typeOfRoom": "String",
      "description": "String",
      "price": "Number",
      "listings": "Array",
    }
```


### Update single listing info => can also use querystring instead of body of request
  * PATCH `/api/properties/:propertyId`

**Path Parameters:**
  * `property` listing id

**Success Status Code:** `204`

**Request Body**: Expects JSON with any of the following keys (include only keys to be updated)

```json
    {
      "propertyId": "Number",
      "image": "String",
      "superhost": "Boolean",
      "wasLiked": "Boolean",
      "avgRating": "Number",
      "numberOfRatings": "Number",
      "typeOfRoom": "String",
      "description": "String",
      "price": "Number",
      "listings": "Array",
    }
```

### Delete single listing => can also use querystring instead of body of request
  * DELETE `/api/properties/:propertyId`

**Path Parameters:**
  * `propertyId` property id

**Success Status Code:** `204`
