/**
  * @desc Auto clustering service - just like eating semolina 🍰
*/
const Moniker = require('moniker')

const ClusterService = require('../../../cluster/service')
const PineappleService = require('../../../pineapple/service')
const SettingsService = require('../../../settings/service')
const DepotService = require('../../../depot/service')
const WriterService = require('../../../writer/service')
const UserService = require('../../../user/service')

const { reorderClustersByWaypointOrder } = require('../../util/cluster')

const clusterize = require('./semolina')
const prioritize = require('../prioritize')
const mapping = require('../mapping')

const { MANAGER } = require('../../../shared/constants').ROLES

const semolina = (dailyLimit) => {

  // clear existing clusters data before insert
  return ClusterService.removeAll().then( () => {

    // run auto clustering
    return Promise.all([
      SettingsService.read(),
      PineappleService.list({delivered: false}, dailyLimit),
      WriterService.list(),
      UserService.read(MANAGER)
    ])

  }).then(([ [{clusterLimit}], pineapples, writers, managers ]) => {

    // run the Semolina clustering algorithm
    const clusters = clusterize(pineapples, clusterLimit)

    // find nearest depot to cluster
    const getDepots = clusters.map( cluster => DepotService.nearestTo(cluster) )

    return Promise.all(getDepots).then( depots => {

      // init cluster name cache
      const names = []

      clusters.forEach( (cluster, i) => {

        // generate random cluster name
        let name = Moniker.choose()

        // prevent duplicate cluster name
        while (names.indexOf(name) >= 0) name = Moniker.choose()

        // cache cluster name to avoid duplicates
        names.push(name)

        // set cluster name, depot and writer
        cluster.name = name
        cluster.depot = depots[i]._id
        cluster.writer = writers[i % writers.length]

        // calculate average priority
        cluster.priority /= cluster.items.length

        // calculate cluster colour based on priority
        cluster.colour = prioritize.getClusterColour(cluster.priority)

      })

      return { clusters, depots }

    }).then( ({ clusters, depots }) => {

      // get optimised route and directions
      const getRoutes = clusters.map( (cluster, i) => mapping.getOptimisedRoute(cluster.items, depots[i]) )

      return Promise.all(getRoutes).then( routes => {

        const everyClusterCreated = []

        clusters.forEach( (cluster, i) => {

          // set cluster route
          cluster.route = routes[i]


          // insert cluster into separate collection/document (with unique and user friendly id)
          everyClusterCreated.push(ClusterService.create(cluster))

        })

        // reorder the cluster's pineapples based on route (for writer, and rider)
        reorderClustersByWaypointOrder(clusters)

        // send email to writer and managers
        clusters.forEach(cluster => WriterService.sendEmail(cluster, managers))

        return Promise.all(everyClusterCreated)

      })

    })

  })

}

module.exports = semolina
