///<reference types="Cypress"/>

class LoginPage{

    visit(){
        cy.visit('https://admin-demo.nopcommerce.com/login')
    }

fillEmail(email){

    const emailField = cy.get('#Email')
    emailField.clear().type(email)
    return this

}

fillPassword(password){

    const passwordField = cy.get('#Password')
    passwordField.clear().type(password)
    return this
}

submit(){
    const signinButton = cy.get('.login-button')
    signinButton.click()
}
}
export default LoginPage