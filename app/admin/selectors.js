import { createSelector } from 'reselect'
import { name } from './constants'

// static
export const getAll = state => state.get(name)
export const getClusters = state => state.getIn([ name, 'clusters' ]).toJS()
export const getSelectedCluster = state => state.getIn([ name, 'selectedCluster' ]).toJS()

// computed
export const getIsPanelOpen = createSelector( [ getSelectedCluster ], selectedCluster => selectedCluster && selectedCluster.name )
