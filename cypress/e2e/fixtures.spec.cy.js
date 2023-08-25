///<reference types ="cypress"/> 

describe('Fixture Test Suite',()=>{

    let data;
    before(()=>{
        cy.fixture('logincredentials').then(function(fdata){
                data = fdata
        })
    })

    it('Fixture Test Case',()=>{

        cy.visit('https://admin-demo.nopcommerce.com/login')
        cy.get('#Email').clear().type(data.email)
        cy.get('#Password').clear().type(data.password)
        cy.get('.login-button').click()
        cy.title().should('eq','Dashboard / nopCommerce administration')
    })

})