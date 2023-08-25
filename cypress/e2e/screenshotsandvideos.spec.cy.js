///<reference types = "cypress"/>

describe('Screenshots and Videos test suite',()=>{

    it('screenshots and videos test',()=>{

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.screenshot("homepage")
        cy.get('img[alt=company-branding]').screenshot('logo')
    })
})