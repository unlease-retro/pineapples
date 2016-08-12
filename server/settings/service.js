const mongoose = require('mongoose')

const schema = require('./model')
const { collection } = require('./constants')

const Settings = mongoose.model(collection, schema)

exports.read = (id) => {

  return Settings.findOne({ id })

}

exports.update = (id, props) => {

  return Settings.findOneAndUpdate({ id }, Object.assign({}, props), { new: true })

}
