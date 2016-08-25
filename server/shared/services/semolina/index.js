/**
  * @desc Auto clustering service - just like eating semolina 🍰
*/
const Moniker = require('moniker')

const ClusterService = require('../../../cluster/service')
const PineappleService = require('../../../pineapple/service')
const SettingsService = require('../../../settings/service')
const DepotService = require('../../../depot/service')
const WriterService = require('../../../writer/service')

const clusterize = require('./semolina')

const semolina = (dailyLimit) => {

  // clear existing clusters data before insert
  return ClusterService.removeAll().then(() => {

    // run auto clustering
    return Promise.all([
      SettingsService.read(),
      PineappleService.list({delivered: false}, dailyLimit),
      WriterService.list()
    ])

  }).then(([ [{clusterLimit}], pineapples, writers ]) => {

    const clusters = clusterize(pineapples, clusterLimit)

    const promises = []

    clusters.map(cluster => {

      promises.push(
        DepotService.nearestTo(cluster)
      )

    })

    return Promise.all(promises).then(depots => {

      const names = []

      // auto allocate to nearest depot based on cluster center
      clusters.forEach((cluster, i)=> {

        let name = Moniker.choose()

        while (names.indexOf(name) >= 0) {

          name = Moniker.choose()

        }

        names.push(name)

        cluster.name = name
        cluster.depot = depots[i]._id
        cluster.writer = writers[i % writers.length]

        // insert cluster into separate collection/document (with unique and user friendly id)
        ClusterService.create(cluster)

      })
      
      return clusters

    })

  })

}

module.exports = semolina
