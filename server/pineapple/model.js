const mongoose = require('mongoose')

const { collection } = require('./constants')
const ClusterService = require('../cluster/service')

const Schema = mongoose.Schema

const Pineapple = new Schema({
  streetAddress: String,
  flatNumber: String,
  city: String,
  country: String,
  postcode: String,
  from: String,
  to: String,
  message: String,
  senderEmail: { type: String, index: true },
  stripeChargeId: String,
  location: {
    type: { type: String, default: 'Point' },
    coordinates: { type: [Number], required: true }
  },
  geohash: String,
  dispatched: { type: Boolean, index: true, default: false},
  delivered: { type: Boolean, index: true, default: false },
  deliveredAt: Date,
  deliveredTs: Date,
  createdAt: { type: Date, index: true }
}, {
  timestamps: true
})

Pineapple.index({location:'2dsphere'})

// update cluster status if all pineapples now delivered
Pineapple.post('findOneAndUpdate', pineapple => ClusterService.complete(pineapple))

module.exports = mongoose.model(collection, Pineapple)
