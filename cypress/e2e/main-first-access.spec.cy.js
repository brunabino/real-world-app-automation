import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/login-page'
import MainPage from '../pages/main-page'

const Chance = require('chance')

const chance = new Chance()
const loginPage = new LoginPage()
const mainPage = new MainPage()

describe('Login Real World App', () => {
  it('Login Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
    mainPage.checkPopUpBox()
    mainPage.createBankAccountBox('bankTest', chance.string({ length: 9, numeric: true}), chance.ssn({ dashes: false}), chance.email(), chance.phone(), chance.string({ length: 5, pool: 'abcde'}), chance.string({ length: 9, numeric: true}), chance.string({ length:10}) )
  })

}
)