// dependencies
const express = require('express')
const music = express.Router()
const Music = require('../models/.js')
const musicSeedData = require('../models/music_seed.js')


music.get('/data/seed', (req, res) => {
    music.insertMany(musicSeedData)
        .then(res.redirect('/event'))
})

// Index: 
musicg.get('/', (req, res) => {
    music.find()
        .populate('music')
        .then(foundMusic => {
            res.send(foundMusic)
        })
})  

// Show: 
music.get('/:id', (req, res) => {
   music.findById(req.params.id)
        .populate('music')
        .then(foundMusic => {
            res.render('musicShow', {
                catering: foundMusic
            })
        })
})

// delete
catering.delete('/:id', (req, res) => {
    Catering.findByIdAndDelete(req.params.id) 
      .then(deletedMusic => { 
        res.status(303).redirect('/')
      })
})





// export
module.exports = music