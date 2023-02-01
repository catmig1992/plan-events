// dependencies
const mongoose = require('mongoose')
const { Schema } = mongoose
const Florals = require('./florals')

// SCHEMA
const bakerSchema = new Schema(
    {
      name: {
        type: String,
        required: true,
        enum: ["roses", "tulips", "peonies", "", "tropical mix", "dreamy mix"],
      },
      arrangement_type: {
        type: string,
        required: true,
      },
      arrangement_type: String,
    },
    { toJSON: { virtuals: true } }
  )

  // hooks 
floralsSchema.post('findOneAndDelete', function() {
  Furniture.deleteMany({ baker: this._conditions._id })
      .then(deleteStatus => {
          console.log(deleteStatus)
      })
})

// Virtuals:
bakerSchema.virtual('florals', {
    ref: 'Florals',
    localField: '_id',
    foreignField: 'florals'
})

  // MODEL & EXPORT
  const Florals = mongoose.model('Furniture', furnitureSchema);
  module.exports = Florals;