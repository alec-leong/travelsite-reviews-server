# tripadvisor-reviews-server

## Table of Contents

1. [About](#about)
    - [Main Development Dependencies](#main-development-dependencies)
    - [Technologies](#technologies)
2. [Getting Started](#getting-started)
    1. [Install dependencies and development dependencies](#1-install-dependencies-and-development-dependencies)
    2. [Populate MongoDB database](#2-populate-mongodb-database)
    3. [Start webpack](#3-start-webpack)
    4. [Open a new terminal](#4-open-a-new-terminal)
    5. [Start Express.js server](#5-start-expressjs-server)
3. [Tests](#tests)
    - [Test App.jsx](#test-appjsx)
    - [Test Search.jsx](#test-searchjsx)
    - [Test Seed](#test-seed)
    - [Test Server](#test-server)
4. [Conversation](#conversation)

---

## About

### Main Development Dependencies

| DevDependency | Version |
| ------------- | :-----: |
| @babel        | 7       |
| enzyme        | 3       |
| jest          | 25      |
| react         | 16      |
| webpack       | 4       |

### Technologies
- React
- NodeJS
- ExpressJS
- MongoDB
- JavaScript
- Enzyme
- Jest

---

## Getting Started

### 1. Install dependencies and development dependencies

```sh
  npm install
```

#### &emsp;&emsp;&emsp;&emsp;_node_modules_ directory is now added

```text
        .
        └── node_modules
```

### 2. Populate MongoDB database

```sh
  npm run seed
```

### 3. Start webpack

```sh
  npm run react-dev
```

#### &emsp;&emsp;&emsp;&emsp;_bundle.js_ is now compiled

```text
        .
        └── client
            └── dist
                ├── index.html
                └── bundle.js
```

### 4. Open a new terminal

### 5. Start Express.js server

```sh
  npm run server-dev
```

#### &emsp;&emsp;&emsp;&emsp;Now visit _[http://localhost:3004/](http://localhost:3004/)_ to see the React application

---

## Tests

### Test App.jsx

#### Pre-requisite-App

1. complete [_Getting_ _Started_](#getting-started) setup

```sh
  npm run test:react-app
```

#### &emsp;&emsp;&emsp;_App.test.jsx.snap_ is now created; output of test results

```text
        .
        └── test
            └── __snapshots__
                └── App.test.jsx.snap
```

### Test Search.jsx

#### Pre-requisite-Search

1. complete [_Getting_ _Started_](#getting-started) setup
2. terminate the terminal running [_npm_ _run_ _server-dev_](#5-start-expressjs-server)

```sh
  npm run test:react-search
```

#### &emsp;&emsp;&emsp;Output of test results in _tests_output_ directory

```text
        .
        └── tests_output
```

### Test Seed

#### Pre-requisite-Seed

1. complete [_Getting_ _Started_](#getting-started) setup

```sh
  npm run test:seed
```

### Test Server

#### Pre-requisite-Server

1. Chrome version 83 or lower
2. complete [_Getting_ _Started_](#getting-started) setup
3. terminate the terminal running [_npm_ _run_ _server-dev_](#5-start-expressjs-server)

```sh
  npm run test:server
```

---

## [Conversation](https://www.youtube.com/watch?v=sSD-YE4KlrM)

[![HRSF127 | FEC | Group 12: NoStepOnSnek | Final](https://img.youtube.com/vi/sSD-YE4KlrM/0.jpg)](https://www.youtube.com/watch?v=sSD-YE4KlrM "HRSF127 | FEC | Group 12: NoStepOnSnek | Final")

### [Click here to view video](https://www.youtube.com/watch?v=sSD-YE4KlrM)
