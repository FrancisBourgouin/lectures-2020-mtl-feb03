// Creating a new todo -
// Click in the form -
//  Need to write a proper todo item name -
// Submit the form -
// We should see it in the list
// It should be in the last position

describe("Creation of a Todo Item", () => {
  before(() => {
    cy.visit("/");
  });

  it("creates a todo", () => {
    cy.get("#todo-input").type("Test?");

    cy.get("#todo-input").type("{enter}");

    // cy.get("form")
    //   .first()
    //   .trigger("submit");
  });

  it("validates its presence in the list", () => {
    cy.get(".new-todo")
      .last()
      .should("have.text", "Test? X");
  });
});
