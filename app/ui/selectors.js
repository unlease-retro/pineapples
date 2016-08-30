import { createSelector } from 'reselect'
import { name } from './constants'

import { selectors as UserSelectors } from '../user'

// static
export const getAll = state => state.get(name)
export const getError = state => state.getIn([ name, 'error' ])
export const getRequesting = state => state.getIn([ name, 'requesting' ])

// computed
export const getSplash = createSelector( [ UserSelectors.getRole ], role => Boolean(!role) )
