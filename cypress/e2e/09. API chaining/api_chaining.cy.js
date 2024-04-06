//! we send request to api 'A'. and it gives us response.
//! now we use we response of api 'A' in a request call to another api 'B' and so on.
//! so Response of one API becomes request for another API, this is called API Chaining.


describe('API chaining JSON placeholder', ()=> {

    it('Get all posts', ()=> {

        cy.request({

            method: 'GET',
            url: 'https://jsonplaceholder.typicode.com/posts'
        })
        .then( (response)=> {
            
            expect(response.status).to.eq(200)
            const postid = response.body[0].id
            return postid                 //! sometimes without returning anything, we can do next call. see 'crud_api_chaining'
        })
        .then( (postid)=> {

            cy.request({

                method: 'GET',
                url: `https://jsonplaceholder.typicode.com/comments?postId=${postid}`
            })
            .then( (response)=> {

                expect(response.status).to.equal(200)
                expect(response.body).to.has.length(5)
            })
        })
    })
})