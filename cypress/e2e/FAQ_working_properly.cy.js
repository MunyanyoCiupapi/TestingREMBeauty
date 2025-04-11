



describe('User buys a nd proceeds to checkout ', () => {
  it('#1 User selects product, adds it to bag and from bag proceeds to checkout', () => {

    cy.viewport(1280, 800)
    cy.visit('https://rembeauty.com/')
    
    //cy.contains('button', 'accept all').click();
    cy.get('button[aria-label="Close dialog"]').click();

    cy.get('.tvg_footer_jwX0la_FooterMenu-itemLink').contains('FAQs').scrollIntoView().should('be.visible').click()


    cy.get('.tvg_page_sidebar_faqs_8uCtKa_accordion_title').contains('When will my order ship?').scrollIntoView().should('be.visible').click();  

    cy.get('.tvg_page_sidebar_faqs_8uCtKa_accordion_content').should('have.class', 'active').and('be.visible'); 


  cy.get('.tvg_page_sidebar_faqs_8uCtKa_accordion_content').contains('we’ll send tracking information to the email you gave us as soon as your order goes out').should('be.visible');  // Ens
  })
})