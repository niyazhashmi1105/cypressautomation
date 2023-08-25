describe('POST Call Approaches',()=>{

it('Approach-1 Hardcoded data',()=>{

    let requestBody = {
                        userId: 1,
                        title: "Test Post request call",
                        body: "This is post call"
                     }

    cy.request({
                    method : 'POST',
                    url : 'https://jsonplaceholder.typicode.com/posts',
                    body: requestBody
                })
    .then((response)=>{
                        expect(response.status).to.equal(201)
                        expect(response.body.userId).to.equal(1)
                        expect(response.body.title).to.equal('Test Post request call')
                        expect(response.body.body).to.equal('This is post call')
    })

})

it('Approach-2 Dynamically generate data',()=>{

    var requestBody = {
                        userId: Math.random().toString(5).substring(1),
                        title: Math.random().toString(5).substring(2),
                        body: Math.random().toString(5).substring(2)
                     }

    cy.request({
                    method : 'POST',
                    url : 'https://jsonplaceholder.typicode.com/posts',
                    body: requestBody
                })
    .then((response)=>{
                        expect(response.status).to.equal(201)
                        expect(response.body.userId).to.equal(requestBody.userId)
                        expect(response.body.title).to.equal(requestBody.title)
                        expect(response.body.body).to.equal(requestBody.body)
    })

})

it('Approach-3 Using Fixture',()=>{

        cy.fixture('requestbody').then((data)=>{
                var requestBody = data

                cy.request({
                    method : 'POST',
                    url : 'https://jsonplaceholder.typicode.com/posts',
                    body: requestBody
                })
    .then((response)=>{
                        expect(response.status).to.equal(201)
                        expect(response.body.userId).to.equal(requestBody.userId)
                        expect(response.body.title).to.equal(requestBody.title)
                        expect(response.body.body).to.equal(requestBody.body)

                        expect(response.body).has.property('userId',requestBody.userId)
                        expect(response.body).to.have.property('body',requestBody.body)
    })


        })

    
})


})