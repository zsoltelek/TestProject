Feature: Calculate factorials
    In order to calculate factorials
    As a user
    I want to be able to use the factorials calculator

    Background:
        Given I am on the calculator page

    Scenario Outline: Calculate factorials with integers
        When I use the calculator with "<number>"
        Then I can see the result is "<result>"

        Examples:
            | number | result                 |
            | 0      | 1                      |
            | 5      | 120                    |
            | 8      | 40320                  |
            | 59     | 1.3868311854568984e+80 |
            | 250    | Infinity               |

    Scenario Outline: Calculate factorials with non-integers
        When I use the calculator with invalid <input> input
        Then I can see a warning message instead of a result

        Examples:
            | input |
            | 5.4   |
            | @!&   |
            | test  |