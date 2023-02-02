// dependencies
const express = require('express')
const music = express.Router()
const Music = require('../models/.js')
const musicSeedData = require('../models/music_seed.js')


music.get('/data/seed', (req, res) => {
    Music.insertMany(musicSeedData)
        .then(res.redirect('/event'))
})

// Index: 
musicg.get('/', (req, res) => {
    Music.find()
        .populate('music')
        .then(foundMusic => {
            res.send(foundMusic)
        })
})  

// Show: 
music.get('/:id', (req, res) => {
   Music.findById(req.params.id)
        .populate('music')
        .then(foundMusic => {
            res.render('musicShow', {
                catering: foundMusic
            })
        })
})

// delete
music.delete('/:id', (req, res) => {
   Music.findByIdAndDelete(req.params.id) 
      .then(deletedMusic => { 
        res.status(303).redirect('/')
      })
})





// export
module.exports = music