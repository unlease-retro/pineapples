const mongoose = require('mongoose')

const { collection } = require('./constants')

const Schema = mongoose.Schema

const Depot = new Schema({
  name: { type: String, required: true, unique: true },
  active: { type: Boolean, required: true, default: true },
  location: {
    type: { type: String, default: 'Point' },
    coordinates: { type: [Number], required: true }
  }
}, {
  timestamps: true
})

Depot.index({location:'2dsphere'})

module.exports = mongoose.model(collection, Depot)
