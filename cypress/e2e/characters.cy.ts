describe('Characters', () => {
  it('should receive and show the data', () => {
    cy.intercept({
      method: 'GET',
      url: 'https://api.potterdb.com/v1/characters*',
      times: 1
    }).as('posts')
    
    cy.visit('/characters')

    cy.wait('@posts')

    cy.get('[data-test="filterInput"]').should('be.visible').type('Dumbledore')

    cy.get('[data-test="cardsContainer"]').within(() => {
      cy.contains('p','Dumbledore').scrollIntoView().should('be.visible');
    })
  })
})