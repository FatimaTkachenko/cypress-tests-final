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

  it('На странице есть хотя бы одна кнопка', () => {
    cy.get('button').should('have.length.at.least', 1)
  })

  it('Заголовок страницы не пустой', () => {
    cy.title().should('not.be.empty')
  })
})