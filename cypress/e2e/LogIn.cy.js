

const user = "user"
const pass = "lala"

describe('User login', () => {
  it('#1 User writes not existing data', () => {
    cy.visit('https://rembeauty.com/')
    cy.get('a[aria-label="Open account"]').click()
  })
})