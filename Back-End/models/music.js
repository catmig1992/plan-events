// dependencies
const mongoose = require('mongoose')
const { Schema } = mongoose
const Music = require('./music')

// SCHEMA
const musicSchema = new Schema(
    {
      name: {
        type: String,
        required: true,
        enum: ["classical", "Kustom Sounds", "Mariachi Tesoro", "Miss MuMu LaRue", "GOSPEL CHOIR LOS ANGELES"],
      },
      type: {
        type: String,
        required: true,
      },
      description: String,
    },
    { toJSON: { virtuals: true } }
  )

  // hooks 
musicSchema.post('findOneAndDelete', function() {
  Music.deleteMany({ baker: this._conditions._id })
      .then(deleteStatus => {
          console.log(deleteStatus)
      })
})

  


// Virtuals:
musicSchema.virtual('breads', {
    ref: 'Music',
    localField: '_id',
    foreignField: 'music'
})

  
  // MODEL & EXPORT
  const Music = mongoose.model('Music', musicSchema);
  module.exports = Music;