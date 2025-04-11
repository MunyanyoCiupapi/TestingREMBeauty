describe('Remove from bag', () => {
  it('#1 User adds products to bag, removes all and validates nothing left in the bag', () => {

    cy.viewport(1280, 800)
    cy.visit('https://rembeauty.com/')
    //cy.contains('button', 'accept all').click();
    cy.get('button[aria-label="Close dialog"]').click();

    cy.get('a[aria-label="shop now"]').click()


    cy.get('button.js-product-form-button.tvg_add_to_cart_button_wKPx5a_button').scrollIntoView().should('be.visible').click();


     cy.get('.tvg_react_cart_F4VlJW_CartItems')
     .should('not.be.empty') 
     .find('.tvg_react_cart_F4VlJW_CartItem')
     .should('have.length.greaterThan', 0); 


   cy.get('.tvg_react_cart_F4VlJW_CartLineItemQtyRemove')
     .first()  
     .click();


   cy.wait(1000);  


   cy.get('.tvg_react_cart_F4VlJW_CartItems')
     .should('be.empty'); 

   cy.get('.tvg_react_cart_F4VlJW_CartEmpty')
     .should('be.visible')
     .find('.tvg_react_cart_F4VlJW_CartEmptyTitle')
     .should('have.text', 'Your Bag is empty.');


   cy.get('.tvg_react_cart_F4VlJW_CartEmptyButton')
     .should('be.visible')
     .and('have.text', 'Continue shopping');
  })
})