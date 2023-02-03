// // dependencies
// const mongoose = require('mongoose')
// const { Schema } = mongoose
// const Furniture = require('./furniture')

// // SCHEMA
// const furnitureSchema = new Schema(
//     {
//       name: {
//         type: String,
//         required: true,
//         enum: ["rustic", "classic", "coastal", "luxe"],
//       },
//       description: {
//         type: String,
//         required: true,
//       },
//       bio: String,
//     },
//     { toJSON: { virtuals: true } }
//   )

//   // hooks 
// furnitureSchema.post('findOneAndDelete', function() {
//   Furniture.deleteMany({ baker: this._conditions._id })
//       .then(deleteStatus => {
//           console.log(deleteStatus)
//       })
// })

  


// // Virtuals:
// furnitureSchema.virtual('furniture', {
//     ref: 'furniture',
//     localField: '_id',
//     foreignField: 'baker'
// })

  
//   // MODEL & EXPORT
//   const Furniture = mongoose.model('Furniture', furnitureSchema);
//   module.exports = Furniture;