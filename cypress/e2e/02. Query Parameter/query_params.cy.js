//! we can handle query parameter in cypress using 2 Approaches: Both will be in same test case
//* 1 : we can pass the query parameter in http request body
//* 2 : we can store the query in a variable and then pass it

//! https://reqres.in/api/users?page=2. (Here in this url after question mark. 'page=2' is a query parameter)
//* we will not hard code it in URL, instead we will try ways to pass it dynamically


describe('Query parameter', ()=> {

    //! For Approach 2
    const queryParam = {page : 2}
    
    it('Approach 1 & 2', ()=> {

        cy.request({

            method: "GET",
            url: "https://reqres.in/api/users",
            qs: {page : 2},                              //! 'qs': is a keyword used for query parameter.
            // qs: queryParam                               //! Approach 2: alternative of the above statement
            
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