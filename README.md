## Server API

### Get restaurant info
  * GET `/houses/:houseId`

**Path Parameters:**
  * `houseId` house id

**Success Status Code:** `200`

**Returns:** JSON

```json
    {
      "id": "Number",
      "userId": "Number",
      "review": "String",
      "houseId": "Number",
      "cleanRating": "Number",
      "accRating": "Number",
      "commRating": "Number",
      "locationRating": "Number",
      "checkInRating": "Number",
      "valueRating": "Number",
      "userName": "String",
      "userUrl": "String",
      "dateReviewed": "String",
      "reviewsId": "Number",
      "comment": "String"
    }
```

### Add restaurant

* POST `/reviews/houses`

**Success Status Code:** `201`

**Request Body**: Expects JSON with the following keys.

```json
    {
      "id": "Number",
      "houseName": "Number"
    }
```

* POST `/reviews/users`

**Success Status Code:** `201`

**Request Body**: Expects JSON with the following keys.

```json
    {
      "id": "Number",
      "userName": "String",
      "userUrl": "String",
      "dateReviewed": "String"
    }
```

* POST `/reviews`

**Success Status Code:** `201`

**Request Body**: Expects JSON with the following keys.

```json
    {
      "id": "Number",
      "userId": "Number",
      "review": "String",
      "houseId": "Number",
      "cleanRating": "Number",
      "accRating": "Number",
      "commRating": "Number",
      "locationRating": "Number",
      "checkInRating": "Number",
      "valueRating": "Number",
    }
```

* POST `/reviews/comments`

**Success Status Code:** `201`

**Request Body**: Expects JSON with the following keys.

```json
    {
      "id": "Number",
      "reviewsId": "Number",
      "comment": "String"
    }
```


### Update restaurant info
  * PUT `/reviews/comments`

**Success Status Code:** `204`

**Request Body**: Expects JSON with any of the following keys (include only keys to be updated)

```json
    {
      "reviewId": "Number",
      "comment": "String",
    }
```

### Delete restaurant
  * DELETE `/reviews/comments/:id`

**Path Parameters:**
  * `id` reviewId

**Success Status Code:** `204`


