const bookTitleOne = "Harry Potter and the Philosopher's Stone",
      bookTitleTwo = 'Harry Potter and the Chamber of Secrets',
      bookTitleThree = "Harry Potter and the Prisoner of Azkaban",
      bookTitleFour = "Harry Potter and the Goblet of Fire",
      bookTitleFive = "Harry Potter and the Order of the Phoenix",
      bookTitleSix = "Harry Potter and the Half-Blood Prince",
      bookTitleSeven = "Harry Potter and the Deathly Hallows";

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
    cy.contains('p', bookTitleTwo).scrollIntoView().should('be.visible');
    cy.contains('p', bookTitleThree).scrollIntoView().should('be.visible');
    cy.contains('p', bookTitleFour).scrollIntoView().should('be.visible');
    cy.contains('p', bookTitleFive).scrollIntoView().should('be.visible');
    cy.contains('p', bookTitleSix).scrollIntoView().should('be.visible');
    cy.contains('p', bookTitleSeven).scrollIntoView().should('be.visible');
  })
})