//DEPENCIES
const express = require('express');
const florals = express.Router();
const Florals = require('../models/florals.js');
const FloralStyle = require ('../models/floralStyle.js');


// INDEX
florals.get('/', (req, res) => {
  FloralStyle.find()
    .then(foundFloralStyleChoice => {
      Florals.find()
      .then(foundFlorals => {
          res.render('index', {
              florals: foundFlorals,
              //floralStyle: foundFloralStyle,
              title: 'Vendor DataBase'
          })
      })
    })
})

// NEW
florals.get('/new', (req, res) => {
    FloralStyle.find()
        .then(foundFloralStyle => {
            res.render('new', {
                floralStyle: foundFloralStyle
            })
      })
})

// SHOW
florals.get('/:id', (req, res) => {
  Florals.findById(req.params.id)
      .populate('floralStyle')
      .then(foundFloralStyle => {
        res.render('show', {
            florals: foundFloralStyle
        }) 
      })
      .catch(err => {
        res.send('404')
      })
})

//create
florals.post('/', (req, res) => {
  if (!req.body.image) {
    req.body.image = undefined;
  }
  if (req.body.inSeason === 'on') {
    req.body.inSeason = true;
  } else {
    req.body.inSeason = false;
  }
  Florals.create(req.body);
  res.redirect('/florals');
});

// EDIT
florals.get('/:id/edit', (req, res) => {
  FloralStyle.find()
    .then(foundFloralStyle => {
        Florals.findById(req.params.id)
          .then(foundFlorals => {
            res.render('edit', {
                florals: foundFlorals, 
                floralStyle: foundFloralStyleChoice
            })
          })
    })
})



// UPDATE

florals.put('/:id', (req, res) => {
  if(req.body.inSeason === 'on'){
    req.body.inSeason = true
  } else {
    req.body.inSeason = false
  }
  Florals.findByIdAndUpdate(req.params.id, req.body, { new: true }) 
    .then(updatedFlorals => {
      console.log(updatedFlorals) 
      res.redirect(`/florals/${req.params.id}`) 
    })
})


// DELETE
florals.delete('/:id', (req, res) => {
  Florals.findByIdAndDelete(req.params.id) 
    .then(deletedFlorals => { 
      res.status(303).redirect('/florals')
    })
})

module.exports = florals;