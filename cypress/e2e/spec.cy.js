describe("Homepage Test", () => {
  it("The test will load the homepage and check h1 content", () => {
    
    cy.visit("http://127.0.0.1:5500/");

    // Verify the page loads correctly
    cy.url().should("include", "5500");

    // Check if <h1> contains the expected text
    cy.get("h1").should("contain.text", "Hacker Escape Rooms");
  });
});