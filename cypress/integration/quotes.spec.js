// `describe` block "describes" a collection of tests
describe('Quote App', () => {

  //helper functions
  const textInput = () => cy.get('[name="text"]')
  const authorInput = () => cy.get('[name="author"]')
  const submitButton = () => cy.get('#submitBtn')
  const cancelButton = () => cy.get('#cancelBtn')
  const testText = 'Coding is fun!!!'

  beforeEach(() => {
    cy.visit('http://localhost:1234')
  })

  // `it` is the test itself
  it('example test', () => {
    const person = {name: 'Jimmy'}
    // `expect` is an assertions
    expect(2 + 2).to.equal(4) //strict
    expect(2 + 2).to.not.equal(5) //strict
    expect('Jimmy').to.equal('Jimmy') //strict
    expect({name: 'Jimmy'}).to.not.equal({name: 'Jimmy'}) //strict
    expect({name: 'Jimmy'}).to.deep.equal({name: 'Jimmy'}) //deep
    expect({name: 'Jimmy'}).to.eql({name: 'Jimmy'}) //deep
    expect(person).to.equal(person) //strict
  })

  it('renders properly', () => {
    textInput().should('exist')
    authorInput().should('exist')
    submitButton().should('exist')
    submitButton().should('exist')
    cy.get('[name="foobar"]').should('not.exist')
    cancelButton().should('exist')
  })

  describe('Filling out the input and cancelling', () => {
    it('can type in the inputs and cancel', () => {
      textInput()
      .should('have.value', '')
      .type(testText)
      .should('have.value', testText)

      authorInput()
      .should('have.value', '')
      .type('Ben')
      .should('have.value', 'Ben')

      cancelButton().click()

      textInput().should('have.value', '')
      authorInput().should('have.value', '')
    })
  })

  describe('Submitting quote', () => {
    it('can type in the inputs and submit', () => {
      textInput().type(testText)
      authorInput().type('Ben')

       submitButton().click()

       const newQuote = () => cy.contains('Coding is fun')

       newQuote().should('exist')

       //cleanup
       newQuote().next().next().click()
    })
  })
})