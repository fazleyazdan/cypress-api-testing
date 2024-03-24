//* https://reqres.in/api/users?page=2. (Here in this url after question mark. 'page=2' is a query parameter)
//* we cannot hard code it in URL, instead we will try ways to pass it dynamically

//! we can handle query parameter in cypress using 2 Approaches
//* 1 : we can pass the query parameter in http request body
//* 2 : we can store the query in a variable and then pass it

describe('Approach 1 - Query parameter', ()=> {

    it('GET method - Approach 1', ()=> {

        cy.request({

            method: "GET",
            url: "https://reqres.in/api/users",
            qs: {page : 2}                              //! 'qs': used for query parameter
        
        }).then( (response)=>{
            
           expect(response.status).to.eq(200)           //! or
           expect(response.status).equal(200)        

        //* Validate wether page in response is 2
           expect(response.body.page).equal(2)
           
        //! response is in JSON formate. in response we have a member called data. validate its length
        //! Note : use postman in parallel, to know more about response and what it contains. 
        //! For example: here how i know 'data' length is 6. because i count it's body records and then applied assertion.

        //* Validate length of data body
           expect(response.body.data).have.length(6)
        
        //* Validate id of first record inside data body
           expect(response.body.data[0]).have.property('id', 7)

        //* Validate name of first record inside data body
           expect(response.body.data[0]).have.property('first_name', 'Michael')    


        })
    
    })

})