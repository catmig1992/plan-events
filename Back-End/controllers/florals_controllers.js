// dependencies
const express = require('express')
const florals = express.Router()
const florals = require('../models/.js')
const floralsSeedData = require('../models/florals_seed.js')


florals.get('/data/seed', (req, res) => {
    Florals.insertMany(floralsSeedData)
        .then(res.redirect('/event'))
})

// Index: 
florals.get('/', (req, res) => {
    florals.find()
        .populate('florals')
        .then(foundFlorals => {
            res.send(foundFlorals)
        })
})  

// Show: 
florals.get('/:id', (req, res) => {
    florals.findById(req.params.id)
        .populate('florals')
        .then(foundFlorals => {
            res.render('floralsShow', {
                catering: foundFlorals
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