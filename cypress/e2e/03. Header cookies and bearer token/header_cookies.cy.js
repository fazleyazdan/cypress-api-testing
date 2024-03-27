//! headers, cookies, bearer Token 
//* as part of the header we can pass token, sometimes cookies along with the request
//! so i will use an API, which by sending request to will generate token.
//! Note: the email should be different every time you hit the API. & the token will be generated.
//! that token will be used as bearer token to send other type of requests which belong to the same API.

//* after creating the token you can place order with it. by passing it as a bearer token in the request.
//* you can also view the placed order by following the url with the order ID.
//* first we will get token (POST) --> place an order (POST) --> view or get placed order (GET)

describe ('Header & cookies', ()=> {

    let authToken = null           //! for storing the access token returned in response

    //* before: this will execute one time: before execution of first test case in a test suit  
    before('generate access token', ()=> {

        cy.request({
            
            method: 'POST',
            url: 'https://simple-books-api.glitch.me/api-clients',  
            headers: {'Content-Type': 'application/json'},          //! most of the times the content in header is in JSON format
            body: 
                {
                    clientName: 'fy777',
                    clientEmail: 'abc7@gmail.com'                 //! mail must be different everytime you request
                    // clientEmail: Math.random.toString(5).substring(2)+ '@gmail.com'    
                }
        })
        .then( (response)=> {
                    authToken = response.body.accessToken   //! accessToken is a field name of token returned in response.

        })
    })

    
    before('place an order', ()=> {
        // cy.log(authToken)
        cy.request({
            
            method: 'POST',
            url: 'https://simple-books-api.glitch.me/orders',
            // failOnStatusCode: false,
            headers: {
                
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+ authToken       //! [Bearer a4c6d371533]. this is the actual format. Note: give space after bearer
                                                           //!  so in headers when sending request which includes token for auth, this is how it is sent in postman        
                    },          
            body: 
                {
                    bookId: '1',
                    customerName: 'fy7777' 
                }
        })
        .then( (response)=> {
                    expect(response.status).to.eq(201)
                    expect(response.body.created).to.eq(true)   //! created, is a field name returned in response

        })
    })

    //! you can generate multiple order with the same token. when fetching orders, all orders placed will be returned in response
    it('view or fetch orders placed', ()=> {

        cy.request({
            method: "GET",
            url: "https://simple-books-api.glitch.me/orders",
            headers: 
            {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+ authToken,

            },
            cookies: {'cookieName': 'mycookie'}    //! if there are cookies in request, this is the way to do it
        })
        .then( (response)=> {

            expect(response.status).equal(200),
            expect(response.body).has.length(1)
        })

        //! we could have used 'it blocks' instead of 'before', but since we cannot fetch order
        //! without the completion of the above tasks in before block. and since each test case is 
        //! separate from the other which cannot be used for this purpose. that's why we used 'before' block.
    })
})
