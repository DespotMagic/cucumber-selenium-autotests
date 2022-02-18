# @restartBrowserEveryScenario
@only
Feature: Roko Dev Test Feature

    Scenario: Open public page 1
        Given Opened "Public" page
        When nothing
        Then all ok

    Scenario: Login test success 1
        Given Opened "Login" page
        And Take screenshot and save with name "Before_user_login"
        When Enter text "user@user.ru" in the field "Username"
        And Enter text "pa$$word" in the field "Password"
        And Take screenshot and save with name "ololo"
        And Click "Sign in" button
        And Wait "1s"
        Then all ok

    @debug
    Scenario: Login test 1 - fealure
        Given Opened "Login" page
        When Enter text "user@user.ru" in the field "Username"
        # password-incorrect doesn't exist
        And Enter text "pa$$word" in the field "wrong field"
        And Click "Sign in" button
        And Wait "1s"
        Then all ok