import Immutable from 'immutable'
import { createSelector } from 'reselect'

import { name } from './constants'
import { reasons } from '../shared/constants/index'
import { prefix, cycleRoute, routeSteps }  from '../shared/util/googleMapsLinkBuilder'
import { getKM, getHoursMins } from '../shared/util'

export const getAll = state => state.get(name)
export const getClusters = state => state.get(name).get('clusters')
export const getUndeliveredReasonOptions = () => reasons.map(reason => ({ value: reason, label: reason }))

const sortClusterItems = (selectedCluster) => {

  const waypointOrder = selectedCluster.getIn(['route', 'waypoint_order'])
  const items = selectedCluster.get('items')

  let deliveredOrderedItems = new Immutable.List()
  let undeliveredOrderedItems = new Immutable.List()

  waypointOrder.map(orderItemIndex => {

    const itemToBeConsidered = items.get(orderItemIndex)
    if (itemToBeConsidered.get('delivered'))
      deliveredOrderedItems = deliveredOrderedItems.push(itemToBeConsidered.set('originalIndex', orderItemIndex))
    else
      undeliveredOrderedItems = undeliveredOrderedItems.push(itemToBeConsidered.set('originalIndex', orderItemIndex))

  })

  return undeliveredOrderedItems.concat(deliveredOrderedItems)

}

const addGoogleMapsLinks = (selectedCluster) => {

  const pineapples = selectedCluster.get('items')

  const depotLocation = selectedCluster.getIn(['depot', 'location', 'coordinates'])
  let fromLat = depotLocation.get(1)
  let fromLng = depotLocation.get(0)

  let constructedLinkForCluster = ''
  const pineapplesWithGoogleMapsLinks = pineapples.map((pineapple, index) => {

    const coordinates = pineapple.getIn(['location', 'coordinates'])
    const toLat = coordinates.get(1)
    const toLng = coordinates.get(0)
    constructedLinkForCluster += `/${toLat},${toLng}`

    let resultValue = ''

    // first pineapple has route from depot
    const firstClusterInPathIndex = selectedCluster.getIn(['route', 'waypoint_order', 0])
    const originalIndexOfCurrentPineapple = selectedCluster.getIn('items', index, 'originalIndex')
    if (firstClusterInPathIndex === originalIndexOfCurrentPineapple)
      resultValue = pineapple.set('googleMapsLink', `${prefix}/${fromLat},${fromLng}/${toLat},${toLng}${cycleRoute}${routeSteps}`)
    else
      resultValue = pineapple.set('googleMapsLink', `${prefix}/${fromLat},${fromLng}/${toLat},${toLng}${cycleRoute}${routeSteps}`)

    fromLat = coordinates.get(1)
    fromLng = coordinates.get(0)

    return resultValue

  })

  const selectedClusterWithGoogleMapLink = selectedCluster
    .set('googleMapsLink', `${prefix}${constructedLinkForCluster}${cycleRoute}${routeSteps}`)
    .setIn(['items'], pineapplesWithGoogleMapsLinks)
  return selectedClusterWithGoogleMapLink

}

export const selectedCluster = state => {

  const selectedClusterSelection = [name, 'clusters', state.get(name).get('selectedClusterIndex')]
  const selectedCluster = state.getIn(selectedClusterSelection)

  if (selectedCluster) {

    const clusterWithOrderedPineapplesState = state.setIn([...selectedClusterSelection, 'items'], sortClusterItems(selectedCluster))
    const clusterWithOrderedPineapplesAndConstructedGoogleMapsLinksState = clusterWithOrderedPineapplesState.setIn([...selectedClusterSelection], addGoogleMapsLinks(clusterWithOrderedPineapplesState.getIn([...selectedClusterSelection])))
    //console.log(clusterWithOrderedPineapplesAndConstructedGoogleMapsLinksState.getIn([name, 'clusters', state.get(name).get('selectedClusterIndex')]).toJS())
    return clusterWithOrderedPineapplesAndConstructedGoogleMapsLinksState.getIn([...selectedClusterSelection])

  }

  return selectedCluster

}

export const getClusterRouteLegs = createSelector( [ selectedCluster ], cluster => cluster && cluster.getIn([ 'route', 'legs' ]) )
export const getClusterDistance = createSelector( [ getClusterRouteLegs ], legs => legs && getKM(legs.reduce( (distance, leg) => distance += leg.getIn([ 'distance', 'value' ]), 0) ))
export const getClusterDuration = createSelector( [ getClusterRouteLegs ], legs => legs && getHoursMins(legs.reduce( (duration, leg) => duration += leg.getIn([ 'duration', 'value' ]), 0) ))
