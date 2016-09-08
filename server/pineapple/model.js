const mongoose = require('mongoose')

const { collection } = require('./constants')
const ClusterService = require('../cluster/service')

const Schema = mongoose.Schema

const Pineapple = new Schema({
  streetAddress: { type: String, required: true },
  city: String,
  country: String,
  postcode:  { type: String, required: true },
  from: String,
  to: { type: String, required: true },
  message: { type: String, required: true },
  senderEmail: { type: String, index: true, required: true},
  companyName : { type: String, required: true },
  stripeChargeId: String,
  discountCode: { type: String, index: true },
  location: {
    type: { type: String, default: 'Point' },
    coordinates: { type: [Number], required: true }
  },
  geohash: String,
  dispatched: { type: Boolean, index: true, default: false},
  delivered: { type: Boolean, index: true, default: false },
  deliveredAt: Date,
  deliveredTs: Date,
  undeliveredReason: String,
  reasonComment: String,
  createdAt: { type: Date, index: true }
}, {
  timestamps: true
})

Pineapple.index({location:'2dsphere'})

// update cluster status if all pineapples now delivered
Pineapple.post('findOneAndUpdate', pineapple => ClusterService.complete(pineapple))

module.exports = mongoose.model(collection, Pineapple)
