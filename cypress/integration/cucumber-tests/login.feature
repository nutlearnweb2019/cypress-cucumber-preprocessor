Feature: Login to Application

    As invalid user
    I can not login to application

    As a valid user
    I want to login to application

    Scenario: Invalid login
        Given I open login page
        When I fill username with "invalid username"
        And I fill password with "invalid password"
        And I click on submit login
        Then I should see error message 

    Scenario: Valid login
        Given I open login page
        When I fill username with "username"
        And I fill password with "password"
        And I click on submit login
        Then I should see homepage