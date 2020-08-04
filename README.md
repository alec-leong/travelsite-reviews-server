# travelsite-reviews-server

## Table of Contents

1. [About](#about)
    - [Demo](#demo)
    - [Main Development Dependencies](#main-development-dependencies)
    - [System Requirements](#system-requirements)
    - [Technologies](#technologies)
    - [Client](#client)
    - [Database](#database)
    - [Server](#server)
2. [Getting Started](#getting-started)
    1. [Development Mode](#1-development-mode)
        1. [Install dependencies and development dependencies](#11-install-dependencies-and-development-dependencies)
        2. [Populate MongoDB database](#12-populate-mongodb-database)
        3. [Start webpack](#13-start-webpack)
        4. [Open a new terminal](#14-open-a-new-terminal)
        5. [Start Express.js server](#15-start-expressjs-server)
        6. [Now visit _http://localhost:3000/_ to see the React application](#16-now-visit-httplocalhost3000-to-see-the-react-application)
    2. [Production Mode](#2-production-mode)
        1. [Configure Environment Variables _.env_ File](#21-configure-environment-variables-env-file)
        2. [Install dependencies and development dependencies](#22-install-dependencies-and-development-dependencies)
        3. [Populate MongoDB database](#23-populate-mongodb-database)
        4. [Start webpack](#24-start-webpack)
        5. [Start Express.js server](#25-start-expressjs-server)
3. [System Design](#system-design)
    1. [Database](#1-database)
        1. [Seed](#11-seed)
        2. [Schema](#12-schema)
    2. [Server API](#2-server-api)
        1. [GET _/bpi_](#21-get-reviews)
        2. [PUT _/bpi_](#22-put-reviews)

---

## About

### Demo

![Demo](demo.gif)

### Main Development Dependencies

| DevDependency | Version |
| ------------- | :-----: |
| @babel        | 7       |
| react         | 16      |
| webpack       | 4       |

### System Requirements

| Software       | Version   |
| -------------- | --------- |
| node           | >= 12.0.0 |
| npm            | >= 6.0.0  |
| MongoDB Server | >= 4.2    |

### Technologies

- ReactJS
- NodeJS
- ExpressJS
- JavaScript
- MongoDB

### Client

- ReactJS
- ChartJS

### Database

<ol>
    <li>Type
        <ul>
            <li>Not Only Structured Query Language (NoSQL)</li>
        </ul>
    </li>
    <li>Document Database Management System
        <ul>
            <li>MongoDB
                <ul>
                    <li>Database Name(s)
                        <ol>
                            <li type="I"><b><i>travelsite</i></b>
                                <ul>
                                    <li>Collection Name(s)
                                        <ol>
                                            <li><i><b>listing</b></i>
                                                <ul>
                                                    <li>Fields
                                                        <ol>
                                                            <li type="i"><b><i>_id</b></i></li>
                                                            <li type="i"><b><i>publicListingId</b></i></li>
                                                            <li type="i"><b><i>reviews</b></i>
                                                                <ul>
                                                                    <li>Fields
                                                                        <ol>
                                                                            <li type="i"><b><i>_id</b></i></li>
                                                                            <li type="i"><b><i>publicReviewId</b></i></li>
                                                                            <li type="i"><b><i>publicListingId</b></i></li>
                                                                            <li type="i"><b><i>username</b></i></li>
                                                                            <li type="i"><b><i>location</b></i></li>
                                                                            <li type="i"><b><i>contributions</b></i></li>
                                                                            <li type="i"><b><i>rating</b></i></li>
                                                                            <li type="i"><b><i>title</b></i></li>
                                                                            <li type="i"><b><i>review</b></i></li>
                                                                            <li type="i"><b><i>dateOfReview</b></i></li>
                                                                            <li type="i"><b><i>dateOfTrip</b></i></li>
                                                                            <li type="i"><b><i>tripType</b></i></li>
                                                                            <li type="i"><b><i>helpful</b></i></li>
                                                                        <ol>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                        <ol>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ol>
                                    </li>
                                </ul>
                            </li>
                        </ol>
                    </li>
                <ul>
            </li>
        </ul>
    </li>
</ol>

### Server

- NodeJS
- ExpressJS
- JavaScript

---

## Getting Started

### 1. Development Mode

#### &ensp;&ensp;&ensp;&ensp;1.1. Install dependencies and development dependencies

```sh
        npm install
```

&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&#8226; ___./node_modules/_ directory is now added and _./package-lock.json_ is now compiled__.

```text
                    .
                    ├── node_modules
                    └── package-lock.json
```

#### &ensp;&ensp;&ensp;&ensp;1.2. Populate MongoDB database

```sh
        npm run seed
```

#### &ensp;&ensp;&ensp;&ensp;1.3. Start webpack

```sh
        npm run react-dev
```

&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&#8226; ___./client/dist/bundle.js_ is now compiled__.

```text
                    .
                    └── client
                        └── dist
                            ├── index.html
                            ├── 0.bundle.js
                            ├── 2.bundle.js
                            ├── 3.bundle.js
                            ├── 4.bundle.js
                            ├── 5.bundle.js
                            ├── 6.bundle.js
                            ├── 7.bundle.js
                            └── bundle.js
```

#### &ensp;&ensp;&ensp;&ensp;1.4. Open a new terminal

#### &ensp;&ensp;&ensp;&ensp;1.5. Start Express.js server

```sh
        npm run server-dev
```

#### &ensp;&ensp;&ensp;&ensp;1.6. Now visit _[http://localhost:3000/](http://localhost:3000/)_ to see the React application

### 2. Production Mode

#### &ensp;&ensp;&ensp;&ensp;2.1. Configure Environment Variables _.env_ File

| Variable           | Default Value             | Description                 |
| ------------------ | ------------------------- | --------------------------- |
| APP_HOST           | localhost                 | Application server host     |
| APP_PORT           | 3000                      | Application server port     |
| APP_PROTOCOL       | http                      | Application server protocol |
| DB_HOST            | 127.0.0.1                 | MongoDB host                |
| DB_PORT            | 27017                     | MongoDB port                |
| DB_NAME            | travelsite                | MongoDB database name       |
| DB_COLLECTION_NAME | listings                  | MongoDB collection name     |
| NODE_ENV           | development               | Node environment            |
| REVIEW_LIST_KEY    | YOUR REVIEW LIST KEY HERE | Private key                 |

#### &ensp;&ensp;&ensp;&ensp;2.2. Install dependencies and development dependencies

```sh
        npm install
```

&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&#8226; ___./node_modules/_ directory is now added and _./package-lock.json_ is now compiled__.

```text
                    .
                    ├── node_modules
                    └── package-lock.json
```

#### &ensp;&ensp;&ensp;&ensp;2.3. Populate MongoDB database

```sh
        npm run seed
```

#### &ensp;&ensp;&ensp;&ensp;2.4. Start webpack

```sh
        npm run react-prod
```

&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&#8226; ___./client/dist/bundle.js_ is now compiled__.

```text
                    .
                    └── client
                        └── dist
                            ├── index.html
                            ├── 0.bundle.js
                            ├── 2.bundle.js
                            ├── 3.bundle.js
                            ├── 4.bundle.js
                            ├── 5.bundle.js
                            ├── 6.bundle.js
                            ├── 7.bundle.js
                            └── bundle.js
```

#### &ensp;&ensp;&ensp;&ensp;2.5. Start Express.js server

```sh
        npm run server-prod
```

---

## System Design

### 1. Database

#### &ensp;&ensp;&ensp;&ensp;1.1. Seed

##### &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;i. MongoDB and Mongoose Seed

```sh
          npm run seed
```

#### &ensp;&ensp;&ensp;&ensp;1.2. Schema

##### &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;i. Mongoose Schema

```javascript
          const mongoose = require('mongoose');
          const modelName = require('./database/modelName.js');

          const { Schema } = mongoose;

          // Instance of child schema.
          const reviewsSchema = new Schema({
            _id: {
              type: Number,
              min: 0,
              max: Number.MAX_SAFE_INTEGER,
            },
            publicReviewId: {
              type: String,
              minlength: 1,
            },
            publicListingId: {
              type: String,
              minlength: 1,
              ref: modelName,
            },
            username: {
              type: String,
              match: /^[a-zA-Z0-9_.]+$/, // Pattern: alphanumeric, underscore (_), and period (.) characters.
            },
            location: {
              type: String,
              match: /^[a-zA-Z\s'-]+,{1}\s{1}[a-zA-z\s'-]+$/, // Pattern: city, state
            },
            contributions: {
              type: Number,
              min: 0,
              max: Number.MAX_SAFE_INTEGER,
            },
            rating: {
              type: Number,
              min: 1,
              max: 5,
            },
            title: {
              type: String,
              minlength: 1,
              maxlength: 120,
            },
            review: {
              type: String,
              minlength: 100,
              maxlength: 20000,
            },
            dateOfReview: {
              type: String,
              match: /^(January|February|March|April|May|June|July|August|September|October|November|December)\s{1}\d{4}$/, // Pattern: month year
            },
            dateOfTrip: {
              type: String,
              match: /^(January|February|March|April|May|June|July|August|September|October|November|December)\s{1}\d{4}$/,
            },
            tripType: {
              type: String,
              enum: ['Couples', 'Family (young children)', 'Family (teens)', 'Friends', 'Business', 'Solo'],
            },
            helpful: {
              type: Number,
              min: 0,
              max: Number.MAX_SAFE_INTEGER,
            },
          });

          // Instance of parent schema.
          const listingsSchema = new Schema({
            _id: { // Override ObjectId - the SHA.
              type: Number,
              min: 0,
              max: Number.MAX_SAFE_INTEGER,
            },
            publicListingId: {
              type: String,
              minlength: 1,
            },
            reviews: [reviewsSchema],
          });
```

### 2. Server API

#### &ensp;&ensp;&ensp;&ensp;2.1. GET _/reviews_

##### &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;i. Returns the first _Listings_ document according to the natural order which reflects the order of documents on the disk. 

###### &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;Success Status Code: _200_

###### &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;Returns: _JSON_

```javascript
            {
                "reviews": [
                  {
                    "publicReviewId": String,
                    "publicListingId": String,
                    "username": String,
                    "location": String
                    "contributions": Number,
                    "title": String,
                    "review": String,
                    "dateOfReview": String
                    "tripType": String,
                    "helpful": Number,
                  },
                ],
            }
```

#### &ensp;&ensp;&ensp;&ensp;2.2. PUT _/reviews_

##### &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;i. Returns an updated _Listings_ document; change in _helpful_ field.

###### &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;Success Status Code: _200_

###### &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;Returns: _JSON_

```javascript
            {
                "reviews": [
                  {
                    "publicReviewId": String,
                    "publicListingId": String,
                    "username": String,
                    "location": String
                    "contributions": Number,
                    "title": String,
                    "review": String,
                    "dateOfReview": String
                    "tripType": String,
                    "helpful": Number,
                  },
                ],
            }
```