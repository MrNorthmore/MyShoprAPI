import mongoose from 'mongoose';

const recipeSchema = new mongoose.Schema({
  name: String,
  ingredients: [{
    quantity: String,
    name: String,
    itemRef: {type: mongoose.Schema.Types.ObjectId, ref: 'Items'} 
  }],
  instructions: [String]
});

export default mongoose.model('Recipes', recipeSchema, 'Recipes');