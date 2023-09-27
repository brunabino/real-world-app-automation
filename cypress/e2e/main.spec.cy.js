import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/login-page'
import MainPage from '../pages/main-page'

const Chance = require('chance')

const chance = new Chance()
const loginPage = new LoginPage()
const mainPage = new MainPage()

describe('Login Real World App', () => {
  it('SignUp Success', () => {
    loginPage.accessLoginPage()
    loginPage.signUpUser(userData.signUpUser.firstName, userData.signUpUser.lastName, userData.userSuccess.username, userData.userSuccess.password, userData.userSuccess.password)
  })

  it('Login Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
    // mainPage.checkPopUpBox()
    mainPage.createBankAccountBox('bankTest', chance.string({ length: 9, numeric: true}), chance.ssn({ dashes: false}), 'test@email.com', '1234567890', 'bankNameTest', chance.string({ length: 9, numeric: true}), chance.ssn({ dashes: false}))
    
  })

}
)