import mongoose, {Schema} from 'mongoose'
import {composeWithMongoose} from "graphql-compose-mongoose";

export const userSchema = new Schema({
      _id: mongoose.Schema.Types.ObjectId,
      displayName: String,
      email: String,
      recipeList: [{
        _id: mongoose.Schema.Types.ObjectId,
        name: String,
        ingredients: [String],
        instructions: [String]
      }],
      shoppingLists: [{
          _id: mongoose.Schema.Types.ObjectId,
          name: String,
          items: [String]
      }]

    },
    {
      collection: 'Users'
    });

userSchema.index({ email: 1});


export const User = mongoose.model('User', userSchema);
export const UserTC = composeWithMongoose(User);