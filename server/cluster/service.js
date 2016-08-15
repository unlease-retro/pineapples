const Cluster = require('./model')

exports.create = (id, props) => {

  return Cluster.create(Object.assign({}, id, props))

}

exports.read = (id) => {

  return Cluster.findOne({ id })

}

exports.update = (id, props) => {

  return Cluster.findOneAndUpdate({ id }, Object.assign({}, props), { new: true })

}

exports.remove = (id) => {

  return Cluster.remove({ id })

}

exports.removeAll = () => {

  return Cluster.remove({})

}
