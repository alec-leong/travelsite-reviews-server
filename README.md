# tripadvisor-reviews-server

## About


### Main Development Dependencies

| DevDependency | Version |
| ------------- | :-----: |
| @babel        | 7       |
| jest          | 25      |
| react         | 16      |
| webpack       | 4       |

---

## Getting Started

### 1. Install dependencies and development dependencies

```sh
  npm install
```

#### &emsp;&emsp;&emsp;&emsp;_node_modules_ directory is now added

```
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

```
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

#### &emsp;&emsp;&emsp;&emsp;Now visit _[http://localhost:3004/](http://localhost:3004/)_ to see the React application.

---

## Test App.jsx

### Pre-requisite: complete _Getting_ _Started_ setup

```sh
  npm run test:react-app
```

### &emsp;&emsp;&emsp;_App.test.jsx.snap_ is now created; output of test results

```
        .
        └── test
            └── __snapshots__
                └── App.test.jsx.snap
```

--- 

## Test Search.jsx

### Pre-requisite: 
1. complete _Getting_ _Started_ setup
2. terminate the terminal running _npm_ _run_ _server-dev_

```
  npm run test:react-search
```

### &emsp;&emsp;&emsp;Output of test results in _tests_output_ directory

```
        .
        └── tests_output
```

---

## Test Seed

### Pre-requisite: complete _Getting_ _Started_ setup

```
  npm run test:seed
```

---

## Test Server

### Pre-requisite: 
1. complete _Getting_ _Started_ setup
2. terminate the terminal running _npm_ _run_ _server-dev_

```
  npm run test:server
```
