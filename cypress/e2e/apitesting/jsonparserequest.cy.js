
describe('JSON Parsing Test Suite',()=>{

    it('JSON Parse Request Test',()=>{

        cy.request({
                        method: 'GET',
                        url: 'https://fakestoreapi.com/products'
        }).then((response)=>{
                        expect(response.status).to.equal(200)
                        expect(response.body[0].id).eq(1)
                        expect(response.body[0].title).eq("Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops")
                        expect(response.body[0].price).eq(109.95)
                        expect(response.body[0].rating.rate).eq(3.9)
                        expect(response.body[0].rating.count).eq(120)

        })

    })

    it('JSON Parse Complex Request Test',()=>{

        let totalPrice=0;
        cy.request({
                        method: 'GET',
                        url: 'https://fakestoreapi.com/products',
                        qs: {limit:5}

        }).then((response)=>{
                        expect(response.status).to.equal(200)
                        response.body.forEach(element => {
                                    totalPrice = totalPrice+ element.price
                        });
                        expect(totalPrice).to.equal(899.23)
                       

        })

    })
})