it('Whatever', () => {
    cy.visit('http://localhost:3333/');
    cy.get('.center-text').should('contain', 'Hello world!');
})