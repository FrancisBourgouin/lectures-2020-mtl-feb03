/* eslint-disable no-undef */
// To see a list of all the todos
// I want to see them not checked out
// I want to complete by clicking on them
// it should be checked

describe("Completion of a Todo Item", () => {
  before(() => {
    cy.visit("/");
  });

  it("checks the box when I click on the input", () => {
    cy.get(".new-todo input")
      .first()
      .click();
  });

  it("Validate if the checkbox is checked, attribute complete", () => {
    cy.get(".new-todo input")
      .first()
      .should("have.attr", "completed");
  });
});
