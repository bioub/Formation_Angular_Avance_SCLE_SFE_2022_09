describe('Todos', () => {
  beforeEach(() => {
    cy.visit('/todos')
  })

  it('should show Item 1 on load', () => {
    cy.contains('Item 1')
  })

  it('should add new todo when I press Enter', () => {
    cy.get('[name="todo"]').type('ABC{enter}');
    cy.contains('ABC');
  })

  it('should add new todo when I click +', () => {
    cy.get('[name="todo"]').type('ABC');
    cy.get('button.btn-primary').click();
    cy.contains('ABC');
  })
})
