/**
 * Created by BigaMasta on 8/15/16.
 */
const centroid = require('turf-centroid')

const deg2rad = (deg) => {

  return deg * (Math.PI/180)

}

const getDistanceFromLatLonInKm = (lat1, lon1, lat2, lon2)=> {

  const R = 6371 // Radius of the earth in km
  const dLat = deg2rad(lat2-lat1)  // deg2rad below
  const dLon = deg2rad(lon2-lon1)
  const a =
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
      Math.sin(dLon/2) * Math.sin(dLon/2)

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a))
  const d = R * c // Distance in km

  return d

}

const extractGeoLocPoint = (item) => {

  return [item.location.coordinates[1], item.location.coordinates[0]]

}

const mapItemToPoint = (item) => {

  return extractGeoLocPoint(item)

}

module.exports = {

  getDistanceFromLatLonInKm,

  getCentroid :  (arr) => {

    var poly = {
      'type': 'Feature',
      'properties': {},
      'geometry': {
        'type': 'Polygon',
        'coordinates': [arr]
      }
    }

    if (arr.length === 1)
      return arr[0]

    return centroid(poly).geometry.coordinates

  },

  findIndexOfNearestItemOf: (centroid, items) => {

    let indexOfNearestPoint = 0
    let distanceOfTheNearestPoint = 100

    items.map((item, index) => {

      const point = mapItemToPoint(item)
      const distance = getDistanceFromLatLonInKm(centroid[0], centroid[1], point[0], point[1])
      if (distance < distanceOfTheNearestPoint) {

        indexOfNearestPoint = index
        distanceOfTheNearestPoint = distance

      }

    })

    return indexOfNearestPoint

  },

  extractGeoLocPoint,

  mapItemsToPoints: (items) => {

    return items.map((item) => {

      return mapItemToPoint(item)

    })

  },
  mapItemToPoint
}