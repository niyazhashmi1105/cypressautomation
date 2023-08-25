

describe('Web Table Test Suite',()=>{

    it('Web Table Rows and Columns Test',()=>{


    cy.visit('https://demo.opencart.com/admin/index.php?route=common/login')
    cy.get('#input-username').type('demo')
    cy.get('#input-password').type('demo')
    cy.get('button[type=submit]').click()
    cy.get('.btn-close').click()
    
    cy.get('#menu-customer>a').click()
    cy.get('#menu-customer>ul>li:nth-child(1)').click()


    //get total no. of rows and columns
    cy.get('.table.table-bordered.table-hover>tbody>tr').should('have.length','10')
    cy.get('.table.table-bordered.table-hover>thead>tr>td').should('have.length','7')

    //get specific row and column data
    cy.get('.table.table-bordered.table-hover>tbody>tr:nth-child(3)>td:nth-child(3)').contains('gorankreziccc90@gmail.com')

    //get all rows and columns data
    cy.get('.table.table-bordered.table-hover>tbody>tr')
        .each(($row, index, $rows)=>{
            cy.wrap($row).within(()=>{
                cy.get('td').each(($col,index,$cols)=>{
                    cy.log($col.text())
                })
        })
    })


    //Pagination

    let totalPages
    cy.get('.col-sm-6.text-end').then((e)=>{
        let text = e.text()
        totalPages = text.substring(text.indexOf("(")+1,text.indexOf("Pages")-1)
        cy.log("Total Number of Pages "+totalPages)

        for(let p=1 ;p<=totalPages;p++){
            if(p>1){
                    cy.log("Active page =========> "+ p)
                    cy.get('ul[class=pagination]>li:nth-child('+p+')').click()
                 
                    cy.get('.table.table-bordered.table-hover>tbody>tr')
                    .each(($row, index, $rows)=>{
                        cy.wrap($row).within(()=>{
                            cy.get('td:nth-child(3)').each(($col,index,$cols)=>{
                                cy.log($col.text())
                         })
                 })
             })
    
    
            }
        }
      

    })

      

})

})