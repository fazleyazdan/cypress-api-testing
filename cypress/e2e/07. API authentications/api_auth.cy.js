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


    //! same like Basic auth, but you have to specify 'method' field in Auth, set its value to "digest"
    it('Digest auth', ()=> {

        cy.request({

            method: "GET",
            url: "https://postman-echo.com/basic-auth",
            auth: {
                username: "postman",
                password: "password",
                method: "digest"    
            }
        })
        .then( (response)=> {

            expect(response.status).equal(200)
            expect(response.body.authenticated).to.be.true
        })
    })

    //! Bearer Token: For bearer Token we have to generate the Token First and then request other services of API
    //! i have already generated token so i will skip the part of generating it. for details look at '03. header cookies'
    //! also you have to pass bearer token in header.
    
    it('Bearer Token auth', ()=> {

        const bearerToken = "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"
        cy.request({

            method: "GET",
            url: "https://api.github.com/user/repos",
            headers: {
                Authorization: 'Bearer '+ bearerToken
            }
        })
        .then( (response)=> {

            expect(response.status).equal(200)
            expect(response.body[0].id).equal(757888148)

        })
    })
})

