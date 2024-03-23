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
    
    it('Approach 1 - Hard coded JSON object', ()=> {

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

    //* in this approach we will dynamically generate JSON object.
    //* for this purpose we will use Javascript function to work for us.

    it('Approach 2 - dynamically generating JSON object', ()=> {

        const requestBody = {
                        
                            email: Math.random().toString(5).substring(2)+"@gmail.com",    //! Here we are concatinating gmail with random string
                            first_name: Math.random().toString(5).substring(2),   
                            last_name: Math.random().toString(5).substring(2)

                            //! Math.random generate random number, we then convert it to string & should contain 5 characters
                            //! this will randomly generate data for us when requesting
                          }

        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/users',
            body: requestBody
        
        }).then( (response)=>{

            expect(response.status).to.eq(201)                    
            expect(response.body.email).to.eq(requestBody.email)
            expect(response.body.first_name).to.eq(requestBody.first_name)
            expect(response.body.last_name).to.eq(requestBody.last_name)


        })

    })

})