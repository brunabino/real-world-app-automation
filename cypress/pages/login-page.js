class LoginPage {
    selectorList() {
        const selector = {
            signInSign: ".MuiTypography-h5",
            usernameField: "[data-test='signin-username']",
            passwordField: "[data-test='signin-password']",
            rememberMeBox: "[data-test='signin-remember-me']",
            signInButtom: "[data-test='signin-submit']",
            wrongCredentialAlert: "[data-test='signin-error']",
            signUpUser: "[data-test='signup']",
            firstNameSignUpField: "[data-test='signup-first-name']",
            lastNameSignUpField: "[data-test='signup-last-name']",
            usernameSignUpField: "[data-test='signup-username']",
            passwordSignUpField: "[data-test='signup-password']",
            confirmPasswordSignUpField: "[data-test='signup-confirmPassword']",
            signUpButtom: "[data-test='signup-submit']",              
        }

        return selector;
    }
    accessLoginPage() {
        cy.visit('http://localhost:3000/signin')
    }

    loginWithAnyUser(username, password) {
        cy.get(this.selectorList().usernameField).type(username);
        cy.get(this.selectorList().passwordField).type(password);
        cy.get(this.selectorList().rememberMeBox).click();
        cy.get(this.selectorList().signInButtom).click();
    }

    checkAcessInvalid() {
        cy.get(this.selectorList().wrongCredentialAlert).should('be.visible');
    }

    signUpUser(firstName, lastName, username, password, confirmPassword) {
        cy.get(this.selectorList().signUpUser).click();
        cy.get(this.selectorList().firstNameSignUpField).type(firstName);
        cy.get(this.selectorList().lastNameSignUpField).type(lastName);
        cy.get(this.selectorList().usernameSignUpField).type(username);
        cy.get(this.selectorList().passwordSignUpField).type(password);
        cy.get(this.selectorList().confirmPasswordSignUpField).type(confirmPassword);
        cy.get(this.selectorList().signUpButtom).click();
        cy.get(this.selectorList().signInSign).should('be.visible');
    }

}

export default LoginPage