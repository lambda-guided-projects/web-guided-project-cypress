// describe block "describes" our collection of tests
describe('Quote App', () => {

  beforeEach(() => {
    // console.log(`random int: ${Math.random()}`)
    cy.visit('/')
  })

  // it represents the test itself
  it('sanity check', () => {
    // expect is an assertion
    // we can have many assertions in a test
    expect(2 + 2).to.equal(4)
    expect(2 + 2).not.to.equal(5)
  })

  it('sanity check 2', () => {
    expect([1,2,3].length).to.equal(3)
  })

  const textInput = () => cy.get('[name="text"]')
  const authorInput = () => cy.get('[name="author"]')
  const submitButton = () => cy.get('#submitBtn')
  const cancelButton = () => cy.get('#cancelBtn')
  //write a test that inputs are there
  it('input fields rendering', () => {
    textInput().should('exist')
    authorInput().should('exist')
  })

  it('buttons are rendering', () => {
    submitButton().should('exist')
    cancelButton().should('exist')
  })

  //write a test for making sure that we can add a new quote
  it('make sure we can add a new quote', () => {
    const quote = 'Injustice anywhere is a threat to justice everywhere.'
    textInput().type(quote)
    authorInput().type('MLK')
    submitButton().click()

    //clean up added data
    //tests that we can delete a quote
    cy.contains(quote).siblings('button:nth-of-type(2)').click()
    cy.contains(quote).should('not.exist')
  })

  //write a test for making sure that we can edit quote
  it('make sure we can edit a quote', () => {
    cy.get('[data-cy=editBtn0]').click()
    authorInput().clear().type('Theodor Giesel')
    submitButton().click()

    cy.contains('Theodor Giesel').should('exist')

    //clean up
    cy.get('[data-cy=editBtn0]').click()
    authorInput().clear().type('Dr. Seuss')
    submitButton().click()
  })

  it('make sure cancel with clear form', () => {
    cy.get('[data-cy=editBtn0]').click()
    authorInput().clear().type('asdf')
    cancelButton().click()
    cy.contains('asdf').should('not.exist')
    authorInput().should('be.empty') 
    textInput().should('be.empty')
  })

})