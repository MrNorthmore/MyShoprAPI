import mongoose from 'mongoose';
import { composeWithMongoose } from 'graphql-compose-mongoose';

const ItemSchema = new mongoose.Schema({
      name: {
        type: String,
        required: true
      },
      brand: {
        type: String,
        required: true
      },
      sku: {
        type: String,
        required: true
      },
      price: {
        type: Number,
        required: true
      },
      units: {
        amount: Number,
        measurement: String
      }
    },
    {
      collection: 'Items',
    });

ItemSchema.index({ createdAt: 1, updatedAt: 1 });

export const Item = mongoose.model('Item', ItemSchema);
export const ItemTC = composeWithMongoose(Item);