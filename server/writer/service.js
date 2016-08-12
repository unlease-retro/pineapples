const mongoose = require('mongoose')

const schema = require('./model')
const { collection } = require('./constants')

const Writer = mongoose.model(collection, schema)

exports.create = (id, props) => {

  return Writer.create(Object.assign({}, id, props))

}

exports.read = (id) => {

  return Writer.findOne({ id })

}

exports.update = (id, props) => {

  return Writer.findOneAndUpdate({ id }, Object.assign({}, props), { new: true })

}

exports.remove = (id) => {

  return Writer.remove({ id })

}
