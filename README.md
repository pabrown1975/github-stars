# GitHub Stars

This project builds a single-page app that displays the top 100 most "starred" projects on GitHub.
It fetches data from the [GitHub API](https://developer.github.com/v3/).

## Features

* API requests are cached to improve perfomance and reduce bandwidth using json-proxy-cache.
* Asynchronous requests are made using vanilla `fetch()`.
* The project is built on React and was created with create-react-app.
* Components are built using the React Hooks API.
* The design is (mostly) mobile-friendly and responsive.
* Basic accessibility is supported (tab order, image alt-text, color-contrast)

## To-Do

Things that are not done due to time constraints:

* The project does not use Redux (or any state management framework).  This is generally
  a better approach when more state 

## Usage

Clone (or download) the repository.
Then, in the project directory, you can run:

`npm start`

Starts the proxy-cache and runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The proxy-cache will run on port 3001 and the console will display all cache activity as data is fetched.

`npm test`

Launches the test runner in the interactive watch mode.
