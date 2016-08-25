import Immutable from 'immutable'
import { createReducer } from 'redux-immutablejs'

import * as actions from './actionTypes'

export const initialState = Immutable.fromJS({
  role: null,
  users: [],
  requesting: false,
  error: null
})

export default createReducer(initialState, {

  [actions.FETCH_REQUEST]: (state, action) => state.merge({ ...action.payload }),
  [actions.FETCH_SUCCESS]: (state, action) => state.merge({ ...action.payload, requesting: false }),
  [actions.FETCH_FAILURE]: (state, action) => state.merge({ ...action.payload, requesting: false }),

  [actions.FETCH_USERS_REQUEST]: (state, action) => state.merge({ ...action.payload }),
  [actions.FETCH_USERS_SUCCESS]: (state, action) => state.merge({ ...action.payload }),
  [actions.FETCH_USERS_FAILURE]: (state, action) => state.merge({ ...action.payload, requesting: false }),

  [actions.CREATE_USER_REQUEST]: (state, action) => state.merge({ ...action.payload }),
  [actions.CREATE_USER_SUCCESS]: (state, action) => state.merge({ ...action.payload, users: state.get('users').concat(action.payload) }),
  [actions.CREATE_USER_FAILURE]: (state, action) => state.merge({ ...action.payload, requesting: false }),

  [actions.DELETE_USER_REQUEST]: (state, action) => state.merge({ ...action.payload }),
  [actions.DELETE_USER_SUCCESS]: (state, action) => state.merge({ ...action.payload }),
  [actions.DELETE_USER_FAILURE]: (state, action) => state.merge({ ...action.payload })

})
