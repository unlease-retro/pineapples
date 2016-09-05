import { name } from './constants'
import { reasons } from '../shared/constants/index'
import Immutable from 'immutable'
import { prefix, cycleRoute }  from '../shared/util/googleMapsLinkBuilder'

export const getAll = state => state.get(name).toJS()
export const getClusters = state => state.get(name).get('clusters').toJS()
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


  let constructedLinkForCluster = ''
  pineapples.map(pineapple => {

    const coordinates = pineapple.getIn(['location', 'coordinates'])
    const lat = coordinates.get(1)
    const lng = coordinates.get(0)
    constructedLinkForCluster += `/${lat},${lng}`
    //return pineapple.set('googleMapLink', `/${lat},${lng}`)

  })

  const selectedClusterWithGoogleMapLink = selectedCluster.set('googleMapsLink', `${prefix}${constructedLinkForCluster}${cycleRoute}`)
  return selectedClusterWithGoogleMapLink

}

export const selectedCluster = state => {

  const selectedClusterSelection = [name, 'clusters', state.get(name).get('selectedClusterIndex')]
  const selectedCluster = state.getIn(selectedClusterSelection)

  if (selectedCluster) {

    const clusterWithOrderedPineapplesState = state.setIn([...selectedClusterSelection, 'items'], sortClusterItems(selectedCluster))
    const clusterWithOrderedPineapplesAndConstructedGoogleMapsLinksState = clusterWithOrderedPineapplesState.setIn([...selectedClusterSelection], addGoogleMapsLinks(selectedCluster))
    return clusterWithOrderedPineapplesAndConstructedGoogleMapsLinksState.getIn(selectedClusterSelection).toJS()

  }

  return selectedCluster

}
