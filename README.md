# Facts

- Share Some Facts With The World!

- An End-to-end application for managing Facts feed application using online database with users authentication service

## Features

- Home feed to see all the existing facts

- User's personal feed to see all the facts that uploaded by him

- Online Remote Database

- Authentication 

- Password Encryption 

- Data Verification 

- User can add facts to the database

- User can delete his facts from the database

## Screenshots

> Home

<img src="https://i.ibb.co/tBLkrgN/Home.png" title="Facts">

> User's Personal Page

<img src="https://i.ibb.co/1RhVfD7/MyFacts.png" title="MyFacts">

> Authentication

<img src="https://i.ibb.co/JtZbqZX/Register.png" title="Register">

<img src="https://i.ibb.co/QKH6mC9/Loginpng.png" title="Login">


### Clone

- To clone this repository

```shell
$ git clone https://github.com/sagivnet/FactsService
$ cd FactsService
```

### Setup

- Backend 

> Backend setup

- Important: You need to have a valid .env file in folder /Backend Contatins:

> DB_URI        =   <MongoDB Credentials>
> TOKEN_SECRET  =   <A random string which is used as a private key for passwords encryption>

```shell
$ cd Backend
$ npm install
```

> Run the server

```shell
$ npm start
```

> Now the server is running on http://localhost:3000

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
