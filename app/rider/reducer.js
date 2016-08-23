import Immutable from 'immutable'
import { createReducer } from 'redux-immutablejs'

import * as actions from './actionTypes'

export const initialState = Immutable.fromJS({})

export default createReducer(initialState, {

  [actions.FETCH_CLUSTERS_REQUEST]: (state, action) => state.merge({ ...action.payload }),
  [actions.FETCH_CLUSTERS_SUCCESS]: (state, action) => state.merge({ ...action.payload }),
  [actions.FETCH_CLUSTERS_FAILURE]: (state, action) => state.merge({ ...action.payload })

})
