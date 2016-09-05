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

export const changeStatus = (pineappleId, newStatus, itemIndex) => ({
  types: [ actions.CHANGE_STATUS_REQUEST, actions.CHANGE_STATUS_SUCCESS, actions.CHANGE_STATUS_FAILURE ],
  payload: { error: null },
  promise: () => new Promise( (resolve, reject) => service.changeStatus(pineappleId, newStatus, itemIndex, resolve, reject) )
})

export const unselectCluster = () => ({
  type: actions.UNSELECT_CLUSTER,
  payload: { selectedClusterIndex: null }
})

export const changeReason = (reason, itemIndex) => ({
  type: actions.CHANGE_UNDELIVERED_REASON,
  payload: { pineappleIndex: itemIndex, undeliveredReason: reason }
})

export const changeReasonComment = (comment, itemIndex) => ({
  type: actions.CHANGE_REASON_COMMENT,
  payload: { pineappleIndex: itemIndex, reasonComment: comment }
})

export const startClusterDelivery = (clusterId) => ({
  types: [ actions.START_CLUSTER_DELIVERY_REQUEST, actions.START_CLUSTER_DELIVERY_SUCCESS, actions.START_CLUSTER_DELIVERY_FAILURE ],
  payload: { error: null },
  promise: () => new Promise( (resolve, reject) => service.startClusterDelivery(clusterId, resolve, reject) )
})

export const submitChangedReason = (itemId, reason, comment, itemIndex) => ({
  types: [ actions.SUBMIT_CHANGED_UNDELIVERED_REASON_REQUEST, actions.SUBMIT_CHANGED_UNDELIVERED_REASON_SUCCESS, actions.SUBMIT_CHANGED_UNDELIVERED_REASON_FAILURE ],
  payload: { error: null },
  promise: () => new Promise( (resolve, reject) => service.changeReason(itemId, reason, comment, itemIndex, resolve, reject) )
})


