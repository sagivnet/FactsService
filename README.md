# Facts

- Share Some Facts With The World!

- A Facts Feed Manager End-to-end Application

## Features

> Client Side

- Home Feed with all the existing facts

- User Feed with all the existing facts writen by the authorized user

- User can post new facts to the global feed and share his ideas with the world

- User can delete his own facts 

> Server Side

- Online Remote Database Integration

- Authentication Service

- Password Encryption Service

- Data Verification Service


## Screenshots

> Home

<img src="https://i.ibb.co/tBLkrgN/Home.png" title="Facts">

> User's Personal Page

<img src="https://i.ibb.co/1RhVfD7/MyFacts.png" title="MyFacts">

> Authentication

<img src="https://i.ibb.co/JtZbqZX/Register.png" title="Register">

<img src="https://i.ibb.co/QKH6mC9/Loginpng.png" title="Login">


### Let's get started

### Clone

```shell
$ git clone https://github.com/sagivnet/FactsService
$ cd FactsService
```

### Setup

- Backend 


> Configurations: You need to have a file named: .env in folder: Backend Contatins:

- DB_URI        =  An Atlas MongoDB connection credentials URI
- TOKEN_SECRET  =  A random string which is used as a private key for Bycryptjs passwords RSA encryption system 

> Backend setup

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
# Useage 

> After setup, go to: http://localhost:4200

## Documentation 

- An End-to-end project implements a RESTful api following the MEAN scheme pattern 

> MongoDB - as a database

> Express - as a server manager module

> Angular - as a frontend environment

> Node.js - as a backend environment

## Design And Modules

- UML Diagram

<img src="https://i.ibb.co/xzVgcp3/UML.png" title="Facts">
