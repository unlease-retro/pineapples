import * as actions from './actionTypes'
import * as service from './service'

export const fetchClusters = () => ({
  types: [ actions.FETCH_CLUSTERS_REQUEST, actions.FETCH_CLUSTERS_SUCCESS, actions.FETCH_CLUSTERS_FAILURE ],
  payload: { error: null },
  promise: () => new Promise( (resolve, reject) => service.fetchClusters(resolve, reject) )
})

export const selectCluster = (selectedClusterIndex) => ({
  type: actions.SELECT_CLUSTER,
  payload: { selectedClusterIndex }
})

export const changeStatus = (pineapple, newStatus, itemIndex) => ({
  types: [ actions.CHANGE_STATUS_REQUEST, actions.CHANGE_STATUS_SUCCESS, actions.CHANGE_STATUS_FAILURE ],
  payload: { error: null },
  promise: () => new Promise( (resolve, reject) => service.changeStatus(pineapple._id, newStatus, itemIndex, resolve, reject) )
})

export const unselectCluster = () => ({
  type: actions.UNSELECT_CLUSTER,
  payload: { selectedClusterIndex: null }
})

export const startClusterDelivery = (cluster) => ({
  types: [ actions.START_CLUSTER_DELIVERY_REQUEST, actions.START_CLUSTER_DELIVERY_SUCCESS, actions.START_CLUSTER_DELIVERY_FAILURE ],
  payload: { error: null },
  promise: () => new Promise( (resolve, reject) => service.startClusterDelivery(cluster, resolve, reject) )
})
