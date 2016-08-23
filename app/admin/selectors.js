import { createSelector } from 'reselect'
import { name } from './constants'

// static
export const getAll = state => state.get(name)
export const getClusters = state => state.getIn([ name, 'clusters' ]).toJS()
export const getDepots = state => state.getIn([ name, 'depots' ]).toJS()
export const getSelectedCluster = state => state.getIn([ name, 'selectedCluster' ]).toJS()
export const getMapCenter = state => state.getIn([ name, 'mapCenter' ]).toObject()

// computed
export const getIsPanelOpen = createSelector( [ getSelectedCluster ], selectedCluster => selectedCluster && Boolean(selectedCluster.name) )
