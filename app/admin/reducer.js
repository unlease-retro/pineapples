import Immutable from 'immutable'
import { createReducer } from 'redux-immutablejs'

import * as actions from './actionTypes'

export const initialState = Immutable.fromJS({
  clusters: [],
  depots: [],
  selectedCluster: {},
  mapCenter: {}
})

export default createReducer(initialState, {

  [actions.SET_MAP_CENTER]: (state, action) => state.merge({ ...action.payload }),
  [actions.SET_SELECTED_CLUSTER]: (state, action) => state.merge({ ...action.payload }),

  [actions.FETCH_CLUSTERS_REQUEST]: (state, action) => state.merge({ ...action.payload }),
  [actions.FETCH_CLUSTERS_SUCCESS]: (state, action) => state.merge({ ...action.payload }),
  [actions.FETCH_CLUSTERS_FAILURE]: (state, action) => state.merge({ ...action.payload }),

  [actions.FETCH_DEPOTS_REQUEST]: (state, action) => state.merge({ ...action.payload }),
  [actions.FETCH_DEPOTS_SUCCESS]: (state, action) => state.merge({ ...action.payload }),
  [actions.FETCH_DEPOTS_FAILURE]: (state, action) => state.merge({ ...action.payload }),

})
