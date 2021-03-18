// `describe` block "describes" a collection of tests
describe('Quote App', () => {

  //helper functions
  const textInput = () => cy.get('[name="text"]')
  const authorInput = () => cy.get('[name="author"]')
  const submitButton = () => cy.get('#submitBtn')
  const cancelButton = () => cy.get('#cancelBtn')
  const newQuote = () => cy.contains('Coding is fun')
  const testText = 'Coding is fun!!!'

  beforeEach(() => {
    cy.visit('/')
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

  describe('Submitting quote and delete', () => {
    it('can type in the inputs and submit', () => {
      textInput().type(testText)
      authorInput().type('Ben')

       submitButton().click()

       newQuote().should('exist')

       //cleanup and test delete functionality
       newQuote().next().next().click()
       newQuote().should('not.exist')
    })
  })

  describe('Editing a quote', () => {
    it('can edit a existing quote', () => {
      // create a new quote
      const text = 'Write tests. Not too many. Mostly Integration'
      const author = 'Guillermo Rauch'
      textInput().type(text)
      authorInput().type(author)
      submitButton().click()
      // click on the edit button
      cy.get('[data-cy=editBtn0]').click()
      cy.contains(text).next().click()
      // confirm that the input has expected text
      textInput().should('have.value', text)
      authorInput().should('have.value', author)
      // edit the text in the input
      textInput().clear().type('Testing trophy is great!')
      authorInput().clear().type('Ben')
      // submit the change
      submitButton().click()
      // confirm the change is in place
      textInput().should('have.value', '')
      authorInput().should('have.value', '')

      cy.contains('Testing trophy is great! (Ben)').should('exist')
      // then clean up
      cy.contains('Testing trophy is great! (Ben)').siblings('button:nth-of-type(2)').click()
    })
  })
})