

describe('Basic Authentication',()=>{

    it('Basic Authentication Request',()=>{

        cy.request({
                        method: 'GET',
                        url: ' https://postman-echo.com/basic-auth',
                        auth:  {
                                    'username': 'postman',
                                    'password': 'password'
                        }
                    }) .then((response)=>{
                                    expect(response.status).equal(200)
                                    expect(response.body.authenticated).equal(true)
                        })
        
    })

    it('Digest Authentication Request',()=>{

        cy.request({
                        method: 'GET',
                        url: 'https://postman-echo.com/basic-auth',
                        auth:  {
                                    username: 'postman',
                                    password: 'password',
                                    method: 'digest'
                        }
                    }) .then((response)=>{
                                    expect(response.status).equal(200)
                                    expect(response.body.authenticated).equal(true)
                        })
        
    })
})