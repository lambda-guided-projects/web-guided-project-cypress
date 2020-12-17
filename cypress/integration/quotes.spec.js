// write tests here
describe("Quotes app", () => {
  // here go our tests
  beforeEach(() => {
    // arbitrary code you want running before tests start
    cy.visit("http://localhost:1234");
  });
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
  it("playing around selecting elements from the DOM", () => {
    cy.get('input[name="text"]').should("exist");
    cy.get('input[name="foobar"]').should("not.exist");
  });
});
