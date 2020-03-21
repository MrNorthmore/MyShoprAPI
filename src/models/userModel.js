import mongoose, {Schema} from 'mongoose'
import {composeWithMongoose} from "graphql-compose-mongoose";

export const userSchema = new Schema({
      displayName: String,
      email: String,
      recipeList: [{
        _id: { type: mongoose.Schema.Types.ObjectId, default: mongoose.Schema.Types.ObjectId() },
        name: String,
        ingredients: [String],
        instructions: [String]
      }],
      shoppingLists: [{
          _id: { type: mongoose.Schema.Types.ObjectId, default: mongoose.Schema.Types.ObjectId() },
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