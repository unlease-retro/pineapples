const mongoose = require('mongoose')

const { collection } = require('./constants')
const Pineapple = require('../pineapple')

const Schema = mongoose.Schema

const Cluster = new Schema({
  name: { type: String, required: true, unique: true, index: true },
  depot: { type: String, sparse: true },
  rider: { type: String, sparse: true },
  writer: String,
  centroid: [Number],
  currentLocation: [Number],
  deliverable: { type: Boolean, default: false, index: true },
  priority: { type: Number, index: true },
  startedAt: Date,
  items: [ { type: Schema.Types.ObjectId, index: true, ref: Pineapple.collection } ]
}, {
  timestamps: true
})

module.exports = mongoose.model(collection, Cluster)
