

const eyeshadow = "starlet lustrous liquid eyeshadow"

describe('User buys a nd proceeds to checkout ', () => {
  it('#1 User selects product, adds it to bag and from bag proceeds to checkout', () => {

    cy.viewport(1280, 800)
    cy.visit('https://rembeauty.com/')
    
  //cy.contains('button', 'accept all').click();
    cy.get('button[aria-label="Close dialog"]').click();

     cy.get("div.tvg_header_eqjh3W_is-right > a:nth-of-type(1) > div").click();
    cy.get("input[type='text']").click();
    cy.get("input[type='text']").type(eyeshadow + "{enter}");

    cy.get("#ajax-pagination-content > div:nth-of-type(1) span.tvg_global_button_OIuULW_Button__loading").click();
    cy.get("#shopify-section-sections--15825323524359__cart-drawer form button").click();
    cy.location("href").should("include", "/checkouts/");

  })
})