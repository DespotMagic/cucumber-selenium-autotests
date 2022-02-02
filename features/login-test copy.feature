# @restartBrowserEveryScenario
@only
Feature: Roko Dev Test Feature copy

    Scenario: Open public page 1 copy
        Given Opened "Public" page
        When nothing
        Then all ok

    @debug
    Scenario: Login test success 1 copy
        Given Opened "Login" page
        When Enter text "user@user.tu" in the field "email"
        And Enter text "pa$$word" in the field "password"
        And Click "log in" button
        And Wait "1s"
        Then all ok
