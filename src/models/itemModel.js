import mongoose from 'mongoose';
import { composeWithMongoose } from 'graphql-compose-mongoose';

const ItemSchema = new mongoose.Schema({
        _id: mongoose.Schema.Types.ObjectId,
        name: String,
        brand: String,
        sku: String
    },
    {
      collection: 'Items',
    });

ItemSchema.index({ sku: 1 });

export const Item = mongoose.model('Item', ItemSchema);
export const ItemTC = composeWithMongoose(Item);