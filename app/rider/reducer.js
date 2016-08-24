import Immutable from 'immutable'
import { createReducer } from 'redux-immutablejs'

import * as actions from './actionTypes'

export const initialState = Immutable.fromJS({
  clusters: [],
  selectedCluster: null
})

export default createReducer(initialState, {

  [actions.FETCH_CLUSTERS_REQUEST]: (state, action) => state.merge({ ...action.payload }),
  [actions.FETCH_CLUSTERS_SUCCESS]: (state, action) => {

    // if there is only one cluster, select it
    if (action.payload.clusters.length === 1)
      return state.merge({ ...action.payload, selectedCluster: Immutable.fromJS(action.payload.clusters[0])})
    else
      return state.merge({ ...action.payload })

  },
  [actions.FETCH_CLUSTERS_FAILURE]: (state, action) => state.merge({ ...action.payload }),

  [actions.SELECT_CLUSTER]: (state, action) => state.merge({ ...action.payload }),
  [actions.UNSELECT_CLUSTER]: (state, action) => state.merge({ ...action.payload }),

  [actions.CHANGE_STATUS_REQUEST]: (state, action) => state.merge({ ...action.payload }),
  [actions.CHANGE_STATUS_SUCCESS]: (state, action) => state.merge({ ...action.payload }),
  [actions.CHANGE_STATUS_FAILURE]: (state, action) => state.merge({ ...action.payload })

})
