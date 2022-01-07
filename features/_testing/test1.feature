Feature: Test - open sites

    Scenario: Open google site 1
        Given Open url 'https://www.google.com/'
        When enter text 'cucumber-js'
        #send ESCAPE for hide autocomplete
        And send special key 'ESCAPE'
        And click search button
        Then the page title should start with 'cucumber-js'

    Scenario: Open google site 2
        Given Open url 'https://www.google.com/'
        When enter text 'selenium'
        #send ESCAPE for hide autocomplete
        And send special key 'ESCAPE'
        And click search button
        Then the page title should start with 'selenium'