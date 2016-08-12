const mongoose = require('mongoose')

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
  trackingId: { type: String, unique: true, index: true },
  location: {
    type: { type: String, default: 'Point' },
    coordinates: { type: [Number], required: true, index: '2dsphere' }
  },
  geohash: String,
  dispatched: { type: Boolean, index: true },
  delivered: { type: Boolean, index: true },
  deliveredAt: Date,
  deliveredTs: Date,
  createdAt: { type: Date, index: true }
},
{
  timestamps: true
})

module.exports = Pineapple
