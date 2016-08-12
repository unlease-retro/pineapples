const mongoose = require('mongoose')

const schema = require('./model')
const { collection } = require('./constants')

const Depot = mongoose.model(collection, schema)

exports.create = (id, props) => {

  return Depot.create(Object.assign({}, id, props))

}

exports.read = (id) => {

  return Depot.findOne({ id })

}

exports.update = (id, props) => {

  return Depot.findOneAndUpdate({ id }, Object.assign({}, props), { new: true })

}
