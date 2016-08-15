/**
  * @desc Auto clustering service - just like eating semolina 🍰
*/

const ClusterService = require('../../../cluster/service')
const PineappleService = require('../../../pineapple/service')
const clusterize = require('./semolina')
const SettingsService = require('../../../settings/service')
const DepotService = require('../../../depot/service')

const semolina = () => {

  // clear existing clusters data before insert
  return ClusterService.removeAll().then(() => {

    // run auto clustering
    return Promise.all([SettingsService.list(), PineappleService.list({delivered: false})])

  }).then(([ [{clusterLimit}], pineapples ]) => {

    const clusters = clusterize(pineapples, clusterLimit)

    const promises = []

    clusters.map(cluster => {

      promises.push(
        DepotService.nearestTo(cluster)
      )

    })

    return Promise.all(promises).then(depots => {

      // auto allocate to nearest depot based on cluster center
      clusters.forEach((cluster, i)=> {
        cluster.depot = depots[i].name
      })

      return true

    })

  })

  // insert cluster into separate collection/document (with unique and user friendly id)

}

module.exports = semolina
