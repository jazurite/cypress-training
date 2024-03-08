import LoginPage from "../pages/loginPage";

const logindata = require("../../fixtures/login")

describe("Login test", ()=> {
    beforeEach("Open the login website", () => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // Prevent Cypress from failing the test
            return false;
        });
        cy.visit("/login")
        cy.get(LoginPage.userForm).should("be.visible")
    })
    it("TC1: Login success with correct credential", () => {
        cy.log(logindata)
        cy.get(LoginPage.userNameField).type(logindata.username)
        cy.get(LoginPage.passWordField).type(logindata.password)

        cy.get(LoginPage.loginBtn).click()

        cy.screenshot()

        cy.get(LoginPage.userForm).then(($el) => {
            $el.each(el => {

            })
        })
    })
})
