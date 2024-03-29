//* in this task we will post request using XML format in the body.
//* the response to the request will be in XML format so we will parse it.
//! install library for parsing xml to json. npm install xml2js

//* we will make 2 calls. in first call we will post to add a pet. in response we will get ID and some other data. for that we will use 'before' hook
//* in the second call we can get that pet by using the ID we got in the first API call.

const xml2js = require("xml2js")
const xmlParser = new xml2js.Parser({explicitArray: false})       //! make object of xml2js to parse the response

const xmlPayload = '<?xml version="1.0" encoding="UTF-8"?> <Pet> 	<id>0</id> 	<Category> 		<id>1</id> 		<name>string</name> 	</Category> 	<name>doggie</name>  	<photoUrls> 		<photoUrl>string</photoUrl> 	</photoUrls> 	<tags> 		<Tag> 			<id>1</id> 			<name>string</name> 		</Tag> 	</tags> 	<status>available</status> </Pet>'
let petId = null

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

            //! here 'ParseString' is method of the obj 'xmlParser'. it is used to convert xml to json.
            //! if in that process any error occur, it will be stored in 'err'. and the parsed response will be stored in 'result'
            xmlParser.parseString(response.body,(err, result)=> {

                petId = result.Pet.id
            })
        })
    })

    it('fetching pet data-parsed xml response', ()=> {

        cy.request({

            method: "GET", 
            url: "https://petstore.swagger.io/v2/pet/"+ petId,
            headers: {"accept": "application/xml"}             //! here we are not sending payload so we don't need "Content-Type". we are getting response body so we are using accept only
            //* since it is a get request , we don't need to use body and pass anything in it.
        })
        .then( (response)=>{
            
            expect(response.status).equal(200)
            xmlParser.parseString(response.body,(err, result)=> {

            expect(result.Pet.id).to.eq(petId)
            expect(result.Pet.name).equal("doggie")
            })
            
        })
    })
})