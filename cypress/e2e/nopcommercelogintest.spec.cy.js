import NOPcommerceLogin from "../pages/NopcommerceLoginPage";

describe('LoginPage Test Suite',()=>{

    
    it('LoginPage Test',()=>{
        
        cy.visit('https://admin-demo.nopcommerce.com/')
        
        cy.fixture('logincredentials').then((data)=>{
        const login = new NOPcommerceLogin()
        login.setUserActions(data.email,data.password)
        login.doClick()
        login.verifyLabel(data.expected)
    })

})

})