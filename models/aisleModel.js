import mongoose from 'mongoose';

const aisleSchema = new mongoose.Schema({
    aisleId: Number,
    categories: [String],
    items: [ {type: mongoose.Schema.Types.ObjectId, ref: 'Items'} ],
    position: {
        xPos: Number,
        yPos: Number
    }
});

export default mongoose.model('Aisle', aisleSchema, 'Stores');