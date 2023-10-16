import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import LoginPage from './login-Page.cy'

Given('I open login page', () => {
    LoginPage.visit()
    //cy.visit('http://zero.webappsecurity.com/login.html')
})
// When('I submit login', () => {
//     LoginPage.fillUsername('username')
//     LoginPage.fillPassword('password')
//     LoginPage.submit()
//     cy.get('#user_login').type('username')
//     cy.get('#user_password').type('password')
//     cy.get('input[name="submit"]').click()
// })
When('I fill username with {string}', username => {
    LoginPage.fillUsername(username)
})
When('I fill password with {string}', password => {
    LoginPage.fillPassword(password)
})
When('I click on submit login', () => {
    LoginPage.submit()
})
Then('I should see homepage', () => {  
    cy.get('#account_summary_tab').should('be.visible')
})
Then('I should see error message', () => {
    LoginPage.showErrorMessage()
})