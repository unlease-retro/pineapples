/**
 * Created by BigaMasta on 8/12/16.
 */
const Helper = require('./helper')

class Cluster {

  constructor(startingItem) {

    const startingPoint = Helper.extractGeoLocPoint(startingItem)
    this.centroid = startingPoint
    this.items = [startingItem]
    this.priority = startingItem.createdAt.getTime()

  }

  populateWithNearest(itemsCount, allItems) {

    for (let i = 0; i < itemsCount && allItems.length > 0; i++) {

      const indexOfNearestPoint = Helper.findIndexOfNearestItemOf(this.centroid, allItems)
      const nearestItem = allItems.splice(indexOfNearestPoint, 1)[0]

      this.items.push(nearestItem)

      this.centroid = Helper.getCentroid(Helper.mapItemsToPoints(this.items))

      this.priority += nearestItem.createdAt.getTime()

    }

  }

}

module.exports = Cluster