const mongoose = require('mongoose')

const schema = require('./model')
const { collection } = require('./constants')

const Pineapple = mongoose.model(collection, schema)

exports.create = (id, props) => {

  return Pineapple.create(Object.assign({}, id, props))

}

exports.read = (id) => {

  return Pineapple.findOne({ id })

}

exports.update = (id, props) => {

  return Pineapple.findOneAndUpdate({ id }, Object.assign({}, props), { new: true })

}

exports.list = (filter) => {

  // TODO

  return Pineapple.find(filter)

}
