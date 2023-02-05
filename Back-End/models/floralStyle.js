// dependencies
const mongoose = require('mongoose')
const { Schema } = mongoose
const Florals = require('./florals')

// SCHEMA
const floralStyleSchema = new Schema(
    {
      name: {
        type: String,
        required: true,
        enum: ["Bouquet", "CenterPiece", "Arch"],
      },
    //   startDate: {
    //     type: Date,
    //     required: true,
    //   },
    //   bio: String,
    },
    { toJSON: { virtuals: true } }
  )

  // hooks 
floralStyleSchema.post('findOneAndDelete', function() {
  Florals.deleteMany({ floralStyle: this._conditions._id })
      .then(deleteStatus => {
          console.log(deleteStatus)
      })
})

  


// Virtuals:
floralStyleSchema.virtual('florals', {
    ref: 'Florals',
    localField: '_id',
    foreignField: 'florals'
})

  // MODEL & EXPORT
  const FloralStyle= mongoose.model('FloralStyle', floralStyleSchema);
  module.exports = FloralStyle;