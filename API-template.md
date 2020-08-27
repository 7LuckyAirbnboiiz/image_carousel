## Server API


<!-- currently database does not reference any propertyId but will probably have to modify -->
### Get property info
  * GET `/api/properties/:propertyId/listings`

**Path Parameters:**
  * `id` property id

**Success Status Code:** `200`

**Returns:** JSON

```json
    {
      "image": "String",
      "superhost": "Boolean",
      "wasLiked": "Boolean",
      "avgRating": "Number",
      "numberOfRatings": "Number",
      "typeOfRoom": "String",
      "description": "String",
      "price": "Number",
    }
```

### Add a property => can also use querystring instead of body of request
  * POST `/api/properties/:propertyId/listings`

**Path Parameters:**
  * `id` property id

**Success Status Code:** `201`

**Request Body**: Expects JSON with the following keys.

```json
    {
      "image": "String",
      "superhost": "Boolean",
      "wasLiked": "Boolean",
      "avgRating": "Number",
      "numberOfRatings": "Number",
      "typeOfRoom": "String",
      "description": "String",
      "price": "Number",
    }
```


### Update single listing info => can also use querystring instead of body of request
  * PATCH `/api/properties/:propertyId/listings/:listingId`

**Path Parameters:**
  * `id` property id
  * `id` listing id

**Success Status Code:** `204`

**Request Body**: Expects JSON with any of the following keys (include only keys to be updated)

```json
    {
      "image": "String",
      "superhost": "Boolean",
      "wasLiked": "Boolean",
      "avgRating": "Number",
      "numberOfRatings": "Number",
      "typeOfRoom": "String",
      "description": "String",
      "price": "Number",
    }
```

### Delete single listing => can also use querystring instead of body of request
  * DELETE `/api/property/:propertyId/listings/:listingId`

**Path Parameters:**
  * `id` property id
  * `id` listing id

**Success Status Code:** `204`

<!-- example for specific change -->
### update single image of single listing
  * PATCH `/api/properties/:propertyId/listings/:listingId/image`

**Path Parameters:**
  * `id` property id
  * `listingId` listing id

**Success Status Code:** `201`

**Request Body**: Expects JSON with the following keys.

```json
    {
      "image": "String",
      "superhost": "Boolean",
      "wasLiked": "Boolean",
      "avgRating": "Number",
      "numberOfRatings": "Number",
      "typeOfRoom": "String",
      "description": "String",
      "price": "Number",
        }
```