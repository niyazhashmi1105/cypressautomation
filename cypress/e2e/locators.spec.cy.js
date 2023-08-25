///<reference types ="cypress"/> 

describe('Locating Different Element Strategies',()=>{
    it('Verify different types of Locators',()=>{

       cy.visit('https://demo.nopcommerce.com')
       cy.wait(3000)

       cy.get('#small-searchterms').type('Apple MacBook')

       cy.get('.search-box-button').click()

       cy.get('.button-2.product-box-add-to-cart-button').click()

       cy.wait(3000)
       
       cy.get('#product_enteredQuantity_4').clear().type('5')

       cy.get('.add-to-cart-button[type=button]').click()

       cy.wait(5000)

       cy.get('#topcartlink > a > span.cart-label').click()

       cy.get('.product-unit-price').contains('$1,800.00')

    })
})