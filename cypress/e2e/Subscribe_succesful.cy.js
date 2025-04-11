describe("Klaviyo subscription confirmation", () => {
  it("waits for 'Thanks for subscribing' message to appear", () => {
    cy.viewport(1905, 578);
    cy.visit("https://rembeauty.com/");

   //cy.contains('button', 'accept all').click();
    cy.get('button[aria-label="Close dialog"]').click();


    cy.get("form.js-signup-form").should("be.visible");
    cy.get("#email").type("user@gmail.com", { delay: 50 });
    cy.get("form.js-signup-form button[type='submit']")
      .scrollIntoView()
      .click({ force: true });

    cy.get("div.tvg_footer_jwX0la_Footer-subscribeForm > div > div > div", { timeout: 10000 }).contains("Thanks for subscribing").should("be.visible");
  });
});
