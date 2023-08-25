const xml2js = require('xml2js')
const parser = new xml2js.Parser({explicitArray: false})

describe('XML Parse Request',()=>{

    const xmlPayload = "<pet><id>10</id><name>doggie</name><category><id>1</id><name>Dogs</name></category><photoUrls><photoUrl>string</photoUrl></photoUrls><tags><tag><id>0</id><name>string</name></tag></tags><status>available</status></pet>"
    let petId =  null

    before('Add new Pet',()=>{

        cy.request({
                        method: 'POST',
                        url: 'https://petstore3.swagger.io/api/v3/pet',
                        body: xmlPayload,
                        headers:{
                                    'Content-Type': 'application/xml',
                                    'accept': 'application/xml'
                                    
                        }
        }).then((response)=>{
                            expect(response.status).equal(200)
                            parser.parseString(response.body,(err,result)=>{
                                            cy.log(result.Pet.id)
                                            petId = result.Pet.id
                            })
            })
    })
        it('GET Pet id',()=>{
                            
             cy.request({    
                           method: 'GET',
                            url : "https://petstore3.swagger.io/api/v3/pet/"+petId,
                            headers:{ 'accept': 'application/xml'}

                        }).then((response)=>{
                                                
                                                expect(response.status).to.eq(200)
                                                parser.parseString(response.body,(err,result)=>{
                                                            expect(result.Pet.name).equal('doggie')
                                                            expect(result.Pet.id).equal(petId)
                                                    })
                        })

        })

    
})
