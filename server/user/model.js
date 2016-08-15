const mongoose = require('mongoose')

const { collection } = require('./constants')

const Schema = mongoose.Schema

const User = new Schema({
  firstname: String,
  lastname: String,
  role: String,
  email: { type: String, required: true, unique: true, index: true },
  phone: String
}, {
  timestamps: true
})

module.exports = mongoose.model(collection, User)
