//* APIs will support different types of authentications like
//* Basic , Digest, Bearer Token & API key, OAuth 1, OAuth 2 .

//* Basic Auth : we have to send 'username' & 'password' in Authorization when making call to the API

describe('APIs Authentications', ()=> {

    it('basic auth', ()=> {

        cy.request({

            method: "GET",
            url: "https://postman-echo.com/basic-auth",
            auth: {
                username: "postman",
                password: "password"
                }
        })
        .then( (response)=> {

            expect(response.status).equal(200)
            expect(response.body.authenticated).to.be.true
        })
    })
})

