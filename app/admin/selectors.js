import { createSelector } from 'reselect'
import { name } from './constants'
import { getPosition } from '../shared/util'

// static
export const getAll = state => state.get(name)
export const getClusters = state => state.getIn([ name, 'clusters' ]).toJS()
export const getDepots = state => state.getIn([ name, 'depots' ]).toJS()
export const getMapCenter = state => state.getIn([ name, 'mapCenter' ]).toObject()

export const getSelectedCluster = state => state.getIn([ name, 'selectedCluster' ])
export const getClusterName = state => state.getIn([ name, 'selectedCluster', 'name' ])
export const getClusterDepot = state => state.getIn([ name, 'selectedCluster', 'depot' ])
export const getClusterDepotName = state => state.getIn([ name, 'selectedCluster', 'depot', 'name' ])
export const getClusterDepotCoordinates = state => state.getIn([ name, 'selectedCluster', 'depot', 'location', 'coordinates' ])
export const getClusterPineapples = state => state.getIn([ name, 'selectedCluster', 'items' ])

// computed
export const getIsPanelOpen = createSelector( [ getClusterName ], clusterName => Boolean(clusterName) )
export const getClusterDepotPosition = createSelector( [ getClusterDepotCoordinates ], depotCoordinates => depotCoordinates && getPosition(depotCoordinates) )
export const getClusterTotalPineapples = createSelector( [ getClusterPineapples ], pineapples => pineapples && pineapples.size )
