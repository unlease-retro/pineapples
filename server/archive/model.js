const mongoose = require('mongoose')

const { collection } = require('./constants')
const Depot = require('../depot')
const Pineapple = require('../pineapple')
const Writer = require('../writer')

const Schema = mongoose.Schema

const Archive = new Schema({
  name: { type: String, required: true, unique: true, index: true },
  depot: { type: Schema.Types.ObjectId, sparse: true, ref: Depot.collection },
  writer: { type: Schema.Types.ObjectId, sparse: true, ref: Writer.collection },
  centroid: [Number],
  items: [ { type: Schema.Types.ObjectId, index: true, ref: Pineapple.collection } ]
}, {
  timestamps: true
})

module.exports = mongoose.model(collection, Archive)
