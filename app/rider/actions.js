import * as actions from './actionTypes'
import * as service from './service'

export const fetchClusters = () => ({
  types: [ actions.FETCH_CLUSTERS_REQUEST, actions.FETCH_CLUSTERS_SUCCESS, actions.FETCH_CLUSTERS_FAILURE ],
  payload: { error: null },
  promise: () => new Promise( (resolve, reject) => service.fetchClusters(resolve, reject) )
})

export const selectCluster = (cluster) => ({
  type: actions.SELECT_CLUSTER,
  payload: { selectedCluster: cluster }
})

export const changeStatus = (pineapple, newStatus) => ({
  types: [ actions.CHANGE_STATUS_REQUEST, actions.CHANGE_STATUS_SUCCESS, actions.CHANGE_STATUS_FAILURE ],
  payload: { error: null },
  promise: () => new Promise( (resolve, reject) => service.changeStatus(pineapple._id, newStatus, resolve, reject) )
})
