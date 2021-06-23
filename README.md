# GitHub Stars

This project builds a single-page app that displays the top 100 most "starred" projects on GitHub.
Each project card has links to the project page and commits (up to 30) in the last 24 hours.
It fetches all project data from the [GitHub API](https://developer.github.com/v3/).

It is built on [React](https://reactjs.org/) and was created with [create-react-app](https://github.com/facebook/create-react-app).

## Features

* API requests are cached to improve perfomance and reduce bandwidth using [json-caching-proxy](https://www.npmjs.com/package/json-caching-proxy).
* Asynchronous requests are made using vanilla `fetch()`.
* Simple pagination – results are displayed by page, with the number per page being configurable (in source).
* Components are built using the [React Hooks API](https://reactjs.org/docs/hooks-intro.html).
* Unit testing is built on [Jest](https://jestjs.io/), including an example of mock API data that is fetched asynchronously.
* The design is (mostly) mobile-friendly and responsive.
* Basic accessibility is supported (tab order, image alt-text, color-contrast).

## To-Do

Things that are not done due to time constraints:

* The project does not use Redux (or any state management framework).  This would be beneficial
  a better approach as the amount of state shared between components grows
* The components use lots of ternary operators (`a ? b : c`), which is generally not a
  best practice for readability. Adding Redux would move state changes into reducers and
  eliminate the need for these.
* Configuration files – as the project is deployed to different environments, configuration should
  be moved to stand-alone files (`config-dev.json`, `config-prod.json`, etc) that are loaded by the
  build/deploy system.  Things like ports, proxy-cache settings, etc, should be set there and not
  hard-coded.
* SASS or SCSS – these allow for more elegant style sheets, with less redundancy
* More responsiveness – dedicated media queries should be added to allow for finer tuning
  of the app's behavior on different screen sizes.
* More accessibility – all the WCAG standards should be followed where possible, especially `aria` tags.
* Lots more unit test coverage.
* End-to-end tests – Cucumber, Webdriver.io, etc.

## Would-Be-Nice

Features that would probably make sense in a real-world project:

* More robust REST functions – A real-world REST data library should do more than just check that
  the result status is `200`.  It should intelligently handle redirects, have configurable caching
  settings, display network errors in a user friendly way (they are currently just logged to the browser
  console).
* Loading spinners – A full-page spinner that prevents the user from clicking more buttons/links while
  data is being fetched is important so that multiple asynchronous operations don't overlap in an unsafe
  way.
* Infinite scroll – the data returned from the GitHub API lends itself nicely to this approach.
  This would also eliminate the need for the ugly pagination control.

## Usage

Clone (or download) the repository, then run `npm install` to install dependencies.
Then, in the project directory, you can run:

`npm start`

Starts the proxy-cache and runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The proxy-cache will run on port 3001 and the console will display all cache activity as data is fetched.

`npm test`

Launches the test runner in the interactive watch mode.
