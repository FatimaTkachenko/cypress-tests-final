describe('Тесты приложения Книги', () => {
  beforeEach(() => {
    cy.on('uncaught:exception', (err, runnable) => {
      if (err.message.includes('Failed to fetch')) {
        return false
      }
      return true
    })
    cy.visit('http://localhost:3000', { failOnStatusCode: false })
  })

  it('Страница открывается', () => {
    cy.url().should('include', 'localhost')
  })

  it('Заголовок Books существует', () => {
    cy.contains('Books').should('exist')
  })

  it('Страница содержит элементы', () => {
    cy.get('body').should('not.be.empty')
  })
})