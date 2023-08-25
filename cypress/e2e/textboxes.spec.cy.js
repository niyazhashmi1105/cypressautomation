describe('UI Elements Interactions Test Suite',()=>{

it('Handling Textboxes Test Case', () =>{

cy.visit('https://demo.guru99.com/test/newtours/index.php')
cy.url().should('include','newtours')

cy.get('[name=userName]')
    .should('be.visible')
        .should('be.enabled')
            .type('mercury')

cy.get('[name=password]')
    .should('be.visible')
        .should('be.enabled')
            .type('mercury')

cy.get('[name=submit]').should('be.visible').click()

cy.title().should('eq','Login: Mercury Tours')

})

})