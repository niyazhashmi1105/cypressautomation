///<reference types = "cypress"/>

describe('Custom Commands Test Suite',()=>{

    it('Login Test Case',()=>{

        cy.login('admin@yourstore.com','admin') //valid email and password
        cy.title().should('eq','Dashboard / nopCommerce administration')


        cy.login('admin@yourstore.com','admin12') //invalid password
        cy.title().should('be.equal','Your store. Login')

        cy.login('admin123@yourstore.com','admin') //invalid email
        cy.title().should('be.equal','Your store. Login')


    })

    it('Add Customer Test Case',()=>{
        cy.login('admin@yourstore.com','admin')
        cy.log('Adding customer Test Case............... ')

        
    })
    it('Edit Customer Test Case',()=>{

        cy.login('admin@yourstore.com','admin')
        cy.log('Editing customer Test Case............... ')
        
    })

})