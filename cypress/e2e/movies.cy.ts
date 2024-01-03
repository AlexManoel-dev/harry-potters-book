const movieTitleOne = "Harry Potter and the Philosopher's Stone",
      movieTitleTwo = 'Harry Potter and the Chamber of Secrets',
      movieTitleThree = "Harry Potter and the Prisoner of Azkaban",
      movieTitleFour = "Harry Potter and the Goblet of Fire",
      movieTitleFive = "Harry Potter and the Order of the Phoenix",
      movieTitleSix = "Harry Potter and the Half-Blood Prince",
      movieTitleSeven = "Harry Potter and the Deathly Hallows - Part 1",
      movieTitleEight = "Harry Potter and the Deathly Hallows – Part 2",
      movieTitleNine = "Fantastic Beasts and Where to Find Them",
      movieTitleTen = "Fantastic Beasts: The Crimes of Grindelwald",
      movieTitleEleven = "Fantastic Beasts: The Secrets of Dumbledore";

describe('Movies', () => {
  it('should receive and show the data', () => {
    cy.intercept({
      method: 'GET',
      url: 'https://api.potterdb.com/v1/movies*',
      times: 1
    }).as('posts')
    
    cy.visit('/movies')

    cy.wait('@posts').its('response.body.data').should('have.length', 11)

    cy.contains('p', movieTitleOne).scrollIntoView().should('be.visible');
    cy.contains('p', movieTitleTwo).scrollIntoView().should('be.visible');
    cy.contains('p', movieTitleThree).scrollIntoView().should('be.visible');
    cy.contains('p', movieTitleFour).scrollIntoView().should('be.visible');
    cy.contains('p', movieTitleFive).scrollIntoView().should('be.visible');
    cy.contains('p', movieTitleSix).scrollIntoView().should('be.visible');
    cy.contains('p', movieTitleSeven).scrollIntoView().should('be.visible');
    cy.contains('p', movieTitleEight).scrollIntoView().should('be.visible');
    cy.contains('p', movieTitleNine).scrollIntoView().should('be.visible');
    cy.contains('p', movieTitleTen).scrollIntoView().should('be.visible');
    cy.contains('p', movieTitleEleven).scrollIntoView().should('be.visible');
  })
})