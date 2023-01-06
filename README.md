<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/rmoise/simple-js-app">
    <img src="img/logo-readme.png" alt="Logo" width="80" height="80">
  </a>

  <h1 align="center">Meet App - Technical Case Study</h1>

  <p align="center">
    <a href="https://rmoise.github.io/meet/">View Demo</a>
    ·
    <a href="https://github.com/rmoise/meet/issues">Report Bug</a>
    ·
    <a href="https://github.com/rmoise/meet/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#objective">Objective</a>
        <li><a href="#context">Context</a></li>
    </li>
    <li><a href="#the-5-ws">The 5 Ws</a></li>
       <li><a href="#user-stories">User Stories</a></li>
        <ul>
    </li>
    </ul>
     <li><a href="#technical-requirements">Technical Requirements</a>
    <li><a href="#features">Features</a>
    <li><a href="#built-with">Built With</a></li>
  </ol>
</details>

## Objective

Build a serverless, progressive web application (PWA) with React using test-driven development (TDD) techniques.

[![myFlix client screenshot][product-screenshot]](https://myflix-movie-client-react.netlify.app/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Context

Serverless and PWAs have grown in popularity over the last few years, and both are considered the future of web development. By combining these two concepts, this app will not only work as a standard web application, but it will also reap the benefits of both serverless architecture and PWAs:

- Serverless: No backend maintenance, easy to scale, always available, no cost for idle time
- PWAs: Instant loading, offline support, push notifications, "add to home screen" prompt, responsive design, and cross-platform compatibility.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## The 5 W's

- Who? — The users of your Meet application. They could be my friends, my professional network, or my potential employers
- What? — A progressive web app with the ability to work offline and a serverless backend developed using a TDD technique
- When? — Users of this app will be able to use it whenever they want to view upcoming events for a specific city. My recruiter will be able to see your code immediately on GitHub
- Where? — The server, in this case, is a serverless function hosted by a cloud provider (e.g., AWS). The application itself is also hosted online to make it shareable and installable. It can
  be used even when the user is offline. As it's responsive, it displays well on any device
- Why? — Serverless is the next generation of cloud infrastructure, PWA provides excellent user experience and performance, and the TDD technique ensures I've built quality code with adequate test coverage.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## User Stories

- As a user, I should be able to filter events by city so that I can see the list of events that take place in that city
- As a user, I should be able to show/hide event details so that I can see more/less information about an event
- As a user, I should be able to specify the number of events I want to view in the app so that I can see more or fewer events in the events list at once
- As a user, I should be able to use the app when offline so that I can see the events I viewed the last time I was online
- As a user, I should be able to add the app shortcut to my home screen so that I can open the app faster
- As a user, I should be able to see a chart showing the upcoming events in each city to know what events are organized in which city.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Technical Requirements

- The app must be a React application
- The app must be built using the TDD technique
- The app must use the Google Calendar API and OAuth2 authentication flow
- The app must use serverless functions (AWS lambda is preferred) for the authorization server instead of using a traditional server
- The app's code must be hosted in a Git repository on GitHub
  The app must work on the latest versions of Chrome, Firefox, Safari, Edge, Opera, and IE11
- The app must display well on all screen sizes (including mobile and tablet) with widths of 1920px and 320px
- The app must pass Lighthouse's PWA checklist
- The app must work offline or in slow network conditions with the help of a service worker
- Users may be able to install the app on desktop and add the app to their home screen on mobile
- The app must be deployed on GitHub Pages
- The API call must use React Axios, and async/await
- The app must implement an alert system using an OOP approach to show information to the user
- The app must make use of data visualization (recharts preferred)
- Tests must cover the app with a coverage rate >= 90%
- The app must be monitored using an online monitoring tool.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

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

- **Given** the list of events is open

- **When** the user is viewing upcoming events

- **Then** Then all event details should be hidden
  <br></br>

**Scenario 2:** User can expand an event to see its details

- **Given** the list of events is open

- **When** the user clicks on show details

- **Then** the event details of that event should be shown
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

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

<!-- prettier-ignore -->
* [![React][react.org]][react-url]
* [![aws.amazon][aws.amazon.com]][aws-url]
* [![google-cloud][google-cloud]][google-url]
* [![jest][jest]][jest-url]
* [![Bootstrap][bootstrap.com]][bootstrap-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

[react.org]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[react-url]: https://reactjs.org
[aws.amazon.com]: https://img.shields.io/badge/Amazon_AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white
[aws-url]: https://aws.amazon.com/
[google-cloud]: https://img.shields.io/badge/Google_Cloud-4285F4?style=for-the-badge&logo=google-cloud&logoColor=white
[google-url]: https://cloud.google.com/
[jest]: https://img.shields.io/badge/Jest-323330?style=for-the-badge&logo=Jest&logoColor=white
[jest-url]: https://jestjs.io/
[bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[bootstrap-url]: https://getbootstrap.com
[product-screenshot]: img/meet-app-screenshot.png
