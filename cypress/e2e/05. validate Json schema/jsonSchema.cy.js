//* what type of data we have to store in JSON body, that is dictated by the schema
//* in other words, JSON Schema provides a format for JSON data
//* before validating schema it is better to test it in postman first.
//! Note : you can generate Schema from API Response by online tools. "https://transform.tools/json-to-json-schema"

//! Pre requisite: install ajv library using npm 

const ajv = require('ajv')                  //! import the package
const avj = new ajv()                       //! make instance of the object

describe('JSON schema', ()=> {

    it('schema validation against API response', ()=> {

        cy.request({

            method: 'GET', 
            url: 'https://fakestoreapi.com/products'
        })
        .then( (response)=>{

            const schema =
            {
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
                      "type": "string"
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
                        "rate",
                        "count"
                      ]
                    }
                  },
                  "required": [
                    "id",
                    "title",
                    "price",
                    "description",
                    "category",
                    "image",
                    "rating"
                  ]
                }
              }                                     //! Schema Ends Here

              const validate = avj.compile(schema)              //* .compile(schema): This part of the code is calling the compile() method of Ajv, which compiles the provided JSON schema (schema) into a validation function. This validation function can then be used to validate JSON data against the schema.
              const isValid = validate(response.body)                //* Return True if Schema is same as Response we are getting
              expect(isValid).equal(true)                       //* Assertion 
              expect(isValid).to.be.true                        //* alternate to above statement
        })
    })
})