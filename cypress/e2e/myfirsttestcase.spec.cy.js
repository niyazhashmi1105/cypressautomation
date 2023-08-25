describe('My First Test Suite',function(){
    it('Verify the Page title',function(){
       cy.visit('https://www.google.com')
       cy.title().should('eq','Google')
    })

    it('Verify the Page title - Negative',function(){
        cy.visit('https://www.google.com')
        cy.title().should('eq','Google123')
     })
})