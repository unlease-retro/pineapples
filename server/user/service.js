const User = require('./model')

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

exports.list = (filter = {}) => {

  return User.find(filter)

}
