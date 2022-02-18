# @restartBrowserEveryScenario
@only
Feature: Roko Dev Test Feature copy

    Scenario: COPY Open public page 1 copy
        Given Opened "Public" page
        When nothing
        Then all ok

    Scenario: COPY Login test success 1
        Given Opened "Login" page
        When Enter text "user@user.ru" in the field "Username"
        And Enter text "pa$$word" in the field "Password"
        And Click "Sign in" button
        And Wait "1s"
        Then all ok

    Scenario: COPY Login test 1 - fealure
        Given Opened "Login" page
        When Enter text "user@user.ru" in the field "Username"
        # password-incorrect doesn't exist
        And Enter text "pa$$word" in the field "wrong field"
        And Click "Sign in" button
        And Wait "1s"
        Then all ok