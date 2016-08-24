import { createSelector } from 'reselect'
import { name } from './constants'
import { getPosition } from '../shared/util'

// static
export const getAll = state => state.get(name)
export const getClusters = state => state.getIn([ name, 'clusters' ]).toJS()
export const getDepots = state => state.getIn([ name, 'depots' ]).toJS()
export const getRiders = state => state.getIn([ name, 'riders' ]).toJS()
export const getMapCenter = state => state.getIn([ name, 'mapCenter' ]).toObject()

export const getSelectedCluster = state => state.getIn([ name, 'selectedCluster' ])
export const getClusterId = state => state.getIn([ name, 'selectedCluster', '_id' ])
export const getClusterName = state => state.getIn([ name, 'selectedCluster', 'name' ])
export const getClusterDepot = state => state.getIn([ name, 'selectedCluster', 'depot' ])
export const getClusterDepotName = state => state.getIn([ name, 'selectedCluster', 'depot', 'name' ])
export const getClusterDepotCoordinates = state => state.getIn([ name, 'selectedCluster', 'depot', 'location', 'coordinates' ])
export const getClusterPineapples = state => state.getIn([ name, 'selectedCluster', 'items' ])
export const getClusterRider = state => state.getIn([ name, 'selectedCluster', 'rider' ])
export const getClusterDeliverable = state => state.getIn([ name, 'selectedCluster', 'deliverable' ])

// computed
export const getIsPanelOpen = createSelector( [ getClusterName ], clusterName => Boolean(clusterName) )
export const getClusterDepotPosition = createSelector( [ getClusterDepotCoordinates ], depotCoordinates => depotCoordinates && getPosition(depotCoordinates) )
export const getClusterTotalPineapples = createSelector( [ getClusterPineapples ], pineapples => pineapples && pineapples.size )
export const getRidersOptions = createSelector( [ getRiders ], riders => riders && riders.map( ({ _id, firstname, lastname, clusters }) => ({ value: _id, label: `${firstname} ${lastname} (${clusters.length})` }) ) )
