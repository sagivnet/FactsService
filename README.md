# Facts

- Share Some Facts With The World!

- A Facts Feed Manager End-to-end Aplication

## Features

> Client Side

- Home feed containing all the existing facts

- User's personal feed containing all the existing facts that had been writen by the user

- User can post facts to the global feed

- User can delete his own facts 

> Server Side

- Online Remote Database integration

- Authentication service

- Password Encryption service

- Data Verification service


## Screenshots

> Home

<img src="https://i.ibb.co/tBLkrgN/Home.png" title="Facts">

> User's Personal Page

<img src="https://i.ibb.co/1RhVfD7/MyFacts.png" title="MyFacts">

> Authentication

<img src="https://i.ibb.co/JtZbqZX/Register.png" title="Register">

<img src="https://i.ibb.co/QKH6mC9/Loginpng.png" title="Login">


### Clone

```shell
$ git clone https://github.com/sagivnet/FactsService
$ cd FactsService
```

### Setup

- Backend 

> Backend setup

- Configurations: You need to have a file named: .env in the Backend folder Contatins:

- DB_URI        =  Atlas MongoDB Connection Credentials 
- TOKEN_SECRET  =  A random string which is used as a Private Key for passwords RSA encryption 


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
