import { name } from './constants'
import { reasons } from '../shared/constants/index'
import Immutable from 'immutable'

export const getAll = state => state.get(name).toJS()
export const getClusters = state => state.get(name).get('clusters').toJS()
export const getUndeliveredReasonOptions = () => reasons.map(reason => ({ value: reason, label: reason }))
export const selectedCluster = state => {

  const index = state.get(name).get('selectedClusterIndex')
  const selectedCluster = state.getIn([name, 'clusters', index])

  if (selectedCluster) {

    const waypointOrder = selectedCluster.getIn(['route', 'waypoint_order'])
    const items = selectedCluster.get('items')
    let newOrder = new Immutable.List()

    waypointOrder.map(orderItemIndex => {

      newOrder = newOrder.push(items.get(orderItemIndex))

    })

    const clusterWithOrderedPineapplesState = state.setIn([name, 'clusters', index, 'items'], newOrder)

    return clusterWithOrderedPineapplesState.getIn([name, 'clusters', index]).toJS()

  }

  return selectedCluster

}
