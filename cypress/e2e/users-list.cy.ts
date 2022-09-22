describe('Users List', () => {
  it('should show users from backend', () => {
    cy.intercept({
      method: 'GET',
      url: 'https://jsonplaceholder.typicode.com/users',
    }, {
      statusCode: 200,
      body: [{id: 1, name: 'Steve Jobs'}, {id: 2, name: 'Bill Gates'}],
      headers: { 'access-control-allow-origin': '*' },
      delayMs: 500,
    }).as('getUsersList')

    cy.visit('/users');

    cy.contains('Steve Jobs');

  })
})
