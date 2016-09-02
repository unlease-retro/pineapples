import { createSelector } from 'reselect'
import { name } from './constants'
import { getCentroid, getPosition } from '../shared/util'

// static
export const getAll = state => state.get(name)
export const getClusters = state => state.getIn([ name, 'clusters' ]).toJS()
export const getDepots = state => state.getIn([ name, 'depots' ])
export const getRiders = state => state.getIn([ name, 'riders' ]).toJS()
export const getMapCenter = state => state.getIn([ name, 'mapCenter' ]).toObject()
export const getSearchCluster = state => state.getIn([ name, 'searchCluster' ])
export const getFilterCluster = state => state.getIn([ name, 'filterCluster' ])
export const getSelectedClusterIndex = state => state.getIn([ name, 'selectedClusterIndex' ])
export const getOverview = state => state.getIn([ name, 'overview' ])
export const getTodaysOrders = state => state.getIn([ name, 'stats', 'todaysOrders' ])
export const getPineapplesToBeDeliveredToday = state => state.getIn([ name, 'stats', 'pineapplesToBeDeliveredToday' ])

// computed
export const getTotalClusters = createSelector( [ getClusters ], clusters => clusters.length )
export const getSelectedCluster = createSelector( [ getClusters, getSelectedClusterIndex ], (clusters, i) => clusters[i] )
export const getClusterId = createSelector( [ getSelectedCluster ], cluster => cluster && cluster._id )
export const getClusterName = createSelector( [ getSelectedCluster ], cluster => cluster && cluster.name )
export const getClusterDepot = createSelector( [ getSelectedCluster ], cluster => cluster && cluster.depot )
export const getClusterDepotName = createSelector( [ getClusterDepot ], depot => depot && depot.name )
export const getClusterDepotCoordinates = createSelector( [ getClusterDepot ], depot => depot && depot.location.coordinates )
export const getClusterPineapples = createSelector( [ getSelectedCluster ], cluster => cluster && cluster.items )
export const getClusterRider = createSelector( [ getSelectedCluster ], cluster => cluster && cluster.rider )
export const getClusterRiderId = createSelector( [ getClusterRider ], rider => rider && rider._id )
export const getClusterDeliverable = createSelector( [ getSelectedCluster ], cluster => cluster && cluster.deliverable )
export const getClusterColour = createSelector( [ getSelectedCluster ], cluster => cluster && cluster.colour )
export const getIsPanelOpen = createSelector( [ getClusterName ], clusterName => Boolean(clusterName) )
export const getClusterCentroid = createSelector( [ getSelectedCluster ], cluster => cluster && cluster.centroid )
export const getClusterPosition = createSelector( [ getClusterCentroid ], clusterCoordinates => clusterCoordinates && getCentroid(clusterCoordinates) )
export const getClusterDepotPosition = createSelector( [ getClusterDepotCoordinates ], depotCoordinates => depotCoordinates && getPosition(depotCoordinates) )
export const getClusterTotalPineapples = createSelector( [ getClusterPineapples ], pineapples => pineapples && pineapples.length )
export const getClustersOptions = createSelector( [ getClusters ], clusters => clusters && clusters.map( ({ _id, name }) => ({ value: _id, label: name }) ) )
export const getRidersOptions = createSelector( [ getRiders ], riders => riders && riders.map( ({ _id, firstname, lastname, clusters }) => ({ value: _id, label: `${firstname} ${lastname} (${clusters.length})` }) ) )
export const getClusterFilterOptions = createSelector( [ getRidersOptions ], riders => {

  riders.push({ value: 'unassigned', label: 'Unassigned' })

  return riders

} )

export const getFilteredClusters = createSelector( [ getClusters, getFilterCluster, getSearchCluster ], (clusters, filterCluster, searchCluster) => {

  return clusters && clusters.reduce( (filtered, cluster, index) => {

    const isUnassigned = filterCluster === 'unassigned' && !cluster.rider
    const hasFilter = isUnassigned || filterCluster && cluster.rider === filterCluster
    const hasSearch = searchCluster && cluster._id === searchCluster

    // TODO - need to restrict one val based on the other val

    if (hasFilter || hasSearch) filtered.push( Object.assign({}, cluster, { index }) )

    return filtered

  }, [])

})
