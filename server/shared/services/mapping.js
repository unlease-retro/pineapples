/**
  * @desc Mapping service - provides an interface to the Google Maps API
*/

const config = require('../config')
const key = config.get('google.api')

const { MAP_ROUTE_OPTIONS } = require('../constants')

const client = require('@google/maps').createClient({ key, Promise: Promise })

const getPosition = ([ lng, lat ]) => ({ lat, lng })

exports.getOptimisedRoute = (items, depot) => {

  // set origin and destination as depot location
  let origin, destination
  origin = destination = getPosition(depot.location.coordinates)

  // construct waypoints from item locations
  const waypoints = items.map( item => getPosition(item.location.coordinates) )

  // run query
  return client.directions( Object.assign({}, MAP_ROUTE_OPTIONS, { origin, destination, waypoints }) ).asPromise()
    .then( ({ json }) => {

      const { routes: [ route ] } = json

      return route

    })

}
