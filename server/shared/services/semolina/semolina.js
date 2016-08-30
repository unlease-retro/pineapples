const Cluster = require('./Cluster')
const Helper = require('./helper')
/**
 * Created by BigaMasta on 8/12/16.
 */
function findIndexOfItemMostFarAwayFromCentroid(centroid, items) {

  let theIndexItemMostFarAway = null
  let distanceOfTheItemMostFarAway = 0

  items.map((item, index) => {

    const point = Helper.mapItemToPoint(item)

    const distance = Helper.getDistanceFromLatLonInKm(centroid[0], centroid[1], point[0], point[1])

    if (distance > distanceOfTheItemMostFarAway) {

      theIndexItemMostFarAway = index
      distanceOfTheItemMostFarAway = distance

    }

  })

  return theIndexItemMostFarAway

}

function findStartingItem(items) {

  let centroid = Helper.getCentroid(Helper.mapItemsToPoints(items))
  let startingItemIndex = findIndexOfItemMostFarAwayFromCentroid(centroid, items)
  let startingItem = items.splice(startingItemIndex, 1)[0]
  return startingItem

}

function eatSemolina(items, clusterLimit) {

  const clusters = []

  while (items.length > 0) {

    let startingItem = findStartingItem(items)
    let cluster = makeNewClusterWithItem(startingItem)
    cluster.populateWithNearest(clusterLimit - 1, items)
    clusters.push(cluster)

  }

  return clusters

}

function makeNewClusterWithItem(startingItem) {

  return new Cluster(startingItem)

}

const clusterize = eatSemolina

module.exports = clusterize