const Archive = require('./model')

exports.create = props => {

  return Archive.create(Object.assign({}, props))

}

exports.read = _id => {

  const filter = {}

  if (_id) filter._id = _id

  return Archive.find(filter).populate('items depot writer')

}
