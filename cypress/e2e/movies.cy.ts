const movieTitleOne = "Harry Potter and the Philosopher's Stone";

describe('Movies', () => {
  it('should receive and show the data', () => {
    cy.intercept({
      method: 'GET',
      url: 'https://api.potterdb.com/v1/movies*',
      times: 1
    }).as('posts')
    
    cy.visit('/books')

    cy.wait('@posts').its('response.body.data').should('have.length', 11)

    cy.contains('p', movieTitleOne).scrollIntoView().should('be.visible');
  })
})