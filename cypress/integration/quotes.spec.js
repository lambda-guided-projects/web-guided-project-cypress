function sum(a,b) {
  return a + b
}

describe('Example Test', () => {
  it('simple assertions', () => {
    expect(sum(5,5)).to.equal(10)
    expect(sum(5,5)).to.not.equal(11)
  })
})

describe('Quote App', () => {
  const textInput = () => cy.get('[name="text"')
  const authorInput = () => cy.get('[name="author"]')
  const submitButton = () => cy.get('#submitBtn')
  const cancelButton = () => cy.get('#cancelBtn')

  beforeEach(() => {
    cy.visit('http://localhost:1234')
  })

  it('renders properly', () => {
    textInput().should('exist')
    authorInput().should('exist')
    submitButton().should('exist')
    cancelButton().should('exist')
    cy.get('[name="yolo"').should('not.exist')
  })

  describe('Form functionality', () => {
    it('submit button is disabled intially', () => {
      submitButton().should('be.disabled')
    })

    it('can type in input and clear input', () => {
      const quote = "Coding is fun!"
      const author = "Ben"
      textInput().type(quote).should('have.value', quote)
      authorInput().type(author).should('have.value', author)

      cancelButton().click()
      textInput().should('have.value', '')
      authorInput().should('have.value', '')
    })

    it('can submit/edit/delete a new quote', () => {
      const quote = "Write tests. Not too many. Mostly integration"
      const author = "Guillermo Rauch"
      textInput().type(quote)
      authorInput().type(author)
      submitButton().click()

      const newQuote = () => cy.contains(quote)
      newQuote().should('exist')

      // Test Edit Functionality
      const amendedQuoteText = 'Coding is fun!'
      // click edit button
      newQuote().next().click()
      textInput().clear().type(amendedQuoteText)
      authorInput().clear().type('Ben')
      submitButton().click()

      const amendedQuote = () => cy.contains(amendedQuoteText)
      amendedQuote().should('exist')
      newQuote().should('not.exist') 

      // Test Delete Functionality
      // click delete button
      amendedQuote().next().next().click()
      amendedQuote().should('not.exist')
    })
  })
})