// // dependencies
// const express = require('express')
// const catering = express.Router()
// const Catering = require('../models/catering.js')
// //const cateringSeedData = require('../models/catering_seed.js')


// catering.get('/data/seed', (req, res) => {
//     catering.insertMany(cateringSeedData)
//         .then(res.redirect('/event'))
// })

// // Index: 
// catering.get('/', (req, res) => {
//     catering.find()
//         .populate('catering')
//         .then(foundCatering => {
//             res.send(foundCatering)
//         })
// })  

// // Show: 
// catering.get('/:id', (req, res) => {
//     catering.findById(req.params.id)
//         .populate('catering')
//         .then(foundCatering => {
//             res.render('cateringShow', {
//                 catering: foundCatering
//             })
//         })
// })

// // delete
// catering.delete('/:id', (req, res) => {
//     Catering.findByIdAndDelete(req.params.id) 
//       .then(deletedcatering => { 
//         res.status(303).redirect('/ca')
//       })
// })





// // export
// module.exports = catering



// dependencies
const express = require('express')
const catering = express.Router()
const Catering = require('../models/catering.js')
//const floralsSeedData = require('../models/florals_seed.js')


catering.get('/data/seed', (req, res) => {
    Catering.insertMany(floralsSeedData)
        .then(res.redirect('/florals'))
})

// Index: 
catering.get('/', (req, res) => {
    catering.find()
        .populate('catering')
        .then(foundCatering => {
            res.send(foundCatering)
        })
})  

// Show: 
catering.get('/:id', (req, res) => {
    Catering.findById(req.params.id)
        .populate('catering')
        .then(foundCatering => {
            res.render('cateringShow', {
                catering: foundCatering
            })
        })
})

// delete
catering.delete('/:id', (req, res) => {
    Catering.findByIdAndDelete(req.params.id) 
      .then(deletedcatering => { 
        res.status(303).redirect('/ca')
      })
})





// export
module.exports = catering




