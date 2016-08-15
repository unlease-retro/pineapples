const Pineapple = require('./model')

exports.create = (id, props) => {

  return Pineapple.create(Object.assign({}, id, props))

}

exports.read = (id) => {

  return Pineapple.findOne({ id })

}

exports.update = (id, props) => {

  return Pineapple.findOneAndUpdate({ id }, Object.assign({}, props), { new: true })

}

exports.list = (filter = {}) => {

  return Pineapple.find(filter)

}
