///<reference types="Cypress"/>

import LoginPage from "./pageObjects/LoginPage"

const lp = new LoginPage()
describe('LoginPage Test Suite',()=>{

    it('LoginPage Test',()=>{

        
        lp.visit()
        lp.fillEmail('admin@yourstore.com')
        lp.fillPassword('admin')
        lp.submit()


    })
})