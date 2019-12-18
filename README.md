# Facts

- Share Some Facts With The World!

- A Facts Feed Manager RESTful End-to-end Application using Anguler & Node.js as development environments

## Features

> Client Side

- Home Feed with all the existing facts

- User Feed with all the existing facts writen by the authorized user

- User can post new facts to the global feed and share his ideas with the world

- User can delete his own facts 

> Server Side

- RESTful Api

- Online Remote Database Integration storing facts and users information

- Authentication Service

- Password Encryption Service

- Data Verification Service

# Useage 

- After setup, user interface is available at: http://localhost:4200

> Register

<img src="https://i.ibb.co/M5PsJvL/register.png" title="Register">

> Login

<img src="https://i.ibb.co/rQH0cSB/login.png" title="Login">

> Home

<img src="https://i.ibb.co/4ghR63R/home.png" title="Home">

> Add a new fact

<img src="https://i.ibb.co/XxbsPXs/newFact.png" title="Add Fact">

> The posted fact is published, user can also delete it from his personal page

<img src="https://i.ibb.co/QHy7kHn/newFact2.png" title="Added fact my facts">

> The fact is added to the global feed as well

<img src="https://i.ibb.co/NxpM6M2/newFact3.png" title="Added fact all facts">


### Let's get started

### Clone

```shell
$ git clone https://github.com/sagivnet/FactsService
$ cd FactsService
```

### Setup

- Backend 


> Configurations: You need to have a file named: .env in folder: Backend Contatins:

- DB_URI        =  <'An Atlas MongoDB connection credentials URI'>
- TOKEN_SECRET  =  <'A random string which is used as a private key for Bycryptjs passwords RSA encryption system'>

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

## Documentation 

- This project implements a RESTful api 

## Modules

- Client Side

- Server Side

> MongoDB - as a database

> Express - as a server manager module

> Angular - as a frontend development environment

> Node.js - as a backend development environment

## Design 

- UML Diagram

<img src="https://i.ibb.co/xzVgcp3/UML.png" title="Facts">
