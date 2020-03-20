import mongoose, { Schema } from 'mongoose';
import { composeWithMongoose } from 'graphql-compose-mongoose';
import { ObjectId } from 'mongodb';

export const StoreSchema = new Schema(
    {
        id: { type: mongoose.Schema.Types.ObjectId, default: ObjectId() },
        name: String,
        address: String,
        layoutUrl: String,
        aisles: [
            {
                aisleId: String,
                items: [String],
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