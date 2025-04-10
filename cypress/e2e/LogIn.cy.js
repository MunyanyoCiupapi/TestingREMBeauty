

const email = "marcinchmylko1234@gmail.com"
const pass = "supertester1234"

describe('User login', () => {
  it('#1 User writes wrong user credentials and error message appears', () => {

    cy.viewport(1280, 800)
    cy.visit('https://rembeauty.com/')
    //cy.contains('button', 'accept all').click();
    cy.get('button[aria-label="Close dialog"]').click();

    cy.get('a[aria-label="Open account"]').click()

    cy.get('#CustomerEmail').type(email);            
    cy.get('#CustomerPassword').type(pass);  
    cy.contains('Sign In').scrollIntoView().click();

    cy.url().should('eq', 'https://rembeauty.com/account');
  })
})