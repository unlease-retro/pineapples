import { createSelector } from 'reselect'
import { name } from './constants'

import { selectors as UserSelectors } from '../user'

// static
export const getAll = state => state.get(name)
export const getError = state => state.getIn([ name, 'error' ])
export const getRequesting = state => state.getIn([ name, 'requesting' ])
export const getSnackbar = state => state.getIn([ name, 'snackbar' ])
export const getScriptsLoaded = state => state.getIn([ name, 'scriptsLoaded' ])

// computed
export const getAppLoaded = createSelector( [ UserSelectors.getRole, getScriptsLoaded ], (role, loaded) => Boolean(role) && loaded )
