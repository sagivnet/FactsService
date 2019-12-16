const express = require('express')
// const cors = require('cors')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

require('dotenv/config')
// Import Routes
const usersRoute = require('./routes/users')
const factsRoute = require('./routes/facts')
const authRoute = require('./routes/auth')

// Middlewares 
app.use(bodyParser.json())/*parser*/

// Add headers
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With,content-type,auth-token');
    res.header('Access-Control-Allow-Credentials', true);
    next();
});

// Routes Middlewares
app.use('/api/user', authRoute)
app.use('/api/facts', factsRoute)
// app.use('/users', usersRoute) // TODO: Admins mode

// Connect to Online Atlas MongoDB
mongoose.connect(
    process.env.DB_URI,
    { 
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
    },
    () => console.log('Connected to DB')
);
app.listen(3000, () => console.log('Server started at http://localhost:3000/'))