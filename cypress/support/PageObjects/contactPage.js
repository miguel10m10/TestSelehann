class ContactPage {
    btnMenuContact() {
        return cy.contains('contact');
    }
    inputName(){
        return cy.get('#name');
    }
    inputLastname(){
        return cy.get('#lastname');
    }
    inputEmail(){
        return cy.get('#email');
    }
    inputMessage() {
        return cy.get('#message');
    }
    btnSubmit() {
        return cy.get('button[type="submit"]');
    }
    lblSent() {
        return cy.contains('Sent');
    }

    
    }
    export default ContactPage