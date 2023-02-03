// // dependencies
// const express = require('express')
// const florals = express.Router()
// const florals = require('../models/.js')
// const floralsSeedData = require('../models/florals_seed.js')


// florals.get('/data/seed', (req, res) => {
//     Florals.insertMany(floralsSeedData)
//         .then(res.redirect('/event'))
// })

// // Index: 
// florals.get('/', (req, res) => {
//     florals.find()
//         .populate('florals')
//         .then(foundFlorals => {
//             res.send(foundFlorals)
//         })
// })  

// // Show: 
// florals.get('/:id', (req, res) => {
//     florals.findById(req.params.id)
//         .populate('florals')
//         .then(foundFlorals => {
//             res.render('floralsShow', {
//                 catering: foundFlorals
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
// module.exports = florals



//DEPENCIES
const express = require('express');
const florals = express.Router();
const Florals = require('../models/florals.js');
const Catering = require('../models/catering.js');

// INDEX
florals.get('/', (req, res) => {
  Catering.find()
    .then(foundCatering => {
      Florals.find()
      .then(foundFlorals => {
          res.render('index', {
              florals: foundFlorals,
              catering: foundCatering,
              title: 'Index Page'
          })
      })
    })
})

// NEW
florals.get('/new', (req, res) => {
    Catering.find()
        .then(foundCatering => {
            res.render('new', {
                bakers: foundCatering
            })
      })
})

// SHOW
florals.get('/:id', (req, res) => {
  Florals.findById(req.params.id)
      .populate('catering')
      .then(foundFlorals => {
        res.render('show', {
            florals: foundFlorals
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
  
  Florals.create(req.body);
  res.redirect('/florals');
});

// EDIT
florals.get('/:id/edit', (req, res) => {
  Catering.find()
    .then(foundCatering => {
        Florals.findById(req.params.id)
          .then(foundFlorals => {
            res.render('edit', {
                florals: foundFlorals, 
                catering: foundCatering 
            })
          })
    })
})



// UPDATE

florals.put('/:id', (req, res) => {
  if(req.body.hasGluten === 'on'){
    req.body.hasGluten = true
  } else {
    req.body.hasGluten = false
  }
  Florals.findByIdAndUpdate(req.params.id, req.body, { new: true }) 
    .then(updatedBread => {
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

