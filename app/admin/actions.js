import * as actions from './actionTypes'
import * as service from './service'

export const fetchClusters = () => ({
  types: [ actions.FETCH_CLUSTERS_REQUEST, actions.FETCH_CLUSTERS_SUCCESS, actions.FETCH_CLUSTERS_FAILURE ],
  payload: {},
  promise: () => new Promise( (resolve, reject) => service.fetchClusters(resolve, reject) )
})

export const fetchDepots = () => ({
  types: [ actions.FETCH_DEPOTS_REQUEST, actions.FETCH_DEPOTS_SUCCESS, actions.FETCH_DEPOTS_FAILURE ],
  payload: {},
  promise: () => new Promise( (resolve, reject) => service.fetchDepots(resolve, reject) )
})

export const fetchRiders = () => ({
  types: [ actions.FETCH_RIDERS_REQUEST, actions.FETCH_RIDERS_SUCCESS, actions.FETCH_RIDERS_FAILURE ],
  payload: {},
  promise: () => new Promise( (resolve, reject) => service.fetchRiders(resolve, reject) )
})

export const updateCluster = (id, data) => ({
  types: [ actions.UPDATE_CLUSTER_REQUEST, actions.UPDATE_CLUSTER_SUCCESS, actions.UPDATE_CLUSTER_FAILURE ],
  payload: {},
  promise: () => new Promise( (resolve, reject) => service.updateCluster(resolve, reject, id, data) )
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

export const setSearchCluster = searchCluster => ({
  type: actions.SET_SEARCH_CLUSTER,
  payload: {
    searchCluster
  }
})

export const setFilterCluster = filterCluster => ({
  type: actions.SET_FILTER_CLUSTER,
  payload: {
    filterCluster
  }
})
