const mongoose = require('mongoose')

const { collection } = require('./constants')

const Schema = mongoose.Schema

const User = new Schema({
  firstname: String,
  lastname: String,
  role : { type: String, required: true, enum: ['SUPERUSER', 'MANAGER', 'RIDER'] },
  email: { type: String, required: true, unique: true, index: true },
  phone: String
}, {
  timestamps: true
})

module.exports = mongoose.model(collection, User)
