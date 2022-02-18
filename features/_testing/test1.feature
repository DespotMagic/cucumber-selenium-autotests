Feature: Test - open sites

    Scenario: Open google site 1
        Given test1 Open url "https://www.google.com/"
        When test1 enter text "cucumber-js"
        #send ESCAPE for hide autocomplete
        And test1 send special key "ESCAPE"
        And test1 click search button
        Then test1 the page title should start with "cucumber-js"

    Scenario: Open google site 2
        Given test1 Open url "https://www.google.com/"
        When test1 enter text "selenium"
        #send ESCAPE for hide autocomplete
        And test1 send special key "ESCAPE"
        And test1 click search button
        Then test1 the page title should start with "selenium"