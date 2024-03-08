describe('Visual Testing',() => {
  it('should be comparing the screenshots of the landing page',() => {


    //Navigation to google.com url
    cy.visit("https://jazurite-prototype.myshopify.com/");

    cy.get("#password").type("123")
    cy.get(`button[type="submit"]`).click()

    //takes the screenshot of current page and compares with baseline screenshot with name google-home-page
    cy.compareSnapshot("jazurite store");
  })
})
