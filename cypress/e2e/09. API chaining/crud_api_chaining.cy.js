//! most of the times, you will create a user via 'post' request...
//! Then you may update the user via 'put' request...
//! The chances are you can delete the user as well.

//* in the below example we will create a user and in response we will get id.
//* through that id we will update & delete the user.
//* we will use Go Rest API & here in this example we won't be returning anything...
//! Note : we can also do request inside the response of a an API. when we need the response resources for next API call


// POST :   https://gorest.co.in/public/v2/users
// PUT :    https://gorest.co.in/public/v2/users/${userId}
// DELETE : https://gorest.co.in/public/v2/users/${userId}

describe('CRUD - API chaining', ()=> {

    const auth_token = 'Bearer 0b05da30bd253535a4888c19ccea0552a4714716b1d6a897d41885496951fcf1'

    it('create, update, delete in Go rest API', ()=> {

        cy.request({

            method: 'POST', 
            url: 'https://gorest.co.in/public/v2/users',
            body: 
            {
                name : 'Fazle yazdan',
                gender : 'male',
                // email : Math.random.toString(5).substring(2)+"@gmail.com",
                email :"fazleyazdan@gmail.com",

                status: 'active'
            },
            headers: { Authorization : auth_token }
        })
        .then( (response)=> {

            expect(response.status).equal(201)
            const userId = response.body.id

            cy.request({

                method : 'PUT', 
                url: `https://gorest.co.in/public/v2/users/${userId}`,
                body:                                               //! Specify what you wanna update 
                {
                    name : 'fazliyazdan7'
                },
                headers : { Authorization: auth_token }
            })
            .then( (response)=> {

                expect(response.status).equal(200)
                expect(response.body.name).equal('fazliyazdan7')

                cy.request({                                   //! DELETE Call

                    method: 'DELETE',
                    url: `https://gorest.co.in/public/v2/users/${userId}`,
                    headers : { Authorization: auth_token }
                })
                .then( (response)=> {

                    expect(response.status).equal(204)
                })
            })
        })
    })


})