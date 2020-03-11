import mongoose from 'mongoose';

let envStatusSchema = new mongoose.Schema({
    timestamp: { type: Date, default: Date.now },
    isMongoRunning: Boolean,
    isMongoConnected: Boolean,
    isAPIRunning: Boolean
});

let EnvStatus = mongoose.model('EnvStatus', envStatusSchema, 'EnvStatus')

export default EnvStatus;