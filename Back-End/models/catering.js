// dependencies
const mongoose = require('mongoose')
const { Schema } = mongoose
const Catering = require('./catering')

// SCHEMA
const cateringSchema = new Schema(
    {
      name: {
        type: String,
        required: true,
        enum: ["Gjusta", "Salt & Honey Catering", "The Taco Man", "Culinary Eye", "Angelini"],
      },
      food_type: {
        type: String,
        required: true,
      },
      description: String,
    },
    { toJSON: { virtuals: true } }
  )

  // hooks 
cateringSchema.post('findOneAndDelete', function() {
  Bread.deleteMany({ baker: this._conditions._id })
      .then(deleteStatus => {
          console.log(deleteStatus)
      })
})

  


// Virtuals:
cateringSchema.virtual('events', {
    ref: 'Catering',
    localField: '_id',
    foreignField: 'catering'
})

  
  // MODEL & EXPORT
  const Catering = mongoose.model('catering', cateringSchema);
  module.exports = Baker;