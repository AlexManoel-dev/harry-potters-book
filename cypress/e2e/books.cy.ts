const bookTitleOne = "Harry Potter and the Philosopher's Stone";

describe('Books', () => {
  it('should receive and show the data', () => {
    cy.intercept({
      method: 'GET',
      url: 'https://api.potterdb.com/v1/books*',
      times: 1
    }).as('posts')
    
    cy.visit('/books')

    cy.wait('@posts').its('response.body.data').should('have.length', 7)

    cy.contains('p', bookTitleOne).scrollIntoView().should('be.visible');
  })
})