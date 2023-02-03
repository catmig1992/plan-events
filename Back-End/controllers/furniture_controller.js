// // dependencies
// const express = require('express')
// const furniture = express.Router()
// const Furniture = require('../models/furniture.js')
// const furnitureSeedData = require('../models/furniture_seed.js')

// furniture.get('/data/seed', (req, res) => {
//     Furniture.insertMany(furnitureSeedData)
//         .then(res.redirect('/breads'))
// })

// // Index: 
// furniture.get('/', (req, res) => {
//     Furniture.find()
//         .populate('furniture')
//         .then(foundFurniture => {
//             res.send(foundFurniture)
//         })
// })  

// // Show: 
// furniture.get('/:id', (req, res) => {
//     Furniture.findById(req.params.id)
//         .populate('furniture')
//         .then(foundFurniture => {
//             res.render('furnitureShow', {
//                 baker: foundFurniture
//             })
//         })
// })

// // delete
// baker.delete('/:id', (req, res) => {
//     Baker.findByIdAndDelete(req.params.id) 
//       .then(deletedBaker => { 
//         res.status(303).redirect('/breads')
//       })
// })





// // export
// module.exports = furniture       