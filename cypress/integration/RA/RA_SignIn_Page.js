const Locators = require("../../support/Locators")

describe("R&A Sign in", function() {
    it("Sign in", function() {

        cy.visit("https://test-dashboard.getwhistler.io/");;
        cy.viewport(1920, 1080);
        cy.get(Locators.EMAIL_INPUT_FIELD).type("o.ivankovckyi@aimprosoft.com");
        cy.get(Locators.NEXT_BUTTON).click();
        cy.get(Locators.PASSWORD_INPUT_FIELD).type("Ivanoleg150288#");
        cy.contains("Sign In").click();
        cy.contains("Categories").should("be.visible");
        cy.get(".navbar-header > a > i").click();
        cy.contains("Oleg Ivankovskyi").should("be.visible");
    })
})
