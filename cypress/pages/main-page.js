class MainPage {
    selectorList() {
        const selector = {
            popUpBox: "[data-test='user-onboarding-dialog-content']",
            nextPopUpButton: "[data-test='user-onboarding-next']",
            createBankAccountBox: "[data-test='user-onboarding-dialog-title']",
            bankNameField: "[data-test='bankaccount-bankName-input']",
            routingNumberField: "[data-test='bankaccount-routingNumber-input']",
            accountNumberField: "[data-test='bankaccount-accountNumber-input']",
            createBankAccountSaveButton: "[data-test='bankaccount-form'] [data-test='bankaccount-submit']",
            doneButton: "[data-test='user-onboarding-next']",
            navGenericBar: "[data-test='nav-public-tab']",
            createTransactionButton: "[data-test='transaction-list-empty-create-transaction-button']",
            createBankAccountButton: "[data-test='bankaccount-new']",
            myAccountMenuButton: "[data-test='sidenav-user-settings']",
            emailField: "[data-test='user-settings-email-input']",
            phoneNumberField: "[data-test='user-settings-phoneNumber-input']",
            userSettingsSaveButton: "[data-test='user-settings-phoneNumber-input']",
            bankAccountMenuButton: "[data-test='sidenav-bankaccounts']",
            notificationsMenuButton: "[data-test='sidenav-bankaccounts']",
            logoutMenuButton: "[data-test='sidenav-signout']",
            homeMenuButton: "[data-test='sidenav-home']",
            navFriendsBar: "[data-test='nav-contacts-tab']",
            navMineBar: "[data-test='nav-personal-tab']",
            deleteBankAccountButton: "[data-test='bankaccount-delete']",


        }
        
        return selector;

    }

    checkPopUpBox() {
        // cy.get(this.selectorList().popUpBox).should('be.visible');
        // cy.get(this.selectorList().nextPopUpButton).click();
    }

    createBankAccountBox(bankName, routingNumber, accountNumber, email, phoneNumber, bank, routing, account) {
        // cy.get(this.selectorList().createBankAccountBox).should('be.visible');
        // cy.get(this.selectorList().bankNameField).type(bankName);
        // cy.get(this.selectorList().routingNumberField).type(routingNumber);
        // cy.get(this.selectorList().accountNumberField).type(accountNumber);
        // cy.get(this.selectorList().createBankAccountSaveButton).click();
        // cy.get(this.selectorList().doneButton).click();
        cy.get(this.selectorList().navGenericBar).should('be.visible');
        cy.get(this.selectorList().myAccountMenuButton).click({ force: true });
        cy.get(this.selectorList().emailField).type(email);
        cy.get(this.selectorList().phoneNumberField).type(phoneNumber);
        cy.get(this.selectorList().userSettingsSaveButton).click();
        cy.get(this.selectorList().bankAccountMenuButton).click();
        cy.get(this.selectorList().createBankAccountButton).click();
        cy.get(this.selectorList().bankNameField).type(bank);
        cy.get(this.selectorList().routingNumberField).type(routing);
        cy.get(this.selectorList().accountNumberField).type(account);
        cy.get(this.selectorList().createBankAccountSaveButton).click();
        cy.get(this.selectorList().deleteBankAccountButton).eq(1).click();
        cy.get(this.selectorList().homeMenuButton).click();
        cy.get(this.selectorList().navFriendsBar).click();
        cy.get(this.selectorList().navMineBar).click();
        cy.get(this.selectorList().logoutMenuButton).click();
    }
}

export default MainPage