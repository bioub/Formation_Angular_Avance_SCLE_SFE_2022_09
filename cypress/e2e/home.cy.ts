describe('Homepage', () => {
  it('should contain Welcome', () => {
    cy.visit('/')
    cy.contains('Welcome')
  })
})
