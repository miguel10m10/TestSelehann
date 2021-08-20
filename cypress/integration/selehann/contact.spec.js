/// <reference types="cypress" />
import ContactPage from '../../support/PageObjects/contactPage';

describe('Selehann Website', () => {
  
  let testData
  const contactPage = new ContactPage();

  beforeEach(function(){

    cy.visit(Cypress.config('baseUrl'))
  
    cy.fixture('contact').then(function(dataJson){
      testData = dataJson
      return testData
    })
  })
/*
  it('Send Contact Form Successful', () => {

    //Form values
    contactPage.btnMenuContact().click()
    contactPage.inputName().type(testData.name)
    contactPage.inputLastname().type(testData.lastname)
    contactPage.inputEmail().type(testData.email)
    contactPage.inputMessage().type(testData.message)
    //Send form
    contactPage.btnSubmit().click()
    //visible Message Validation
    contactPage.lblSent().should('be.visible')

  })

  it('Send Contact Form without name', () => {

    //Form values
    contactPage.btnMenuContact().click()
    contactPage.inputLastname().type(testData.lastname)
    contactPage.inputEmail().type(testData.email)
    contactPage.inputMessage().type(testData.message)
    //disabled button validation
    contactPage.btnSubmit().should('be.disabled')

  })

  it('Send Contact Form without lastname', () => {

    //Form values
    contactPage.btnMenuContact().click()
    contactPage.inputName().type(testData.name)
    contactPage.inputEmail().type(testData.email)
    contactPage.inputMessage().type(testData.message)
    //disabled button validation
    contactPage.btnSubmit().should('be.disabled')

  })

  it('Send Contact Form without email', () => {

    //Form values
    contactPage.btnMenuContact().click()
    contactPage.inputName().type(testData.name)
    contactPage.inputLastname().type(testData.lastname)
    contactPage.inputMessage().type(testData.message)
    //disabled button validation
    contactPage.btnSubmit().should('be.disabled')

  })

  it('Send Contact Form without message', () => {

    //Form values
    contactPage.btnMenuContact().click()
    contactPage.inputName().type(testData.name)
    contactPage.inputLastname().type(testData.lastname)
    contactPage.inputEmail().type(testData.email)
    //disabled button validation
    contactPage.btnSubmit().should('be.disabled')

  })

  it('Send Contact Form without name and lastname', () => {

    //Form values
    contactPage.btnMenuContact().click()
    contactPage.inputMessage().type(testData.message)
    contactPage.inputEmail().type(testData.email)
    //disabled button validation
    contactPage.btnSubmit().should('be.disabled')

  })

  it('Send Contact Form without name, lastname and email', () => {

    //Form values
    contactPage.btnMenuContact().click()
    contactPage.inputMessage().type(testData.message)
    //disabled button validation
    contactPage.btnSubmit().should('be.disabled')

  })

  it('Send Contact Form without any fields', () => {

    //Form values
    contactPage.btnMenuContact().click()
    //disabled button validation
    cy.wait(3000)
    contactPage.btnSubmit().should('be.disabled')

  })
*/
  it('Email format validation for contact form', () => {

    /*
    I can create custom commands and reuse the email validation functions 
    (for example) but for this exercise it's inside the this test case

    - validateEmail function 
    */

    //Form values
    contactPage.btnMenuContact().click()
    cy.wait(3000)

    const validateEmail = (email) => {
        var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return re.test(email);
    }
    contactPage.inputName().type(testData.name)
    contactPage.inputLastname().type(testData.lastname)
    contactPage.inputEmail().type(testData.invalidEmail)
    contactPage.inputMessage().type(testData.message)

    const EmailState = validateEmail(testData.invalidEmail)

    if(!EmailState){
        contactPage.btnSubmit().should('be.disabled')
    }else{
        contactPage.btnSubmit().should('not.be.disabled')
    }

  })
})
