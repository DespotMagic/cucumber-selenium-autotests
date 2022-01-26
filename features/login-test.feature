Feature: Login Test Feature

    @only
    Scenario: Login test 1
        Given Open page "Public"
        When nothing
        #send ESCAPE for hide autocomplete
        Then all ok

    @only @debug
    Scenario: Login test 2
        Given Open page "Login"
        When nothing
        #send ESCAPE for hide autocomplete
        Then all ok

    @only
    Scenario: Login test 3
        Given Open page "Public"
        When nothing
        #send ESCAPE for hide autocomplete
        Then all ok