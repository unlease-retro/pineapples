import Immutable from 'immutable'
import { createSelector } from 'reselect'
import { name } from './constants'
import { getCentroid, getPosition, getKM, getHoursMins } from '../shared/util'

// static
export const getAll = state => state.get(name)
export const getClusters = state => state.getIn([ name, 'clusters' ])
export const getDepots = state => state.getIn([ name, 'depots' ])
export const getRiders = state => state.getIn([ name, 'riders' ])
export const getMapCenter = state => state.getIn([ name, 'mapCenter' ]).toObject()
export const getSearchCluster = state => state.getIn([ name, 'searchCluster' ])
export const getFilterCluster = state => state.getIn([ name, 'filterCluster' ])
export const getSelectedClusterIndex = state => state.getIn([ name, 'selectedClusterIndex' ])
export const getOverview = state => state.getIn([ name, 'overview' ])
export const getGenerateUnlocked = state => state.getIn([ name, 'generateUnlocked' ])
export const getTodaysOrders = state => state.getIn([ name, 'stats', 'todaysOrders' ])
export const getPineapplesToBeDeliveredToday = state => state.getIn([ name, 'stats', 'pineapplesToBeDeliveredToday' ])
export const getPineapplesDeliveredToday = state => state.getIn([ name, 'stats', 'pineapplesDeliveredToday' ])

// computed
export const getTotalClusters = createSelector( [ getClusters ], clusters => clusters.size )
export const getFinishedClusters = createSelector( [ getClusters ], clusters => clusters && clusters.filter( cluster => cluster.get('finishedAt') ).toArray() )
export const getSelectedCluster = createSelector( [ getClusters, getSelectedClusterIndex ], (clusters, i) => clusters.get(i) )
export const getClusterId = createSelector( [ getSelectedCluster ], cluster => cluster && cluster.get('_id') )
export const getClusterName = createSelector( [ getSelectedCluster ], cluster => cluster && cluster.get('name') )
export const getClusterDepot = createSelector( [ getSelectedCluster ], cluster => cluster && cluster.get('depot') )
export const getClusterDepotName = createSelector( [ getClusterDepot ], depot => depot && depot.get('name') )
export const getClusterDepotCoordinates = createSelector( [ getClusterDepot ], depot => depot && depot.getIn([ 'location', 'coordinates' ]) )
export const getClusterPineapples = createSelector( [ getSelectedCluster ], cluster => cluster && cluster.get('items') )
export const getClusterRider = createSelector( [ getSelectedCluster ], cluster => cluster && cluster.get('rider') )
export const getClusterRiderId = createSelector( [ getClusterRider ], rider => rider && rider.get('_id') )
export const getClusterDeliverable = createSelector( [ getSelectedCluster ], cluster => cluster && cluster.get('deliverable') )
export const getClusterColour = createSelector( [ getSelectedCluster ], cluster => cluster && cluster.get('colour') )
export const getClusterRouteLegs = createSelector( [ getSelectedCluster ], cluster => cluster && cluster.getIn([ 'route', 'legs' ]) )
export const getClusterStartedAt = createSelector( [ getSelectedCluster ], cluster => cluster && cluster.get('startedAt') )
export const getClusterFinishedAt = createSelector( [ getSelectedCluster ], cluster => cluster && cluster.get('finishedAt') )
export const getIsPanelOpen = createSelector( [ getClusterName ], clusterName => Boolean(clusterName) )
export const getClusterCentroid = createSelector( [ getSelectedCluster ], cluster => cluster && cluster.get('centroid') )
export const getClusterPosition = createSelector( [ getClusterCentroid ], clusterCoordinates => clusterCoordinates && getCentroid(clusterCoordinates) )
export const getClusterDepotPosition = createSelector( [ getClusterDepotCoordinates ], depotCoordinates => depotCoordinates && getPosition(depotCoordinates) )
export const getClusterTotalPineapples = createSelector( [ getClusterPineapples ], pineapples => pineapples && pineapples.size )
export const getClustersOptions = createSelector( [ getClusters ], clusters => clusters && clusters.map( cluster => ({ value: cluster.get('_id'), label: cluster.get('name'), position: getCentroid(cluster.get('centroid')) }) ).toArray() )
export const getClusterDistance = createSelector( [ getClusterRouteLegs ], legs => legs && getKM(legs.reduce( (distance, leg) => distance += leg.getIn([ 'distance', 'value' ]), 0) ))
export const getClusterDuration = createSelector( [ getClusterRouteLegs ], legs => legs && getHoursMins(legs.reduce( (duration, leg) => duration += leg.getIn([ 'duration', 'value' ]), 0) ))
export const getClusterStatus = createSelector( [ getClusterStartedAt, getClusterFinishedAt ], (started, finished) => started ? finished ? 'Delivered' : 'In Progress' : 'Not Started')

export const getClusterUndeliverablePineapples = createSelector( [ getClusterPineapples ], pineapples => pineapples && pineapples.reduce( (undeliverable, pineapple) => {

  if (pineapple.get('undeliveredReason')) undeliverable.push(pineapple)

  return undeliverable

}, [] ))

export const getRidersOptions = createSelector( [ getRiders ], riders => riders && riders.map( rider => ({ value: rider.get('_id'), label: `${rider.get('firstname')} ${rider.get('lastname')} (${rider.get('clusters').size})`, size: rider.get('clusters').size }) ).toArray() )

export const getRidersWithUndeliveredPineapples = createSelector( getRidersOptions, riders => riders && riders.reduce( (unfinished, rider) => {

  if ( rider.size > 0 ) unfinished.push(rider)

  return unfinished

}, []))

export const getClusterFilterOptions = createSelector( [ getRiders ], riders => {

  return riders && riders.reduce( (options, rider) => {

    options.push({ value: rider.get('_id'), label: `${rider.get('firstname')} ${rider.get('lastname')} (${rider.get('clusters').size})` })

    return options

  }, [{ value: 'unassigned', label: 'Unassigned' }] )

})

export const getFilteredClusters = createSelector( [ getClusters, getFilterCluster, getSearchCluster ], (clusters, filterCluster, searchCluster) => {

  return clusters && Immutable.List(clusters.reduce( (filtered, cluster, index) => {

    const riderId = cluster.getIn([ 'rider', '_id' ])

    const isUnassigned = filterCluster === 'unassigned' && !riderId
    const hasFilter = isUnassigned || filterCluster && riderId === filterCluster
    const hasSearch = searchCluster && cluster.get('_id') === searchCluster

    // TODO - need to restrict one val based on the other val

    if (hasFilter || hasSearch) filtered.push( cluster.merge({ index }) )

    return filtered

  }, []))

})
