const Writer = require('./model')

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

exports.list = () => {

  return Writer.find()

}
