Feature: Login Test Feature

    @only
    Scenario: Login test 1
        Given Opened "Public" page
        When nothing
        Then all ok

    @only @debug
    Scenario: Login test 2
        Given Opened "Login" page
        When Enter text "user@user.tu" in the field "email"
        And Enter text "pa$$word" in the field "password-2"
        And Click "log in" button
        And Wait "1s"
        Then all ok

    @only
    Scenario: Login test 3
        Given Opened "Public" page
        When nothing
        Then all ok