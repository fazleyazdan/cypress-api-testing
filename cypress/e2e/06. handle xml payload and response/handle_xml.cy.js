//* in this task we will post request using XML format in the body.
//* the response to the request will be in XML format so we will parse it.
//! install library for parsing xml to json. npm install xml2js

//* we will make 2 calls. in first call we will post to add a pet. in response we will get ID and some other data.
//* in the second call we can get that pet by using the ID we got in the first API call.

const xml2js = require("xml2js")
const xml2jsParser = new xml2js({explicitArray: false})       //! make object of xml2js to parse the response

const xmlPayload = '<?xml version="1.0" encoding="UTF-8"?> <Pet> 	<id>0</id> 	<Category> 		<id>1</id> 		<name>string</name> 	</Category> 	<name>doggie</name>  	<photoUrls> 		<photoUrl>string</photoUrl> 	</photoUrls> 	<tags> 		<Tag> 			<id>1</id> 			<name>string</name> 		</Tag> 	</tags> 	<status>available</status> </Pet>'
const petId = null

describe('parsing XML response', ()=> {

    before('POST call adding pet', ()=> {

        cy.request({

            method: 'POST', 
            url: 'https://petstore.swagger.io/v2/pet',
            body: xmlPayload,
            headers: {
                'Content-Type': 'application/xml',        //! we have sent 2 type of headers, the first one is for sending payload in xml
                'accept': 'application/xml'               //! the second is for the response we are getting.
            }
        })
        .then( (response)=> {

            expect(response.status).to.eq(200)
        })
    })
})