// // dependencies
// const mongoose = require('mongoose')
// const { Schema } = mongoose
// const ClientInfo = require('./clientInfo')

// // SCHEMA
// const clientInfoSchema = new Schema(
//     {
//       name: {
//         type: String,
//         required: true,
//         enum: ["Robles", "Knisely", "Tang", "Marcus", "Amar"],
//       },
//       food_type: {
//         type: String,
//         required: true,
//       },
//       description: String,
//     },
//     { toJSON: { virtuals: true } }
//   )

//   // hooks 
// clientInfoSchema.post('findOneAndDelete', function() {
//   ClientInfo.deleteMany({ catering: this._conditions._id })
//       .then(deleteStatus => {
//           console.log(deleteStatus)
//       })
// })

  


// // Virtuals:
// clientInfoSchema.virtual('events', {
//     ref: 'clientInfo',
//     localField: '_id',
//     foreignField: 'catering'
// })

  
//   // MODEL & EXPORT
//   const Catering = mongoose.model('catering', cateringSchema);
//   module.exports = ClientInfo;