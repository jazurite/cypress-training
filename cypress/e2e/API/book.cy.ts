import {timestampToMillisecondsSinceEpoch} from "@cucumber/messages/dist/cjs/src/TimeConversion";

const api = require("../../fixtures/api");
const credential = require("../../fixtures/credential");

describe("Book API Testing", () => {
    let userId = "509c88a5-1c2d-4f7d-8fa3-5d6df7f251c0",
        accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6ImphY2siLCJwYXNzd29yZCI6IkBuZnFBc2lhMjAyMSEiLCJpYXQiOjE3MDk4NjU2MDh9.H7A5uBaW7WgkegNcDfmn3O9fWj8J0ZmYo_Z2eKyyLCY"

    it("Get all books", () => {
        cy.request({
            method: "GET",
            url: api.books
        }).then((response) => {
            cy.log(JSON.stringify(response.body));

            expect(response.status).to.eq(200)
        })
    })

    it("Add book", () => {
        const randomN = (new Date(Date.now())).valueOf()
        cy.request({
            method: "POST",
            url: api.books,
            body: {
                "collectionOfIsbns": [
                    {
                        "isbn": randomN + ""
                    }
                ]
            },
            headers: {
                "Authorization": `Bearer ${accessToken}`
            }
        }).then((response) => {
            cy.log(response.body);

            // expect(response.status).to.eq(200)
            cy.log(JSON.stringify(response.body))
        })
    })
})
