describe('template spec', () => {
  it('should render and display expected content', () => {
    cy.visit('/')

    cy.get('a[href="/books"]').click()
    cy.url().should('include', '/books')
    cy.contains('h1', 'Livros').should('be.visible')

    cy.get('a[href="/characters"]').click()
    cy.url().should('include', '/characters')
    cy.contains('h1', 'Personagens').should('be.visible')

    cy.get('a[href="/movies"]').click()
    cy.url().should('include', '/movies')
    cy.contains('h1', 'Filmes').should('be.visible')

    cy.get('a[href="/potions"]').click()
    cy.url().should('include', '/potions')
    cy.contains('h1', 'Poções').should('be.visible')

    cy.get('a[href="/spells"]').click()
    cy.url().should('include', '/spells')
    cy.contains('h1', 'Feitiços').should('be.visible')

    cy.get('a[href="/"]').click()
    cy.url().should('include', '/')
  })
})
