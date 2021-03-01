const Locators = require("../../support/Locators")

describe("RA Verifying That Violation Sent And Displayed On Email", function() {
    it("RA Verifying That Violation Sent And Displayed On Email", function() {

      cy.visit("https://mail.ukr.net/");
      cy.viewport(1920, 1080);
      cy.location("protocol").should("eq", "https:");
      cy.contains("Ім'я скриньки").should("be.visible");
      cy.contains("Пароль").should("be.visible");
      cy.contains("Увійти").should("be.visible");
      cy.get("input[type='text']").type("guettamaster");
      cy.get("input[type='password']").focus().type("Ivanoleg150288");
      cy.contains("Увійти").click();

      // cy.get("#login-username")
      //   .then((el) => {
      //     el.value = "guettamaster";
      //       console.log('el.value: ', el.value);
      //   });
      // cy.contains("Next").should("be.visible");
      // cy.wait(1000); //idk if this is needed
      // cy.get("#login-signin").click({force: true});

    })
  })
