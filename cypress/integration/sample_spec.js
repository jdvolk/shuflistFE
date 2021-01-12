/// <reference types="Cypress" />

describe('clicking the login button takes you to the login page', () => {
  beforeEach(() => {
    // cy.exec('npm run startAPI')
    // cy.exec('npm start')
  })
  it('finds the login button', () => {
    cy.visit('/')
    cy.contains('Login').click()
    cy.url().should('include', '/Login')

    cy.get('.email-input')
    .type('fake@email.com')
    .should('have.value', 'fake@email.com')

    cy.get('.password-input')
    .type('fake@email.com')
    .should('have.value', 'fake@email.com')

    cy.get('.login-button').click()
    cy.url().should('include', '/')
    
    cy.get('.song-container').should('have.length', 2)
    cy.get('.favorite').click({ multiple: true })
    cy.contains('Favorites').click()

    cy.get('.song-description').should('contain.text', 'Self Care')
    cy.get('.x').click({ multiple: true })
  
    cy.get('.favorites-page').should('contain.text', 'Some Songs')

    cy.contains('Search').click()
    cy.url().should('include', '/Search')

    cy.get('.song-input')
    .type('btycll')
    .should('have.value', 'btycll')

    cy.get('.search').click()
  })
})