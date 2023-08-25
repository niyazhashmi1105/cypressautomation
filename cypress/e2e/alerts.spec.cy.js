///<reference types="cypress"/>

describe('Alert Window Handling', ()=>{

it('Alert Window Handling Scenarios',()=>{

cy.visit('https://register.rediff.com/register/register.php')
cy.get('#Register').click()

cy.on('window:alert' ,(str) =>{
    expect(str).to.equal('Your full name cannot be blank.\nPlease enter your firstname and lastname e.g. Sameer Bhagwat')
})


})

it('Confirmation Alert Handling', ()=>{
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    cy.get('#content > div > ul > li:nth-child(2) > button').click()
    cy.on('window:confirm',(str) =>{
        expect(str).to.equal('I am a JS Confirm')
    })
})

})