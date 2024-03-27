//* sometimes the response is complex, objects contains nested objects etc
//* paste JSON response 'https://jsonpathfinder.com/'. to find paths of the object you wanna work with.
//* by path i meant. i.e. (response.body[0].id) 

describe('Parsing JSON response', ()=> {

    it('simple Json Response', ()=> {

        cy.request({

            method: 'GET',
            url: 'https://fakestoreapi.com/products',
        })
        .then( (resonse)=> {

            //! validations on first object in JSON response
            expect(resonse.status).equal(200)
            expect(resonse.body[0].id).equal(1)
            expect(resonse.body[0].title).equal("Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops")
            expect(resonse.body[0].price).equal(109.95)
            expect(resonse.body[0].rating.rate).equal(3.9)      //! nested object in the first object
            
            //! validations on 20th object in JSON response
            expect(resonse.body[19].id).equal(20)
            expect(resonse.body[19].price).equal(12.99)
            expect(resonse.body[19].rating.rate).equal(3.6)
        })
    })

    
    //* suppose in response there are 50 objects, and i want to only captures id or title of them.
    //* after parsing it store it somewhere and then apply assertions on them
    //* now parsing this kind of response is complex which is possible through iteration

    it('complex Json Response', ()=> {

        let totalPrice = 0
        cy.request({

            method: 'GET',
            url: 'https://fakestoreapi.com/products',
            qs: {limit:5}                           //! return in response first 5 objects only
        })
        .then( (resonse)=> {
            
            //* in response i will capture the price of the objects by using foreach loop.
            //* i will add the the price of those objects and the apply assertion on it.
            
            expect(resonse.status).equal(200)
            resonse.body.forEach( element => {
               totalPrice = totalPrice + element.price
            })
            
            expect(totalPrice).equal(899.23)    // limit = 5
            // expect(totalPrice).equal(188.24)    // limit = 3 . PS change the query parameter limit to 3

        })
    })
})