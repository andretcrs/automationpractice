class RealizarPedidoPage {
  buscarItem(){
    cy.get('#search_query_top').type('Faded Short Sleeve T-shirts')
    cy.get('#searchbox > .btn').click()
    cy.get(".lighter").should("have.text",'\n            "Faded Short Sleeve T-shirts"\n        ')
    cy.get(".heading-counter").should('have.text', '\n            1 result has been found.        ')
    cy.get(".right-block > h5 > .product-name").click()
    cy.get(".exclusive > span").click()
    cy.get(".layer_cart_product > h2").should("have.text", "\n\t\t\t\t\tProduct successfully added to your shopping cart\n\t\t\t\t")
  }
  fazerChekout(){
      cy.get(".btn.btn-default.button.button-medium").click()
      cy.get(".navigation_page").should("have.text", "Your shopping cart")
      cy.get(".cart_description > .product-name > a").should("have.text","Faded Short Sleeve T-shirts")
      cy.get(".cart_description > :nth-child(3) > a").should("have.text","Color : Orange, Size : S")
      cy.get(".label").should("have.text", "In stock");
      cy.get(".cart_navigation > .button > span").click();
  }
}
export default new RealizarPedidoPage
