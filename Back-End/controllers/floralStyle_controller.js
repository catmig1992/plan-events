// dependencies
const express = require('express')
const floralStyle = express.Router()
const FloralStyle = require('../models/floralStyle.js')
const floralStyleSeedData = require('../models/floralStyle_seed.js')

floralStyle.get('/data/seed', (req, res) => {
    FloralStyle.insertMany(floralStyleSeedData)
        .then(res.redirect('/florals'))
})

// Index: 
floralsStyle.get('/', (req, res) => {
    FloralsStyle.find()
        .populate('floralStyle')
        .then(foundFlorals => {
            res.send(foundFlorals)
        })
})  

// Show: 
floralStyle.get('/:id', (req, res) => {
    FloralStyle.findById(req.params.id)
        .populate('florals')
        .then(foundFloralStyle => {
            res.render('floralsShow', {
                floralStyle: foundFloralStyle
            })
        })
})

// delete
floralStyle.delete('/:id', (req, res) => {
    FloralStyle.findByIdAndDelete(req.params.id) 
      .then(deletedFloralStyle => { 
        res.status(303).redirect('/florals')
      })
})





// export
module.exports = floralStyle