describe('Home', () => {
  it('should get', () => {
    cy.visit('/test')
    cy.contains('Test')
  })
})
