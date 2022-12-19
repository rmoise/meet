# Meet App

## Features

### 1. Filter Events by City

> **User Story:** As a User, I should be able to filter events by city so that I can see the list of events that take place in that city.

<br />

**Scenario 1:** When user hasn't searched for a city, show upcoming events from all cities.

- **Given** user hasn’t searched for any city

- **When** the user opens the app

- **Then** the user should see a list of all upcoming events
  <br></br>

**Scenario 2:** User should see a list of suggestions when they search for a city.

- **Given** the main page is open

- **When** user starts typing in the city textbox

- **Then** the user should see a list of cities (suggestions) that match what they’ve typed
  <br></br>

**Scenario 3:** User can select a city from the suggested list

- **Given** the user was typing “Berlin” in the city textbox and the list of suggested cities is showing

- **When** the user selects a city (e.g., “Berlin, Germany”) from the list

- **Then** their city should be changed to that city (i.e., “Berlin, Germany”) and the user should receive a list of upcoming events in that city
  <br></br>

### 2. Show/Hide an Event's Details

> **User Story:** As a User, I should be able to show/hide event details so that I can see more/less information about an event.

<br />

**Scenario 1:** An event element is collapsed by default

- **Given** the user has searched a city

- **When** the user is viewing upcoming events

- **Then** the user should see a show details button for each upcoming event
  <br></br>

**Scenario 2:** User can expand an event to see its details

- **Given** the user has viewed an event

- **When** the user clicks on show details

- **Then** the user should be able to expand an event by clicking on the show details button
  <br></br>

**Scenario 3:** User can collapse an event to hide its details

- **Given** the user has viewed an event

- **When** the user clicks on hide details

- **Then** the user should be able to hide an event by clicking on the hide details button
  <br></br>

### 3. Specify Number of Events

> **User Story:** As a User, I should be able to specify the number of events I want to view in the app so that I can see more or fewer events in the events list at once.

<br />

**Scenario 1:** When user hasn’t specified a number, 32 is the default number

- **Given** user hasn’t specified a number of events

- **When** the user searches a city

- **Then** a list of 32 events should be shown
  <br></br>

**Scenario 2:** User can change the number of events they want to see

- **Given** user starts typing a number from the number of events filter

- **When** the user has entered a specified number for events

- **Then** their list of events should be changed to show the specified amount of events they entered
  <br></br>

### 4. Use the App When Offline

> **User Story:** As a User, I should be able to use the app when offline so that I can see the events I viewed the last time I was online.

<br />

**Scenario 1:** Show cached data when there’s no internet connection

- **Given** user has no internet connection

- **When** the user opens the app

- **Then** the user should be able to view what they last saw when online
  <br></br>

**Scenario 2:** Show error when user changes the settings (city, time range)

- **Given** user has no internet connection

- **When** the user changes the user settings(city, time range)

- **Then** the user should get an error message displaying no internet access
  <br></br>

### 5. Data Visualization

> **User Story:** As a User, I should be able to see a chart showing the upcoming events in each city so that I know what events are organized in which city.

<br />

**Scenario 1:** Show a chart with the number of upcoming events in each city

- **Given** user hasn’t searched for any city

- **When** the user opens the app

- **Then** the user should be able to view a chart showing the number of upcoming events by city
