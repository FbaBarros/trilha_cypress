it('Deve realizar uma requisição GET a rota /usuarios', () => {
    cy.request('/usuarios').then( res =>{
        expect(res).to.be.a('object')
        cy.log(JSON.stringify(res))
    })
})

it('Deve realizar uma requisição GET a rota /usuarios/{_id}', () => {
    cy.request('/usuarios/0uxuPY0cbmQhpEz1').then( res =>{
        expect(res).to.be.a('object')
        cy.log(JSON.stringify(res))
    })
})