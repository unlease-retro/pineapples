const mongoose = require('mongoose')

const { collection } = require('./constants')

const Schema = mongoose.Schema

const Discount = new Schema({
  code: { type: String, required: true, unique: true },
  active: { type: Boolean, required: true, default: true },
  amountInPence: { type: Number, required: true }
 
}, {
  timestamps: true
})


module.exports = mongoose.model(collection, Discount)
