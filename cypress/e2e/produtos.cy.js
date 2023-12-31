/// <reference types="cypress" />

describe('Funcionalidade Página de produtos', () => {

    beforeEach(() => {
        cy.visit('produtos')
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('[class="product-block grid"]')
            //.first()
            // //.last()
            //.eq(3)
            .contains('Abominable Hoodie')
            .click()
    });

    it('Deve adicionar um produto ao carrinho', () => {
var quantidade = 50

        cy.get('[class="product-block grid"]')
            .contains('Abominable Hoodie').click()
        cy.get('.button-variable-item-L').click()
        cy.get('.button-variable-item-Blue').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
        cy.get('.woocommerce-message').should('contain', quantidade + ' × “Abominable Hoodie” foram adicionados no seu carrinho.')
    });

    it('Deve adicionar produtos ao carrinho - Usando comando customizado', () => {
        cy.addProdutos('Abominable Hoodie', 'L', 'Black', 2)
    });

    it.only('Deve adicionar produtos ao carrinho - Usando comando customizado', () => {
        cy.addProdutos('Ariel Roll Sleeve Sweatshirt', 'XS', 'Red', 5)
    });

 });