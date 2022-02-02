# @restartBrowserEveryScenario
@only
Feature: Roko Dev Test Feature

    Scenario: Open public page 1
        Given Opened "Public" page
        When nothing
        Then all ok


    Scenario: Login test success 1
        Given Opened "Login" page
        And Take screenshot and save with name "ololo"
        When Enter text "user@user.tu" in the field "email"
        And Enter text "pa$$word" in the field "password"
        And Take screenshot and save with name "ololo"
        And Click "log in" button
        And Wait "1s"
        Then all ok

    @debug
    Scenario: Login test 1 - fealure
        Given Opened "Login" page
        When Enter text "user@user.tu" in the field "email"
        # password-2 doesn't exist
        And Enter text "pa$$word" in the field "password-2"
        And Click "log in" button
        And Wait "1s"
        Then all ok