
describe('Dropdown Interactions ', ()=>{
    
    it('Dropdown Test Case', () =>{
    
        cy.visit('https://demo.automationtesting.in/Register.html')
      
        cy.get('#Skills').select('Analytics').should('have.value','Analytics')

        //cy.get('#msdd').should('be.enabled').click()
        //cy.get('.ui-corner-all').contains('Arabic').click()
        //cy.get('.ui-corner-all').contains('English').click()
        //cy.get('.ui-corner-all').contains('Hindi').click()
        //cy.get('.ui-corner-all').contains('Urdu').click()

        cy.get('[role=combobox]').click()
        cy.get('.select2-search__field').type('Ind').type('{enter}')
        //cy.get('.select2-search__field').type('{enter}')
    })

})
    