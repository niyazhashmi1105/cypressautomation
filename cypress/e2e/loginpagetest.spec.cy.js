import Login from "../pages/LoginPage";

describe('LoginPage Test Suite',()=>{

    
    it('LoginPage Test',()=>{
        
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        
        cy.fixture('orangehrm').then((data)=>{
        const login = new Login()
        login.setUsername(data.username)
        login.setPassword(data.password)
        login.doClick()
        login.verifyLogin(data.expected)
        })
    })

})