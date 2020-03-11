import mongoose from 'mongoose';

const envStatusSchema = new mongoose.Schema({
  timestamp: { type: Date, default: Date.now },
  isMongoRunning: Boolean,
  isMongoConnected: Boolean,
  isAPIRunning: Boolean
});

export default mongoose.model('EnvStatus', envStatusSchema, 'EnvStatus');
