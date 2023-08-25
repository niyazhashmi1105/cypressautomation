
describe('GET Request',()=>{

    it('GET Call',()=>{
    cy.request('GET','https://jsonplaceholder.typicode.com/posts/1')
    .its('status')
    .should('equal',200)
})

it('POST Call',()=>{
    cy.request({
                method: 'POST',
                url : 'https://jsonplaceholder.typicode.com/posts',
                body: {
                            userId: 1,
                            title: "Test Post request call",
                            body: "This is post call"
                }
    })
        .its('status')
        .should('equal',201)
})

it('PUT Call',()=>{
    cy.request({
                method: 'PUT',
                url : 'https://jsonplaceholder.typicode.com/posts/1',
                body: {
                    
                        userId: 1,
                        title: "Test PUT request call",
                        body: "This is PUT call",
                        id: 101
                    
                }
    })
        .its('status')
        .should('equal',200)
})

it('DELETE Call',()=>{
    cy.request({
                method: 'DELETE',
                url : 'https://jsonplaceholder.typicode.com/posts/1',
                
    })
        .its('status')
        .should('equal',200)
})
})