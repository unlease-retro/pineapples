import Immutable from 'immutable'
import { createReducer } from 'redux-immutablejs'

import * as actions from './actionTypes'

export const initialState = Immutable.fromJS({
  clusters: [],
  selectedClusterIndex: null
})

export default createReducer(initialState, {

  [actions.FETCH_CLUSTERS_REQUEST]: (state, action) => state.merge({ ...action.payload }),
  [actions.FETCH_CLUSTERS_SUCCESS]: (state, action) => {

    // if there is only one cluster, select it automatically
    if (action.payload.clusters.length === 1)
      return state.merge({ ...action.payload, selectedClusterIndex: 0})
    else
      return state.merge({ ...action.payload })

  },
  [actions.FETCH_CLUSTERS_FAILURE]: (state, action) => state.merge({ ...action.payload }),

  [actions.SELECT_CLUSTER]: (state, action) => state.merge({ ...action.payload }),
  [actions.UNSELECT_CLUSTER]: (state, action) => state.merge({ ...action.payload }),
  [actions.CHANGE_UNDELIVERED_REASON]: (state, action) => state.mergeIn(['clusters', state.get('selectedClusterIndex'), 'items', action.payload.pineappleIndex], { undeliveredReason: action.payload.undeliveredReason }),
  [actions.CHANGE_REASON_COMMENT]: (state, action) => state.mergeIn(['clusters', state.get('selectedClusterIndex'), 'items', action.payload.pineappleIndex], { reasonComment: action.payload.reasonComment }),

  [actions.CHANGE_STATUS_REQUEST]: (state, action) => state.merge({ ...action.payload }),
  [actions.CHANGE_STATUS_SUCCESS]: (state, action) => state.mergeIn(['clusters', state.get('selectedClusterIndex'), 'items', action.payload.pineappleIndex], { ...action.payload.pineapple }),
  [actions.CHANGE_STATUS_FAILURE]: (state, action) => state.merge({ ...action.payload }),

  [actions.START_CLUSTER_DELIVERY_REQUEST]: (state, action) => state.merge({ ...action.payload }),
  [actions.START_CLUSTER_DELIVERY_SUCCESS]: (state, action) => state.merge({ ...action.payload }),
  [actions.START_CLUSTER_DELIVERY_FAILURE]: (state, action) => state.merge({ ...action.payload }),

  [actions.SUBMIT_CHANGED_UNDELIVERED_REASON_REQUEST]: (state, action) => state.merge({ ...action.payload }),
  [actions.SUBMIT_CHANGED_UNDELIVERED_REASON_SUCCESS]: (state, action) => state.mergeIn(['clusters', state.get('selectedClusterIndex'), 'items', action.payload.pineappleIndex], { ...action.payload.pineapple }),
  [actions.SUBMIT_CHANGED_UNDELIVERED_REASON_FAILURE]: (state, action) => state.merge({ ...action.payload })


})
