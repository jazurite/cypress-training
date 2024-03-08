const api = require("../../fixtures/api");
const credential = require("../../fixtures/credential");

describe("Account API testing", () => {
    let userId = "",
        accessToken = ""

    it("TC1: Log in user success", () => {
        cy.request({
            method: "POST",
            url: api.login,
            body: {
                userName: credential.username,
                password: credential.password
            }
        }).then((response) => {
            cy.log(JSON.stringify(response.body));

            expect(response.status).to.eq(200)
            // const res = JSON.parse(response.body)
            userId = response.body.userId
            accessToken = response.body.token
        })
    })

    it("TC2: Get in user profile", () => {
        cy.request({
            method: "GET",
            url: api.getProfile + userId,
            headers: {
                "Authorization": `Bearer ${accessToken}`
            }
        }).then((response) => {
            cy.log(response.body);

            expect(response.status).to.eq(200)
            cy.log(JSON.stringify(response.body))
        })
    })
})
