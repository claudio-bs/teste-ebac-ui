/// <reference types="cypress" />
import EnderecoPage from '../support/page-objects/endereco.page'

describe('Funcionalidade Endereços - Faturamento e Entrega', () => {
    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then(dados => {
            cy.login(dados.usuario, dados.senha)
        })

    });

    it.only('Deve fazer cadastro de faturamento com sucesso', () => {
        EnderecoPage.editarEndrecoFaturamento('Kleber', 'Santana', 'Aplle', 'Brasil', 'Rua Vale do Silício', '8888', 'Araçatuba', 'São Paulo', '16057-560', '18123456789', 'email@ebacteste.com' )
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
    });
});