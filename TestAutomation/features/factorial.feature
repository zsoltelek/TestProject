Feature: Calculate factorials
    In order to calculate factorials
    As a user
    I want to be able to use a factorials calculator

    Background:
        Given I am on the calculator page

    Scenario Outline: Calculate factorials with integers
        When I use the calculator with "<number>"
        Then I can see the result is "<result>"

        Examples:
            | number | result |
            | 0      | 1      |
            | 5      | 120    |
            | 8      | 40320  |

    Scenario Outline: Calculate factorials with non-integers
        When I use the calculator with invalid <input> input
        Then I can see a warning message instead of a result

        Examples:
            | input |
            | 5.4   |
            | @!&   |
            | test  |

    Scenario Outline: Navigate to links
        When I navigate to the "<link>" page
        Then I can see the "<url>" in the browser
        And I can see the "<text>" text

        Examples:
            | link                 | url      | text                                                                                 |
            | Terms and Conditions | /terms   | This is the terms and conditions document. We are not yet ready with it. Stay tuned! |
            | Privacy              | /privacy | This is the privacy document. We are not yet ready with it. Stay tuned!              |

    Scenario: Navigate to "QA for startups" page
        When I click on the "Qxf2 Services" links
        Then I am navigated to the "QA for startups" page