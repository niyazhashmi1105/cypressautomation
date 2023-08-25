describe('Query Params',()=>{

    it('Query Params test',()=>{

        cy.request({

                        method: 'GET',
                        url : "https://jsonplaceholder.typicode.com/comments?",
                        qs : {postId:1}
        })
                        .then((response)=>{
                            expect(response.status).equal(200)
                            expect(response.body).has.length(5)
                            expect(response.body[0]).has.property('postId',1)
                            expect(response.body[2]).have.property('email','Nikita@garfield.biz')

                        })

        


    })


})