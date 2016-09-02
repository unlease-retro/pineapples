import { name } from './constants'
import { reasons } from '../shared/constants/index'
import Immutable from 'immutable'

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

export const selectedCluster = state => {

  const selectedClusterSelection = [name, 'clusters', state.get(name).get('selectedClusterIndex')]
  const selectedCluster = state.getIn(selectedClusterSelection)

  if (selectedCluster) {

    const clusterWithOrderedPineapplesState = state.setIn([...selectedClusterSelection, 'items'], sortClusterItems(selectedCluster))
    return clusterWithOrderedPineapplesState.getIn(selectedClusterSelection).toJS()

  }

  return selectedCluster

}
