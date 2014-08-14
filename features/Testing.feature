Feature: Testing
  As a grunt-cucumber-js dev
  I want a Testing.feature file
  So that I can test the cucumber-js-task

  Scenario: A test scenario
    Given I have the number 1 and 3
    When I add them together
    Then I should have 4

  Scenario: An other test scenario
    Given I have the object '{"x": 1}'
    When I extend previus object with the object '{"y": 2}'
    Then I should have the object '{"x": 1, "y": 2}'

  Scenario: An other undefiend
    Given I have a undefined Scenario
    When I set coffee option 
    Then I see this on coffee
