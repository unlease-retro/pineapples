const mongoose = require('mongoose')

const Schema = mongoose.Schema

const Cluster = new Schema({
  name: { type: String, required: true, unique: true, index: true },
  depot: { type: String, sparse: true },
  rider: { type: String, sparse: true },
  writer: String,
  centroid: [Number],
  currentLocation: [Number],
  deliverable: { type: Boolean, index: true },
  startedAt: Date,
  items: [
    {
      pineapple: { type: String, index: true },
      delivered: Boolean,
      deliveredAt: Date,
      deliveredTs: Date
    }
  ]
},
{
  timestamps: true
})

module.exports = Cluster
