///<reference types= "cypress"/>

class NOPcommerceLogin{

    txtUserName = "#Email"
    txtPassword = "#Password"
    btnLogin = "button[type=submit]"
    lblDashboard = "a[class='nav-link active'] p"

    setUserActions(username,password){
        cy.get(this.txtUserName).clear().type(username)
        cy.get(this.txtPassword).clear().type(password)
    }

    doClick(){
        cy.get(this.btnLogin).click()
    }
    
    verifyLabel(lblMessage){
        cy.get(this.lblDashboard).should('have.text',lblMessage)
    }

}

export default NOPcommerceLogin







