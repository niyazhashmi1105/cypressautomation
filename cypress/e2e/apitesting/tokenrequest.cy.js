describe('Request Chaining',()=>{

    var authToken = null
    let bookingId = null
    before('Auth Token Generate',()=>{

        cy.request({
                        method : 'POST',
                        url: 'https://restful-booker.herokuapp.com/auth',
                       
                        body:{
                                username : "admin",
                                password : "password123"
                        }
        }).then((response)=>{
                    authToken = response.body.token
                    cy.log(authToken)
                    
        })

    })

    before('Auth Token Generate',()=>{

        cy.request({
                        method : 'POST',
                        url: 'https://restful-booker.herokuapp.com/booking',
                        headers:{
                                    'Authorization': 'Bearer '+ authToken,
                                    'Content-Type': 'application/json'
                        },
                        body:{
                            "firstname" : "Jim",
                           "lastname" : "Brown",
                           "totalprice" : 111,
                           "depositpaid" : true,
                           "bookingdates" : {
                               "checkin" : "2018-01-01",
                               "checkout" : "2019-01-01"
                           },
                           "additionalneeds" : "Breakfast"
                       }       
                    }).then((response)=>{
                    expect(response.status).equal(200)
                    bookingId = response.body.bookingid
                    cy.log("Booking id===> "+bookingId)
                    expect(response.body.booking).has.property('firstname','Jim')
                    expect(response.body.booking).has.property('lastname','Brown')
                    expect(response.body.booking).has.property('totalprice',111)
                    
        })
    })

        it('GET Booking ID',()=>{
                    cy.request({
                                    method: 'GET',
                                    url : `https://restful-booker.herokuapp.com/booking/${bookingId}`,
                                    headers:{
                                                'Authorization': 'Bearer '+ authToken,
                                                'Content-Type': 'application/json'
                                            }
                    }).then((response)=>{
                                expect(response.status).to.equal(200)
                                
                            })
        })

        it('GET ALL Bookings Request',()=>{
                    cy.request({
                                    method : 'GET',
                                    url : 'https://restful-booker.herokuapp.com/booking'
                    }).then((response)=>{
                                            expect(response.status).to.equal(200)
                                            
                    })
        })

 
})