#### Schema for the API "https://fakestoreapi.com/products"

#### we will use ajv library to validate JSON response: ajv is a popular JSON Schema validator for JavaScript. JSON Schema is a vocabulary that allows you to annotate and validate JSON documents. Ajv is commonly used in API testing to validate JSON responses against predefined schemas.

#### Note : you can generate Schema from API Response by online tools. "https://transform.tools/json-to-json-schema"
 
#### Below **Schema** is written for this API response

``` json
{
        "id": 1,      
        "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        "price": 109.95,
        
        "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        
        "rating": {
            "rate": 3.9,
            "count": 120
        }
}
```

### Schema

``` json
 var schema = {
"$schema": "http://json-schema.org/draft-07/schema#",
"title": "Generated schema for Root",
"type": "array",

"items": {
"type": "object",
"properties": {

"id": {
"type": "number"
},

"title": {
"'type": "number"
},

"price": {
"type": "number"
},

"description": {
"type": "string"
},

"category": {
"type": "string"
},

"image": {
"type": "string"
},

"rating": {
"type": "object",
"properties": {
    "rate": {
        "type": "number"
    },
    "count": {
        "type": "number"
    }
},

"required": [
"rate" ,
"count"
]
}
},

"required": [
"id" ,
"title",
"price",
"description",
"category",
"image",
"rating"
    ]
}

}

// Note the below code is not part of the schema and are meant for validating the schema in postman
const jsonData = pm.response.json();

pm.test('schema is valid', function () {
    pm.expect(tv4.validate(jsonData,schema)).to.be.true;
});
```

#### use this schema for the above API in ** Tests ** section in Postman. run it and the test should be pass
#### pm --> postman

