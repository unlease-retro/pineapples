import * as actions from './actionTypes'
import * as service from './service'

export const fetchClusters = () => ({
  types: [ actions.FETCH_CLUSTERS_REQUEST, actions.FETCH_CLUSTERS_SUCCESS, actions.FETCH_CLUSTERS_FAILURE ],
  payload: {  },
  promise: () => new Promise( (resolve, reject) => service.fetchClusters(resolve, reject) )
})

export const selectCluster = (selectedCluster={}) => ({
  type: actions.SET_SELECTED_CLUSTER,
  payload: {
    selectedCluster
  }
})
