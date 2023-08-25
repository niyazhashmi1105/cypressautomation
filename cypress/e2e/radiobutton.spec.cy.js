
describe('RadioButton Interaction', ()=>{

it('Radiobuttons Test Case', () =>{

    cy.visit('https://demo.guru99.com/test/newtours/reservation.php')

    cy.get('[value="roundtrip"]').should('be.visible').should('be.checked')
    cy.get('[value="oneway"]').should('be.visible').should('not.be.checked').click()

    cy.get('[name="findFlights"]').should('be.visible').click()

    cy.title().should('eq','Find a Flight: Mercury Tours:')
})

})