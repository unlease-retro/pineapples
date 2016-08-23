import * as actions from './actionTypes'
import * as service from './service'

export const fetchClusters = () => ({
  types: [ actions.FETCH_CLUSTERS_REQUEST, actions.FETCH_CLUSTERS_SUCCESS, actions.FETCH_CLUSTERS_FAILURE ],
  payload: {  },
  promise: () => new Promise( (resolve, reject) => service.fetchClusters(resolve, reject) )
})

export const fetchDepots = () => ({
  types: [ actions.FETCH_DEPOTS_REQUEST, actions.FETCH_DEPOTS_SUCCESS, actions.FETCH_DEPOTS_FAILURE ],
  payload: {  },
  promise: () => new Promise( (resolve, reject) => service.fetchDepots(resolve, reject) )
})

export const selectCluster = (selectedCluster={}, mapCenter={}) => ({
  type: actions.SET_SELECTED_CLUSTER,
  payload: {
    selectedCluster,
    mapCenter
  }
})

export const setMapCenter = (mapCenter={}) => ({
  type: actions.SET_MAP_CENTER,
  payload: {
    mapCenter
  }
})
