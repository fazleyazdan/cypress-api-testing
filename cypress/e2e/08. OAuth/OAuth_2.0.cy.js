//! Pre requisite : look at "OAuth.png" first. Then 'Readme.js"

//* generate new 'Auth code' by clicking 'https://github.com/login/oauth/authorize?client_id=9aad58815d36269fe258'

/*
    1. Get OAuth2 Access Token
    POST. https://github.com/login/oauth/access_token
    Query Params:
             ------
             client_id
             client_secret
             code

    2. Send GET request by using access Token
    GET. https://api.github.com/user/repos
    Auth : accessToken 

*/

describe("OAuth2.0 authentication", ()=> {


    let accessToken = ''
    it('Get OAuth2 access Token', ()=> {

        cy.request({
            
            method: 'POST',
            url: 'https://github.com/login/oauth/access_token',
            qs: 
            {
                client_id : '9aad58815d36269fe258', 
                client_secret : 'ff8eb824ace0c029c1dd8d61e5b43fd38ace1c9c',
                code : '405cec0a238f5127856c'
            }
        })
        .then( (response)=> {

            // access_token=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&scope=&token_type=bearer
            //! we need only value of access token, therefore we will write logic to split the string & extract the token
            //* we will split the string based on '&' character. so we will have two parts of string. one after, one before '&'

            const splitString = response.body.split('&')
            accessToken = splitString[0].split('=')[1]
            cy.log(accessToken)

        })

    })

    it('request resources using OAuth 2', ()=> {

         cy.request({

            method: 'GET', 
            url: 'https://api.github.com/user/repos',
            headers: 
            {
                Authorization: 'Bearer '+accessToken
            }

         })
         .then( (response)=> {

            expect(response.status).to.eq(200)
            expect(response.body[0].id).equal(757888148)
            expect(response.body[0].name).equal('awesome-sites-to-test-on')

         })
    })
})
// Client ID 9aad58815d36269fe258
// Client Secret ff8eb824ace0c029c1dd8d61e5b43fd38ace1c9c
// https://github.com/login/oauth/authorize?client_id=9aad58815d36269fe258

// https://sunnah.com/?code=6ed27cf5389e2c6c4fb2
