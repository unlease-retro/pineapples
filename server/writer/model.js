const mongoose = require('mongoose')

const Schema = mongoose.Schema

const Writer = new Schema({
  email: { type: String, required: true, unique: true, index: true }
},
{
  timestamps: true
})

module.exports = Writer
