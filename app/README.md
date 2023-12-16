# PickOn

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Source Code Organization](#source-code-organization)
* [Application Diagram](#application-diagram)
* [Progress] (#progress)
* [Contact](#contact)


## Description

This is the PickOn prototype developed by Fall 2023 ICS Capstone students [Wenhao Q.](https://github.com/wenhaoq20) and [Braydon N.](https://github.com/Breadonn)

## Installation

### Prerequisites
- Node.js
- MongoDB

### Setup

First, download and install [Node.js](https://nodejs.org/en/) if you don't already have it on your computer.

If you want to use your own MongoDB database, please follow the setup instructions [here](https://www.mongodb.com/free-cloud-database). If not, you can contact Wenhao or Braydon to provide the setup and permissions.

### Installing Project

1. Clone the repo from https://github.com/dport96/PickOn_Project
2. cd to the PickOn_Project/app/ directory
3. cd to the app/client/ directory and run npm install
```bash
PickOn_Project/app/client $ npm install
```
4. cd back to the app/ directory and cd to the app/server/ directory, then run npm install
```bash
PickOn_Project/app/server $ npm install
```
5. Create an .env file in the app/server directory. It should look like this
```
MONGO_URI=<Your own MongoDB_URI to the database>
JWT_SECRET=<Your own JWT secret for password hashing>
```
If you are using your own MongoDB database, you can enter your own secret. If you are using the provided one, please contact Wenhao or Braydon for the secret.

### Usage
1. Start the client side by cd to the client/ directory and run
```bash
PickOn_Project/app/client $ npm run start
```
2. Start the server side by cd to the server/ directory and run
```bash
PickOn_Project/app/server $ npm run devStart
```
3. Visit [http://localhost:3000](http://localhost:3000) to confirm that the website is running

## Source Code Organization

### app directory overview
```
app/
        client/     # Contains the frontend related files
        server/     # Contains the backend related files
```

### client directory overview
```
client/ 
        src/                 # Contains the frontend source code
             components/     # Components within a page
             pages/          # Url-accessible pages
             public/         # Images and json files used on the website
             services/       # Backend api call functions and axios
             utilis/         # Miscellaneous codes
```

### components directory overview
```
components/
            instructor/             # Instructor's components
            student/                # Student's components
```

### pages directory overview
```
pages/
       instructor/      # Instructor's pages
       student/         # Student's pages
```

### client/service directory overview

```
client/services/
                course/    # Functions that call backend course api
                mode/      # Functions that call backend mode api
                user/      # Functions that call backend user api
```

### server directory overview

```
server/
        models/     # Mongo DB models for the data
        services/   # Contains the backend api code
```

### server/service directory overview

```
server/service/v1
                  course/     # V1 of course related backend apis
```

## Application diagram

![application diagram](https://github.com/dport96/PickOn_Project/assets/89876445/86f04347-63a5-4cfa-8fa9-4365e4797849)

## Progress
The current progress of the project can be found [here](https://github.com/users/dport96/projects/1)

## Contact
- [Wenhao Q. (wenhaoq@hawaii.edu)](mailto:wenhaoq@hawaii.edu)
- [Braydon N. (braydonn@hawaii.edu)](mailto:braydonn@hawaii.edu)
