const Cluster = require('./model')
const WriterService = require('../writer/service')

exports.create = (props) => {

  return Cluster.create(Object.assign({}, props))

}

exports.read = _id => {

  return Cluster.findOne({ _id }).populate('rider')

}

exports.update = (_id, props) => {

  return Cluster.findOneAndUpdate({ _id }, Object.assign({}, props), { new: true }).populate('items depot rider')

}

exports.remove = _id => {

  return Cluster.remove({ _id })

}

exports.removeAll = () => {

  return Cluster.remove({})

}

exports.list = (filter = {}) => {

  return Cluster.find(filter).populate('items depot rider')

}

exports.writer = (_id, writerId) => {

  return Cluster.findOneAndUpdate({ _id }, { writer: writerId }, { new: true })
    .populate('items writer')
    .then( WriterService.sendEmail )

}

exports.complete = pineapple => {

  Cluster.findOne({ items: pineapple._id }).populate('items').then( cluster => {

    // have all pineapples in cluster been delivered?
    const { delivered: isFinished } = cluster.items.reduce( (previousItem, currentItem) => {

      return { delivered: (previousItem.delivered && (currentItem.delivered
                                                   || !currentItem.delivered && currentItem.undeliveredReason)) }

    }, { delivered: true } )

    // complete cluster if all pineapples delivered
    if (isFinished)
      Cluster.findOneAndUpdate({ _id: cluster._id }, { finishedAt: new Date() }).exec()
    else if (cluster.finishedAt)
      Cluster.findOneAndUpdate({ _id: cluster._id }, { finishedAt: null }).exec()

  })

}

exports.populateRiderWithUnfinishedClusters = users => {

  const ridersPromises = []

  users.map( user => {

    if (user.role === 'RIDER') {

      // find rider's unfinished clusters
      ridersPromises.push(Cluster.find({ rider: user._id, $or: [{ finishedAt: null }, { finishedAt: {$exists: false} }] })
        .populate('items')
        .then( clusters => {

          user.clusters = clusters

          return Promise.resolve()

        }))

    }

  })

  return Promise.all(ridersPromises).then( () => Promise.resolve(users) )

}


exports.findAllPineapplesInClusters = () => {

  return Cluster.find()
    .then(
      (clusters) => {

        let pineapplesInCluster = []
        clusters.map(cluster => {

          pineapplesInCluster.push(cluster.items)

        })
        pineapplesInCluster = [].concat.apply([], pineapplesInCluster)
        return Promise.resolve(pineapplesInCluster)

      }
    )

}
