const Cluster = require('./model')

exports.create = (props) => {

  return Cluster.create(Object.assign({}, props))

}

exports.read = _id => {

  return Cluster.findOne({ _id })

}

exports.update = (_id, props) => {

  return Cluster.findOneAndUpdate({ _id }, Object.assign({}, props), { new: true })

}

exports.remove = _id => {

  return Cluster.remove({ _id })

}

exports.removeAll = () => {

  return Cluster.remove({})

}

exports.list = (filter = {}) => {

  return Cluster.find(filter).populate('items')

}

exports.complete = pineapple => {

  Cluster.findOne({ items: pineapple._id }).populate('items').then( cluster => {

    // have all pineapples in cluster been delivered?
    const { delivered: isFinished } = cluster.items.reduce( (previousItem, currentItem) => {

      return { delivered: (previousItem.delivered && currentItem.delivered) }

    } )

    // complete cluster if all pineapples delivered
    isFinished && Cluster.findOneAndUpdate({ _id: cluster._id }, { finishedAt: new Date() }).exec()

  })

}
