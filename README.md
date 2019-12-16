# Facts

- An End-to-end application for managing a Facts feed using online database with users authentication 

## Features

- Authentication mechanism

- Data verification mechanism

- Home feed to see all the existing facts

- User's personal feed to see all the facts that uploaded by him

- User can add a new fact to the database

- User can delete each of his facts from the database

## Examples

> Authentication

<img src="https://i.ibb.co/JtZbqZX/Register.png" title="Register">

<img src="https://i.ibb.co/QKH6mC9/Loginpng.png" title="Login">

> Home

<img src="https://i.ibb.co/tBLkrgN/Home.png" title="Facts">

> User's Personal Page

<img src="https://i.ibb.co/1RhVfD7/MyFacts.png" title="MyFacts">

### Clone

- Clone this repo to your local machine using `https://github.com/sagivnet/FactsService`


```shell
$ git clone --recurse-submodules -j8 https://github.com/sagivnet/FactsService
$ cd FactsService
```

### Setup

- Backend 

> Backend setup

- Important: You need to have a valid .env file in folder /Backend in order to connect to the database!

```shell
$ cd Backend
$ npm install
```

> Run the server

```shell
$ npm start
```

> Now server is running on http://localhost:3000

- Frontend

> Frontend setup

```shell
$ cd Frontend
$ npm install
```

> Run the server

```shell
$ ng serve
```

> Now a friendly user interface is running on http://localhost:4200

---

## Documentation 

- An End-to-end project implements a RESTful api following the MEAN design pattern 

> MongoDB - as a database

> Express - as a server manager module

> Angular - as a frontend environment

> Node.js - as a backend environment

## Design And Modules

- UML Diagram

<img src="https://i.ibb.co/xzVgcp3/UML.png" title="Facts">
