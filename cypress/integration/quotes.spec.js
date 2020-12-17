// write tests here
describe("Quotes app", () => {
  // here go our tests
  beforeEach(() => {
    // arbitrary code you want running before tests start
    cy.visit("http://localhost:1234");
  });

  const textInput = () => cy.get('input[name="text"]');
  const authorInput = () => cy.get('input[name="author"]');
  const submitButton = () => cy.get("#submitBtn");
  const cancelButton = () => cy.get("#cancelBtn");

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
    textInput().should("exist");
    cy.get('input[name="foobar"]').should("not.exist");
    submitButton().should("exist");
    cancelButton().should("exist");
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
    authorInput()
      .should("have.value", "")
      .type("am I doing this right?")
      .should("have.value", "am I doing this right?");
  });

  it("submit button disabled until both inputs filled out", () => {
    // set up, sanity checks to make sure initial state is legit
    // act (like typing or clicking - mimicking user input)
    // assert that the action has the effect we expect
    //submit quote is disabled.
    // put text into text input
    // the submit button still disabled.
    // put text into author input
    // the submit button still disabled.
    // both inputs are filled
    // submit button is working.
    // "be.disabled"
    // .clear()
  });
});
