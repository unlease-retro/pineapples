const mongoose = require('mongoose')

const { collection } = require('./constants')
const Depot = require('../depot')
const Pineapple = require('../pineapple')
const User = require('../user')
const Writer = require('../writer')
const ArchiveService = require('../archive/service')

const Schema = mongoose.Schema

const Cluster = new Schema({
  name: { type: String, required: true, unique: true, index: true },
  depot: { type: Schema.Types.ObjectId, sparse: true, ref: Depot.collection },
  rider: { type: Schema.Types.ObjectId, sparse: true, ref: User.collection },
  writer: { type: Schema.Types.ObjectId, sparse: true, ref: Writer.collection },
  centroid: [Number],
  currentLocation: [Number],
  deliverable: { type: Boolean, default: true, index: true },
  priority: { type: Number, index: true },
  colour: String,
  route: Object,
  startedAt: Date,
  finishedAt: Date,
  items: [ { type: Schema.Types.ObjectId, index: true, ref: Pineapple.collection } ]
}, {
  timestamps: true
})

// post save hook
Cluster.post('save', (doc, next) => {

  const { name, depot, writer, centroid, items } = doc

  // archive cluster
  ArchiveService.create({ name, depot, writer, centroid, items })
    .then( () => next() )

})

Cluster.post('findOneAndUpdate', cluster => {

  const pineapplesIds =
    cluster
      .items
      .map(item => item._id)

  if (cluster.startedAt)
    Pineapple.service.updateMultiple(pineapplesIds,
      {dispatched: true, undeliveredReason: null, reasonComment: null, $inc: {attempts:1}}
    )


})

module.exports = mongoose.model(collection, Cluster)
