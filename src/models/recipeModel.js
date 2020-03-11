import mongoose, {Schema} from 'mongoose';
import {composeWithMongoose} from "graphql-compose-mongoose";
import {StoreSchema} from "./storeModel";

const RecipeSchema = new mongoose.Schema({
    _id: Schema.Types.ObjectID,
    name: String,
    ingredients: [{
      quantity: String,
      name: String
    }],
    instructions: [String]
    },
    {
      collection: 'Recipes'
    });

RecipeSchema.index({ createdAt: 1, updatedAt: 1 });

export const Recipe = mongoose.model('Recipe', RecipeSchema);
export const RecipeTC = composeWithMongoose(Recipe);