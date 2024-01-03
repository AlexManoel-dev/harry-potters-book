describe('Spells', () => {
  it('should receive and show the data', () => {
    cy.intercept({
      method: 'GET',
      url: 'https://api.potterdb.com/v1/spells*',
      times: 1
    }).as('posts')
    
    cy.visit('/spells')

    cy.wait('@posts')

    cy.get('[data-test="filterInput"]').should('be.visible').type('Age')

    cy.get('[data-test="cardsContainer"]').within(() => {
      cy.contains('p','Age').scrollIntoView().should('be.visible');
    })
  })
})