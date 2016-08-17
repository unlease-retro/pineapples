const mongoose = require('mongoose')

const { collection } = require('./constants')
const Depot = require('../depot')
const Pineapple = require('../pineapple')
const User = require('../user')
const Writer = require('../writer')

const Schema = mongoose.Schema

const Cluster = new Schema({
  name: { type: String, required: true, unique: true, index: true },
  depot: { type: Schema.Types.ObjectId, sparse: true, ref: Depot.collection },
  rider: { type: Schema.Types.ObjectId, sparse: true, ref: User.collection },
  writer: { type: Schema.Types.ObjectId, sparse: true, ref: Writer.collection },
  centroid: [Number],
  currentLocation: [Number],
  deliverable: { type: Boolean, default: false, index: true },
  priority: { type: Number, index: true },
  startedAt: Date,
  finishedAt: Date,
  items: [ { type: Schema.Types.ObjectId, index: true, ref: Pineapple.collection } ]
}, {
  timestamps: true
})

module.exports = mongoose.model(collection, Cluster)
