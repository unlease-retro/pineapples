import Immutable from 'immutable'
import { createReducer } from 'redux-immutablejs'

import * as actions from './actionTypes'

export const initialState = Immutable.fromJS({
  role: null,
})

export default createReducer(initialState, {

  [actions.FETCH_REQUEST]: (state, action) => state.merge({ ...action.payload }),
  [actions.FETCH_SUCCESS]: (state, action) => state.merge({ ...action.payload }),
  [actions.FETCH_FAILURE]: (state, action) => state.merge({ ...action.payload }),

})
