//! There are 3 different ways in which we can create a post request body
//* 1: we can hard code the data as part of the post request
//* 2: we can dynamically or randomly generate the data
//* 3: By using fixture concept in cypress

//* we will use this api "https://reqres.in/api/users" to create a new record.
/*     {
        "email": "janet.weaver@reqres.in",
        "first_name": "Janet",
        "last_name": "Weaver"
        }        */ 
   
//* we will send request like this but we have to change the name in order to create a new record.
//! in order to validate the response we will capture it using 'then()'.

describe('Post Request', ()=> {
    
    it('Approach 1 - Hard coded data', ()=> {

        const requestBody = {
                        
                            email: "abc@gmail.com",
                            first_name: "fazle",
                            last_name: "yazdan"
                        
                          }

        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/users',
            body: requestBody
        
        }).then( (response)=>{

            expect(response.status).to.eq(201)                    //! Validate reponse code
            expect(response.body.email).to.eq('abc@gmail.com')
            expect(response.body.first_name).to.eq('fazle')
            expect(response.body.last_name).to.eq('yazdan')


        })

    })

})