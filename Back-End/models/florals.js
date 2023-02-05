
const mongoose = require('mongoose')
// creating shorthand for the Schema constructor 
const { Schema } = mongoose 

// schema
const floralsSchema = new Schema({
  flower: { type: String, required: true },
  inSeason: Boolean,
  image: { type: String, default: 'https://images.unsplash.com/photo-1517722014278-c256a91a6fba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80' },
  floralStyle: {
    type: Schema.Types.ObjectId,
    ref: 'Floral Style'
  }
})

// // helper methods 
// floralsSchema.methods.getBakedBy = function(){
//   return `${this.flower_type} was made with love by ${this.catering.name}, who has been with us since ${this.baker.startDate.getFullYear()}`
// }


// model and export 
const Florals = mongoose.model('Florals', floralsSchema)
module.exports = Florals
 