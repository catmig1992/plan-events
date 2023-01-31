// dependencies
const express = require('express')
const catering = express.Router()
const catering = require('../models/.js')
const cateringSeedData = require('../models/catering_seed.js')


catering.get('/data/seed', (req, res) => {
    catering.insertMany(cateringSeedData)
        .then(res.redirect('/event'))
})

// Index: 
catering.get('/', (req, res) => {
    catering.find()
        .populate('catering')
        .then(foundcaterings => {
            res.send(foundcaterings)
        })
})  

// Show: 
catering.get('/:id', (req, res) => {
    catering.findById(req.params.id)
        .populate('catering')
        .then(foundcatering => {
            res.render('cateringShow', {
                catering: foundcatering
            })
        })
})

// delete
catering.delete('/:id', (req, res) => {
    catering.findByIdAndDelete(req.params.id) 
      .then(deletedcatering => { 
        res.status(303).redirect('/event')
      })
})





// export
module.exports = Index                 