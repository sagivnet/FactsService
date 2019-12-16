const router = require('express').Router()
const User = require('../models/User')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const { registerValidation, loginValidation } = require('../validation')

//  BASE ROUTE: /user
// Register
router.post('/register', (req, res) => {
    // Data validation
    try{
        registerValidation(req.body)
    } catch(err) {
        return res.status(400).json({error: err.details[0].message})
    }
    // Checking if user already exists in the database
    User.findOne({email: req.body.email})
        .then(fact => {
            // Checking if fact already exists in the database
            if(fact) {
                return res.status(400).json({message: 'User already exists'})
            }
            else {
                // Hash the password
                bcrypt.genSalt(10)
                    .then(salt => {
                        bcrypt.hash(req.body.password, salt)
                            .then(hashedPassword => {
                                // Create new user
                                const user = new User ({
                                    name: req.body.name,
                                    email: req.body.email,
                                    password: hashedPassword
                                })
                                 // Save new user in DB
                                user.save()
                                    .then(savedUser => {
                                        // Server Ack
                                        res.status(200).json({message:'Registration is complete'})
                                        console.log('New user has registered')
                                    })
                                    .catch(err => {
                                        return res.status(400).json({error: err})
                                    })
                            })
                    })
                    .catch(err => {
                        return res.status(400).json({error: err})
                    })
            }
        })
        .catch(err => {
            return res.status(400).json({error: err})
        })
})
// Login
router.post('/login', (req, res) => {
    // Data validation
    try{
        loginValidation(req.body)
    } catch(err) {
        return res.status(400).json({error:err.details[0].message})
    }
    // Checking if user exists in the database
    User.findOne({email: req.body.email})
        .then(user => {
            if (!user) {
                return res.status(400).json({error:'User does not exists'})
            }
            // Checking if password is correct
            bcrypt.compare(req.body.password, user.password)
                .then(validPass => {
                    if(!validPass) {
                        return res.status(400).json({message:'Invalid password'})
                    }
                    // Create and assign a token
                    const token = jwt.sign({_id: user.id}, process.env.TOKEN_SECRET)
                    res.status(200).header('auth-token', token).json({message:token})
                    console.log('New user has loged in') 
                })
                .catch(err => {
                    return res.status(400).json({error: err})
                })
        })
        .catch(err => {
            return res.status(400).json({error: err})
        })
})
module.exports = router