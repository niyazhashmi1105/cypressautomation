///<reference types ="cypress"/> 

describe('Hooks Test Suite',()=>{

    before(()=>{
         cy.log("Set up block")
    })


    beforeEach(()=>{
        cy.log('Before Each block')
    })

    afterEach(()=>{
        cy.log('After Each block')
    })

    after(()=>{
        cy.log("Tear down block")
   })

   it('Search Product Test case',()=>{
        cy.log('Searching product test')
   })


   it('Listing Product Test case',()=>{
        cy.log('Listing product test')
    })

    it('Add to cart Test case',()=>{
        cy.log('Add to cart test')
    })

})