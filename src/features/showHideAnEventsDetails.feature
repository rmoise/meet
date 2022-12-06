Feature: Show/Hide an Event's Details

Scenario: An event element is collapsed by default
Given the list of events is open
When the user is viewing upcoming events
Then all event details should be hidden


Scenario: User can expand an event to see its details
Given the list of events is open
When the user clicks on show details
Then the event details of that event should be shown


Scenario: User can collapse an event to hide its details
Given the user has viewed an event
When the user clicks on hide details
Then the user should be able to hide an event by clicking on the hide details button