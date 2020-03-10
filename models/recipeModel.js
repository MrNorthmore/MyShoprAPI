const mongoose = require('mongoose')

const recipeSchema = new mongoose.Schema({
  name: String,
  ingredients: [{
    quantity: String,
    name: String,
    itemRef: {type: mongoose.Schema.Types.ObjectId, ref: 'Items'} 
  }],
  instructions: [String]
})

module.exports = mongoose.model('Recipes', recipeSchema, 'Recipes')