import mongoose, { Schema } from 'mongoose';
import { composeWithMongoose } from 'graphql-compose-mongoose';

export const StoreSchema = new Schema({
      _id: mongoose.Schema.Types.ObjectId,
      storeId: Number,
      managerId: Number,
      name: String,
      address: String,
      aisles: [{
        aisleId: Number,
        categories: [String],
        items: [{ type: Schema.Types.ObjectId, ref: 'Items'}],
        position: {
          xPos: Number,
          yPos: Number
        }
      }]
    },
    {
      collection: 'Stores',
    });

StoreSchema.index({ createdAt: 1, updatedAt: 1 });

export const Store = mongoose.model('Store', StoreSchema);
export const StoreTC = composeWithMongoose(Store);