/// <reference types ="cypress"/>

describe('Web Table Test suite',()=>{

    it('Web Table scenarios',()=>{

        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.get('table[name=BookTable]').contains('td','Learn Selenium').should('be.visible')

        cy.get('table[name=BookTable] > tbody> tr:nth-child(2)> td:nth-child(3)')
            .contains('Selenium')
                .should('be.visible')
  
        cy.get('table[name=BookTable] > tbody> tr td:nth-child(2)').each(($e,index,$list) =>{

            const text = $e.text()
            if(text.includes("Amod")){

                cy.get('table[name=BookTable] > tbody> tr td:nth-child(1)').eq(index).then(function(bname)
                    {   
                        var bookName = bname.text()
                        expect(bookName).to.eq('Master In Java')
                    })

            }


        })
  
  
    })
})