const mongoose = require('mongoose')

const schema = require('./model')
const { collection } = require('./constants')

const User = mongoose.model(collection, schema)

exports.create = (id, props) => {

  return User.create(Object.assign({}, id, props))

}

exports.read = (id) => {

  return User.findOne({ id })

}

exports.update = (id, props) => {

  return User.findOneAndUpdate({ id }, Object.assign({}, props), { new: true })

}

exports.remove = (id) => {

  return User.remove({ id })

}
