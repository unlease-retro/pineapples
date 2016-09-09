import { createSelector } from 'reselect'
//import Immutable from 'immutable'
//import { OTHER } from '../shared/constants'

import { name } from './constants'
import { reasons } from '../shared/constants/index'
import { prefix, cycleRoute, routeSteps }  from '../shared/util/googleMapsLinkBuilder'
import { getKM } from '../shared/util'


const addHasUndeliveredReasons = selectedCluster => {

  const items = selectedCluster.get('items')

  if (items.filter(item => item.get('undeliveredReason')).size > 0)
    return selectedCluster.set('hasUndeliveredReasons', true)
  else
    return selectedCluster.set('hasUndeliveredReasons', false)

}

const addFinished = selectedCluster => {

  const items = selectedCluster.get('items')

  if (items.filter(item => !item.get('delivered') && !item.get('undeliveredReason')).size > 0)
    return selectedCluster.set('finished', false)
  else
    return selectedCluster.set('finished', true)

}


export const getAll = state => state.get(name)
export const getClusters = state => {

  const clusters = state.getIn([name, 'clusters'])
  const clustersWithHasUndeliveredReasonsAndFinished = clusters.map(addHasUndeliveredReasons).map(addFinished)
  return clustersWithHasUndeliveredReasonsAndFinished

}

//export const getClusters = state => state.get(name).get('clusters')
export const getUndeliveredReasonOptions = () => reasons.map(reason => ({ value: reason, label: reason }))

//const sortClusterItems = (selectedCluster) => {
//
//  const items = selectedCluster.get('items')
//
//  let deliveredItems = Immutable.List()
//  let undeliveredWithReasonItems = Immutable.List()
//  let otherItems = Immutable.List()
//
//  items.map((item, index) => {
//
//    if (item.get('delivered'))
//      deliveredItems = deliveredItems.push(item.set('originalIndex', index))
//    else if (!item.get('delivered') && item.get('undeliveredReason')) {
//
//      if (item.get('undeliveredReason') === OTHER && !item.get('reasonComment'))
//        otherItems = otherItems.push(item.set('originalIndex', index))
//      else
//        undeliveredWithReasonItems = undeliveredWithReasonItems.push(item.set('originalIndex', index))
//
//    }
//
//    else
//      otherItems = otherItems.push(item.set('originalIndex', index))
//
//  })
//
//  return selectedCluster.set('items', [...otherItems, ...undeliveredWithReasonItems, ...deliveredItems])
//
//}

const addGoogleMapsLinks = (selectedCluster) => {

  const pineapples = selectedCluster.get('items')
  const depotLocation = selectedCluster.getIn(['depot', 'location', 'coordinates'])
  let fromLat = depotLocation.get(1)
  let fromLng = depotLocation.get(0)

  let constructedLinkForCluster = `/${fromLat},${fromLng}`

  const pineapplesWithGoogleMapsLinks = pineapples.map((pineapple, index) => {

    const coordinates = pineapple.getIn(['location', 'coordinates'])

    const toLat = coordinates.get(1)
    const toLng = coordinates.get(0)
    constructedLinkForCluster += `/${toLat},${toLng}`

    let resultValue = ''

    // first pineapple has route from depot
    if (index === 0)
      resultValue = pineapple.set('googleMapsLink', `${prefix}/${fromLat},${fromLng}/${toLat},${toLng}${cycleRoute}${routeSteps}`)
    else
      resultValue = pineapple.set('googleMapsLink', `${prefix}/${fromLat},${fromLng}/${toLat},${toLng}${cycleRoute}${routeSteps}`)

    fromLat = toLat
    fromLng = toLng

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

    // add google maps links
    const clusterWithConstructedGoogleMapsLinksState = state.setIn([...selectedClusterSelection], addGoogleMapsLinks(state.getIn([...selectedClusterSelection])))
    // sort by delivered
    //const clusterConstructedGoogleMapsLinksStateAndOrderedByDeliveredState =
    //  clusterWithConstructedGoogleMapsLinksState
    //    .setIn([...selectedClusterSelection], sortClusterItems(
    //      clusterWithConstructedGoogleMapsLinksState
    //        .getIn([...selectedClusterSelection])
    //      )
    //    )

    return clusterWithConstructedGoogleMapsLinksState.getIn([...selectedClusterSelection])

  }

  return selectedCluster

}

export const getClusterRouteLegs = createSelector( [ selectedCluster ], cluster => cluster && cluster.getIn([ 'route', 'legs' ]) )
export const getClusterDistance = createSelector( [ getClusterRouteLegs ], legs => legs && getKM(legs.reduce( (distance, leg) => distance += leg.getIn([ 'distance', 'value' ]), 0) ))
export const getDepotName = createSelector( [selectedCluster], cluster => cluster && cluster.getIn(['depot', 'name']))