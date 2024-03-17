//! HTTP REQUESTS
//! NOTE : use postman for the below API's to check the response and get better idea.   
//* Here in this code we wanna send call to an API. 
//* we are then getting its status code and put assertion on it to validate it is equal to 200. 

describe('Http Requests', ()=> {

    it('GET Call - Approach 1', ()=> {

        cy.request('GET', 'https://jsonplaceholder.typicode.com/posts')
        .its('status')
        .should('equal',200)
        //* 'cy.request' is used to send http request
        //* in first parameter we specify what type of call or methode we wanna send. in our case it is 'GET' call.
        //* in Second parameter we pass the URL which we wanna send request to.

    })

    it('GET Call - Approach 2', ()=> {

        cy.request({
            methode: 'GET',
            url: 'https://jsonplaceholder.typicode.com/posts'
        })
        .its('status').should('equal',200)    
        
        //* usually we write methode & url / (everything in methode call) in single quotes, but in cypress it is not required.
    })

    it('POST Call', ()=> {

        cy.request('GET', 'https://jsonplaceholder.typicode.com/posts')
        .its('status')
        .should('equal',200)


    })
})