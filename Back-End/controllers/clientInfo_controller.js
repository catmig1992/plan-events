// // dependencies
// const express = require('express')
// const clientInfo = express.Router()
// const ClientInfo = require('../models/.js')
// const clientInfoSeedData = require('../models/catering_seed.js')


// clientInfo.get('/data/seed', (req, res) => {
//     clientInfo.insertMany(clientInfoSeedData)
//         .then(res.redirect('/event'))
// })

// // Index: 
// clientInfo.get('/', (req, res) => {
//     ClientInfo.find()
//         .populate('clientInfo')
//         .then(foundClientInfo => {
//             res.send(foundClientInfo)
//         })
// })  

// // Show: 
// clientInfo.get('/:id', (req, res) => {
//     clientInfo.findById(req.params.id)
//         .populate('clientInfo')
//         .then(foundClientInfo => {
//             res.render('clientInfoShow', {
//                 catering: foundClientInfo
//             })
//         })
// })

// // delete
// clientInfo.delete('/:id', (req, res) => {
//     ClientInfo.findByIdAndDelete(req.params.id) 
//       .then(deletedClientInfo => { 
//         res.status(303).redirect('/ca')
//       })
// })





// // export
// module.exports = clientInfo