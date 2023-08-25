///<reference types= "cypress"/>

class Login{

    txtUsername = "input[placeholder=Username]"
    txtPassword = "input[placeholder=Password]"
    btnLogin = "button[type=submit]"
    lblDashboard = ".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module"


    setUsername(username){
        cy.get(this.txtUsername).type(username)
    }

    setPassword(password){
        cy.get(this.txtPassword).type(password)
    }

    doClick(){
        cy.get(this.btnLogin).click()
    }

    verifyLogin(lblMessage){
        cy.get(this.lblDashboard).should('have.text',lblMessage)
    }
}

export default Login