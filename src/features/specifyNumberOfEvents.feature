Feature: Specify Number of Events

Scenario: When user hasn’t specified a number, 32 is the default number
Given user hasn’t specified a number of events
When the user searches a city
Then a list of 32 events should be shown


Scenario: User can change the number of events they want to see
Given user starts typing a number from the number of events filter
When the user has entered a specified number for events
Then their list of events should be changed to show the specified amount of events they entered
