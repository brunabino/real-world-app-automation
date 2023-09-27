import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/login-page'
import MainPage from '../pages/main-page'

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
    mainPage.checkPopUpBox()
  })

  it('Login Failure', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userFailure.username, userData.userFailure.password)
    loginPage.checkAcessInvalid()
  })
}
)