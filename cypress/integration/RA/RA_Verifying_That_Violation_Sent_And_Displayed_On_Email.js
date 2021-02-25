const Locators = require("../../support/Locators")

describe("RA Verifying That Violation Sent And Displayed On Email", function() {
    it("RA Verifying That Violation Sent And Displayed On Email", function() {

      cy.visit("https://login.yahoo.com/");
      cy.viewport(1920, 1080);
      cy.title().should("eq", "Yahoo");
      cy.location("protocol").should("eq", "https:");
      cy.contains("Sign in").should("be.visible");
      cy.get("input[placeholder=' ']").type("guettamaster", { force: true });
      cy.get("input[type='submit']").click();
      // cy.contains("Enter password").should("be.visible");
      // cy.get("input[class='password-label']").type("ivanoleg15028819");
      // cy.get(Locators.YAHOO_NEXT_BUTTON_BELOW_PASSWORD_FIELD).click();
      // cy.contains("Yahoo Mail", {timeout:7000}).should("be.visible");


    })
  })
