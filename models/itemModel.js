const mongoose = require('mongoose')

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
})

module.exports = mongoose.model('Items', itemSchema, 'Items')