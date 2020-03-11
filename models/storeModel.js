import mongoose from 'mongoose';

const storeSchema = new mongoose.Schema({
  storeId: Number,
  name: String,
  address: String
});

export default mongoose.model('Stores', storeSchema, 'Stores');