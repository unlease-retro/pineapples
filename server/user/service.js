const User = require('./model')

exports.create = (_id, props) => {

  return User.create(Object.assign({}, _id, props))

}

exports.read = _id => {

  return User.findOne({ _id })

}

exports.update = (_id, props) => {

  return User.findOneAndUpdate({ _id }, Object.assign({}, props), { new: true })

}

exports.remove = _id => {

  return User.remove({ _id })

}

exports.list = (filter = {}) => {

  return User.find(filter)

}
