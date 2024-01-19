/// <reference types="cypress" />

const { addDays, format } = require("date-fns")

describe('Acessa Pagina', () => {
    beforeEach(() => {
      cy.visit('https://www.embarca.ai/')
    })
  
    it('Efetua Login', () => {
      cy.contains('Entrar').should('exist');
      cy.contains('Entrar').click();

      cy.get('.card').should('be.visible');
      cy.get('.card').should('exist');

      cy.get('h1.mb-5').should('be.visible');
      cy.get('form > :nth-child(3) > label').should('be.visible');

      cy.get('#email').should('be.visible');
      cy.get('#email').should('exist');
      cy.get('#email').click();
      cy.get('#email').type('testeqa@embarca.ai');

      cy.get('.mb-1 > label').should('be.visible');
      cy.get('#pass_log_id').should('be.visible');
      cy.get('#pass_log_id').should('exist');
      cy.get('#pass_log_id').click();
      cy.get('#pass_log_id').type('Arca123');

      cy.get('.mb-1 > label').should('be.visible');

      cy.get('#pass_log_id').should('be.visible');
      cy.get('#pass_log_id').should('exist');
      cy.get('#pass_log_id').click();

      cy.get('.btn-dark').should('be.visible');
      cy.get('.btn-dark').should('exist');
      
      cy.get('.card > .my-4').should('be.visible');
      cy.get('.card > .my-4').should('exist');

      cy.get('form > .btn').should('be.visible');
      cy.get('form > .btn').should('exist');
      cy.get('form > .btn').click();

      cy.get('.simple_form > .row > :nth-child(1) > label').should('be.visible');
      cy.get('.simple_form > .row > :nth-child(1) > label').should('exist');

      cy.get('.simple_form > .row > :nth-child(1) > label').click();
      cy.get('.simple_form > .row > :nth-child(1) > label').type('Curitiba PR');
      cy.get('[data-id="0"]').click();

      cy.get('.simple_form > .row > :nth-child(4) > label').should('be.visible');
      cy.get('.simple_form > .row > :nth-child(4) > label').should('exist');

      cy.get('#destination_text').should('be.visible');
      cy.get('#destination_text').should('exist');
      cy.get('#destination_text').click();
      cy.get('#destination_text').type('Matinhos PR');
      cy.get('[data-id="0"]').click();

      cy.get(':nth-child(5) > label').should('be.visible');
      cy.get(':nth-child(5) > label').should('exist');

      cy.get('#departure').should('be.visible');
      cy.get('#departure').should('exist');

  const dataHoje = new Date();
  const data15dias = addDays(dataHoje, 15);
  const mesProximo = data15dias.getMonth();
  const dia = data15dias.getDate();
  cy.get(':nth-child(6) > label').should('be.visible').and('exist');
  cy.get('#return').should('be.visible').and('exist');
  cy.get('#return').click();
  cy.get('.datepicker-days > .table-condensed').as('calendario');
  cy.get('@calendario').find('.next').click({ force: true });
  cy.wait(500); 
  cy.get('@calendario').invoke('text').then((texto) => {
    while (!texto.includes(mesProximo)) {
      cy.get('@calendario').find('.next').click({ force: true });
      cy.wait(500);
      cy.get('@calendario').invoke('text').then((novoTexto) => {
        texto = novoTexto;
      });
    }
    })
    cy.get('@calendario').contains(new RegExp(`\\b${dia}\\b`)).should('be.visible').and('exist').click();
    cy.get('#search-trips-btn').and('exist').should('be.visible').click();
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });

    cy.get('.cookieConsentOK').should('be.visible').then((element) => {
      if (element) {
        cy.wrap(element).click();
      } else {
        cy.log('O botão de consentimento de cookies não está presente ou não está visível.');
      }
    });

    cy.contains(':not(:contains("esgotado"))', 'Reservar poltrona').click();
    
    cy.wait(9000); 
    cy.get('.driver').should('be.visible');
    cy.wait(5000); 
    cy.get('[data-number="13"]').click();
    cy.wait(9000); 
    cy.get('#next-button').should('be.visible').click();

    // cy.get('#email').should('be.visible');
    // cy.get('#email').should('exist');
    // cy.get('#email').click();
    // cy.get('#email').type('testeqa@embarca.ai');

    // cy.get('.mb-1 > label').should('be.visible');
    // cy.get('#pass_log_id').should('be.visible');
    // cy.get('#pass_log_id').should('exist');
    // cy.get('#pass_log_id').click();
    // cy.get('#pass_log_id').type('Arca123');

    // cy.get('form > .btn').click();

    });

  })
  
  