// write tests here
describe("Quotes app", () => {
  // here go our tests
  beforeEach(() => {
    // arbitrary code you want running before tests start
    cy.visit("http://localhost:1234");
  });
  const textInput = () => cy.get('input[name="text"]');
  const authorInput = () => cy.get('input[name="author"]');
  // here go our tests
  it("sanity test to make sure tests work", () => {
    // false positive
    // 'expect' is an assertion
    // there can be many assertions per test
    // inside the 'it' statement (test) many assertions may be
    // logically grouped together
    expect(1 + 2).to.equal(3);
    expect(2 + 2).not.to.equal(5);
  });
  it("the proper elements are showing on the screeen", () => {
    cy.get('input[name="text"]').should("exist");
    cy.get('input[name="foobar"]').should("not.exist");
    cy.get("#submitBtn").should("exist");
    cy.get("#cancelBtn").should("exist");
    cy.contains("Submit Quote");
    cy.contains(/submit quote/i);
  });
  it("can type in the inputs", () => {
    // grab the inputs
    // assert they are empty
    // type in the inputs
    // assert that the thing we typed is there
    textInput()
      .should("have.value", "")
      .type("have fun learning React!")
      .should("have.value", "have fun learning React!");
    cy.get('input[name="author"]')
      .should("have.value", "")
      .type("am I doing this right?")
      .should("have.value", "am I doing this right?");
  });
});
