import mongoose, {Schema} from 'mongoose'
import {composeWithMongoose} from "graphql-compose-mongoose";

export const userSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  first_name: String,
  last_name: String,
  email: String,
  password: String,
  selectedStoreId: String,
  selectedListIndex: String,
  recipeLists: [{
    list_name: String,
    recipes: [{type: mongoose.Schema.Types.ObjectId, ref: 'Recipes'}]
  }],
  shoppingLists: []

},
    {
      collection: 'Users'
    });

export const User = mongoose.model('User', userSchema);
export const UserTC = composeWithMongoose(User);