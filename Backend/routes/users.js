
// // // //##########################################################
// // // //################### For Admins Only ######################
// // // //##########################################################

// // TODO: NOT AVAILABLE AT THE MOMENT

// const express = require('express')
// const router = express.Router()
// const Fact = require('../models/Fact')
// const mongoose = require('mongoose')
// const verify = require('./verifyToken')
// const { factValidation } = require('../validation')

// //  GET
// //      GET: Home - returns all facts
// router.get('/', (req, res) => {
//     Fact.find()
//         .exec()
//         .then(docs => {
//             res.status(200).json(docs)
//         })
//         .catch(err => {
//             return res.status(500).json({
//                 error: err
//             })
//         })
// })
// //      GET: User's facts
// router.get('/user',verify, (req, res) => {
//     Fact.find({user: req.user._id})
//         .exec()
//         .then(docs => {
//             res.status(200).json(docs)
//         })
//         .catch(err => {
//             return res.status(500).json({
//                 error: err
//             })
//         })
// })

// //      GET: Specific fact
// router.get('/:factId', (req, res, next) => {
//     const id = req.params.factId
//     Fact.findById(id)
//     .exec()
//     .then(result => {
//         if (result){
//             res.status(200).json(result)
//         }
//         else {
//             res.status(404).json({error: 'Fact ID is not valid!'})
//         }
//     })
//     .catch(err => {
//         res.status(500).json({error: err})
//     })
// })

// // POST
// //      POST: Home - post a fact
// router.post('/', verify , (req,res) => {
//     // Data validation
//     try{
//         factValidation(req.body)
//     } catch(err) {
//         return res.status(400).json({error:err.details[0].message})
//     }
//     Fact.findOne({text: req.body.text})
//         .then(fact => {
//             // Checking if fact already exists in the database
//             if(fact) {
//                 return res.status(400).send('Fact already exists')
//             } else {
//                 const fact = new Fact({
//                     _id: new mongoose.Types.ObjectId(),
//                     user: req.user._id,
//                     text: req.body.text,
//                     used: false
//                 })
//                 fact
//                 .save()
//                 .then(fact => {
//                     res.status(201).json({message: fact})
//                 })
//                 .catch(err => {
//                     return res.status(500).json({error: err})
//                 })
//             }
//         })
//         .catch(err => {
//             return res.status(500).json({error: err})
//         })
// })
// //  PATCH 
// router.patch('/:factId', verify,  (req, res) => {
//     const factId = req.params.factId
//     const userId = req.user._id
//     // Data validation
//     try{
//         factValidation(req.body)
//     } catch(err) {
//         return res.status(400).json({error: err.details[0].message})
//     }
//     Fact.findOne({_id: factId})
//         .exec()
//         .then(fact => {
//             // Checking if user wrote this fact
//             if (userId == fact.user) {
//                 Fact.updateOne({_id: factId}, { $set:
//                     {
//                       text: req.body.text,
//                       last_modified: Date.now()
//                     } })
//                     .exec()
//                     .then(result => {
//                         console.log("Fact has been modified")
//                         res.status(200).json({
//                             message:"Fact has been modified"
//                         })
//                     })
//                     .catch(err => {
//                         res.status(500).json({
//                             error: err
//                         })
//                     })
//             } else {
//                 console.log("Illegal fact modification attempt")
//                 res.status(400).json({
//                     error: "Invalid Operation"
//                 })
//             }
//         })
//         .catch(err => {
//             return res.status(500).json({
//                 error: err
//             })
//         })
// })
    
// //  DELETE 
// router.delete('/:factId', verify, (req, res) => {
//     const factId = req.params.factId
//     const userId = req.user._id
//     // Data validation
//     try{
//         factValidation(req.body)
//     } catch(err) {
//         return res.status(400).json({error: err.details[0].message})
//     }
//     Fact.findOne({_id: factId})
//         .exec()
//         .then(fact => {
//             // Checking if user wrote this fact
//             if (userId == fact.user) {
//                 Fact.remove({_id: factId})
//                     .exec()
//                     .then(result => {
//                         console.log("Fact has been removed")
//                         res.status(200).json({
//                             message:"Fact has been removed"
//                         })
//                     })
//                     .catch(err => {
//                         res.status(500).json({
//                             error: err
//                         })
//                     })
//             } else {
//                 console.log("Illegal fact remove attempt")
//                 res.status(400).json({
//                     error: "Invalid Operation"
//                 })
//             }
//         })
//         .catch(err => {
//             return res.status(500).json({
//                 error: err
//             })
//         })
// })

// module.exports = router