import HelloWorld from "../HelloWorld.vue";

describe("HelloWorld", () => {
  it("playground", () => {
    cy.mount(HelloWorld, { props: { msg: "Hello Cypress" } });
  });

  it("renders properly", () => {
    cy.mount(HelloWorld, { props: { msg: "Hello Cypress" } });
    cy.get("h1").should("contain", "Hello Cypress");
  });

  context("Email", () => {
    it("username input", () => {
      cy.mount(HelloWorld, { props: { msg: "Hello Cypress" } });
      cy.get("input#name1").type("name familyName");
      cy.contains("name familyName");
    });

    it("valid email input", () => {
      cy.mount(HelloWorld, { props: { msg: "Hello Cypress" } });
      cy.get("input#email1").type("username@gmail.com");
      cy.contains("username@gmail.com");
    });

    it("space in email input (this test is failing because of cypress bug)", () => {
      cy.mount(HelloWorld, { props: { msg: "Hello Cypress" } });
      cy.get("input#email1").type("user name@gmail.com");
      cy.contains("user name@gmail.com");
    });

    it("email input (this test should fail)", () => {
      cy.mount(HelloWorld, { props: { msg: "Hello Cypress" } });
      cy.get("input#email1").type("user% name@gmail.com");
      cy.contains("user%name@gmail.com");
    });

    it("space in text input", () => {
      cy.mount(HelloWorld, { props: { msg: "Hello Cypress" } });
      cy.get("input#name1").type("user name@gmail.com");
      cy.contains("user name@gmail.com");
    });
  });
});
