const User = require('./model')

exports.create = (_id, props) => {

  return User.create(Object.assign({}, _id, props))

}

exports.read = (role, _id) => {

  const filter = {}

  if (role !== 'any') filter.role = role.toUpperCase()
  if (_id) filter._id = _id

  // .lean() => convert query result (MongooseDocument) to POJO
  return User.find(filter).lean()

}

exports.update = (_id, props) => {

  return User.findOneAndUpdate({ _id }, Object.assign({}, props), { new: true })

}

exports.remove = _id => {

  return User.remove({ _id })

}