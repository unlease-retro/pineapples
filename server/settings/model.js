const mongoose = require('mongoose')

const Schema = mongoose.Schema

const Settings = new Schema({
  dailyLimit: { type: Number, required: true },
  clusterLimit: { type: Number, required: true },
  active: { type: Boolean, required: true, default: true },
  postcodes: [String]
},
{
  timestamps: true
})

module.exports = Settings
