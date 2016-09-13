const mongoose = require('mongoose')

const { collection } = require('./constants')

const Schema = mongoose.Schema

const Subscriptions = new Schema({
  email: { type: String, required: true },
  createdAt: { type: Date, index: true}
}, {
  timestamps: true
})

module.exports = mongoose.model(collection, Subscriptions)
