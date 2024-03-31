//! Pre requisite : look at "OAuth.png" first. Then 'Readme.js"

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

    it('Get OAuth2 access Token', ()=> {

        cy.request({
            
            method: 'POST',
            url: 'https://github.com/login/oauth/access_token',
            qs: 
            {
                client_id : '9aad58815d36269fe258', 
                client_secret : 'ff8eb824ace0c029c1dd8d61e5b43fd38ace1c9c',
                code : ''
            }
        })
        .then( (response)=> {

            // access_token=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&scope=&token_type=bearer
            //! we need only value of access token, therefore we will write logic to split the string & extract the token

            
        })
    })
})
// Client ID 9aad58815d36269fe258
// Client Secret ff8eb824ace0c029c1dd8d61e5b43fd38ace1c9c
// https://github.com/login/oauth/authorize?client_id=9aad58815d36269fe258

// https://sunnah.com/?code=6ed27cf5389e2c6c4fb2
