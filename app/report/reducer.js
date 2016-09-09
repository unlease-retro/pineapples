import Immutable from 'immutable'
import { createReducer } from 'redux-immutablejs'
import { SortDirection } from 'react-virtualized'

import * as actions from './actionTypes'

const mergeToState = (state, action) => state.merge({ ...action.payload })
const mergeDeepToState = (state, action) => state.mergeDeep({ ...action.payload })

export const initialState = Immutable.fromJS({
  pineapples: [],
  options: {
    disableHeader: false,
    headerHeight: 30,
    height: 500,
    overscanRowCount: 10,
    rowHeight: 40,
    rowCount: 1000,
    sortEnabled: true,
    sortBy: 'createdAt',
    sortDirection: SortDirection.ASC,
    useDynamicRowHeight: false,
  }
})

export default createReducer(initialState, {

  [actions.SET_SORT]: mergeDeepToState,

  [actions.FETCH_PINEAPPLES_REQUEST]: mergeToState,
  [actions.FETCH_PINEAPPLES_SUCCESS]: mergeToState,
  [actions.FETCH_PINEAPPLES_FAILURE]: mergeToState,

})
