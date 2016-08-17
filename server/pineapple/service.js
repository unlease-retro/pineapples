const Pineapple = require('./model')

exports.create = (_id, props) => {

  return Pineapple.create(Object.assign({}, _id, props))

}

exports.read = _id => {

  return Pineapple.findOne({ _id })

}

exports.update = (_id, props) => {

  return Pineapple.findOneAndUpdate({ _id }, Object.assign({}, props), { new: true })

}

exports.list = (filter = {}, limit = 0) => {

  return Pineapple.find(filter).limit(limit).sort({createdAt: 'asc'})

}

exports.track = trackingId => {

  return Pineapple.findOne({ trackingId })

}
