import { Then } from 'cypress-cucumber-preprocessor/steps';

Given('I navigate to my page', () => {
    cy.visit('http://localhost:3333/');
})

Then('The text Hello World is displayed', () => {
    cy.get('h1.center-text').should('contain', 'Hello world!');
})

Then('The text Ready To Go is displayed', () => {
    cy.get('p.center-text').should('contain', 'ready to go');
})