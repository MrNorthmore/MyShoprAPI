import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema({
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
    type: Double,
    required: true
  },
  units: {
    amount: Double,
    measurement: String
  }
});

export default mongoose.model('Items', itemSchema, 'Items');