# meet

### **FEATURE 1:** FILTER EVENTS BY CITY

<br />

>**User Story:** As a User, I should be able to filter events by city so that I can see the list of events that take place in that city.

<br />

 **SCENARIO 1:** WHEN USER HASN’T SEARCHED FOR A CITY, SHOW UPCOMING EVENTS FROM ALL CITIES.
>
> **Given** user hasn’t searched for any city
>
> **When** the user opens the app
>
> **Then** the user should see a list of all upcoming events

<br />

 **SCENARIO 2:** USER SHOULD SEE A LIST OF SUGGESTIONS WHEN THEY SEARCH FOR A CITY.
>
> **Given** the main page is open
>
> **When** user starts typing in the city textbox
>
> **Then** the user should see a list of cities (suggestions) that match what they’ve typed

<br />

 **SCENARIO 3:** USER CAN SELECT A CITY FROM THE SUGGESTED LIST.
>
> **Given** the user was typing “Berlin” in the city textbox
> And the list of suggested cities is showing
>
> **When** the user selects a city (e.g., “Berlin, Germany”) from the list
>
> **Then** their city should be changed to that city (i.e., “Berlin, Germany”)
> And the user should receive a list of upcoming events in that city

<br />
<br />

### **FEATURE 2:** SHOW/HIDE AN EVENT'S DETAILS

<br />

> **User Story:** As a User, I should be able to show/hide event details so that I can see more/less information about an event.

<br />

**SCENARIO 1:** AN EVENT ELEMENT IS COLLAPSED BY DEFAULT

> **Given** the user has searched a city
>
> **When** the user is viewing upcoming events
>
> **Then** the user should see a show details button for each upcoming event

<br />

**SCENARIO 2:** USER CAN EXPAND AN EVENT TO SEE ITS DETAILS

> **Given** the user has viewed an event
>
> **When** the user clicks on show details
>
> **Then** the user should be able to expand an event by clicking on the show details button

<br />

**SCENARIO 3:** USER CAN COLLAPSE AN EVENT TO HIDE ITS DETAILS

> **Given** the user has viewed an event
>
> **When** the user clicks on hide details
>
> **Then** the user should be able to hide an event by clicking on the hide details button

<br />
<br />

### **FEATURE 3:** SPECIFY NUMBER OF EVENTS

<br />

> **User Story:** As a User, I should be able to specify the number of events I want to view in the app so that I can see more or fewer events in the events list at once.

<br />

**SCENARIO 1:** WHEN USER HASN'T SPECIFIED A NUMBER, 32 IS THE DEFAULT NUMBER

> **Given** user hasn’t specified a number of events
>
> **When** the user searches a city
>
> **Then** a list of 32 events should be shown

<br />

**SCENARIO 2:** USERS CAN CHANGE THE NUMBER OF EVENTS THEY WANT TO SEE

> **Given** user starts typing a number from the number of events filter
>
> **When** the user has entered a specified number for events
>
> **Then** their list of events should be changed to show the specified amount of events they entered

<br />
<br />

### **FEATURE 4:** USE THE APP WHEN OFFLINE

<br />

> **User Story:** As a User, I should be able to use the app when offline so that I can see the events I viewed the last time I was online.

<br />

**SCENARIO 1:** SHOW CACHED DATA WHEN THERE'S NO INTERNET CONNECTION

> **Given** user has no internet connection
>
> **When** the user opens the app
>
> **Then** the user should be able to view what they last saw when online

<br />

**SCENARIO 2:** SHOW ERROR WHEN USER CHANGES THE SETTINGS(CITY, TIME RANGE)

> **Given** user has no internet connection
>
> **When** the user changes the user settings(city, time range)
>
> **Then** the user should get an error message displaying no internet access

<br />
<br />

### **FEATURE 5:** DATA VISUALIZATION

<br />

> **User Story:** As a User, I should be able to see a chart showing the upcoming events in each city so that I know what events are organized in which city.

<br />

**SCENARIO 1:** SHOW A CHART WITH THE NUMBER OF UPCOMING EVENTS IN EACH CITY

> **Given** user hasn’t searched for any city
>
> **When** the user opens the app
>
> **Then** the user should be able to view a chart showing the number of upcoming events by city
