import Immutable from 'immutable'
import { createReducer } from 'redux-immutablejs'

import * as actions from './actionTypes'

export const initialState = Immutable.fromJS({
  role: null,
  users: [],
  writers: [],
  selectedRole: null,
  requesting: false,
  error: null,
})

export default createReducer(initialState, {

  [actions.FETCH_REQUEST]: (state, action) => state.merge({ ...action.payload }),
  [actions.FETCH_SUCCESS]: (state, action) => state.merge({ ...action.payload }),
  [actions.FETCH_FAILURE]: (state, action) => state.merge({ ...action.payload }),

  [actions.FETCH_USERS_REQUEST]: (state, action) => state.merge({ ...action.payload }),
  [actions.FETCH_USERS_SUCCESS]: (state, action) => state.merge({ ...action.payload, writers: [], requesting: false }),
  [actions.FETCH_USERS_FAILURE]: (state, action) => state.merge({ ...action.payload, requesting: false }),

  [actions.CREATE_USER_REQUEST]: (state, action) => state.merge({ ...action.payload }),
  [actions.CREATE_USER_SUCCESS]: (state, action) => state.merge({ users: state.get('users').concat(action.payload) }),
  [actions.CREATE_USER_FAILURE]: (state, action) => state.merge({ ...action.payload, requesting: false }),

  [actions.DELETE_USER_REQUEST]: (state, action) => state.merge({ ...action.payload }),
  [actions.DELETE_USER_SUCCESS]: (state, action) => state.merge({ 'users': state.get('users').filter((user, index) => index !== action.payload.index), requesting: false }),
  [actions.DELETE_USER_FAILURE]: (state, action) => state.merge({ ...action.payload }),

  [actions.UPDATE_USER_REQUEST]: (state, action) => state.merge({ ...action.payload }),
  [actions.UPDATE_USER_SUCCESS]: (state, action) => state.mergeIn([ 'users', action.payload.index ], { ...action.payload.user }),
  [actions.UPDATE_USER_FAILURE]: (state, action) => state.merge({ ...action.payload }),

  [actions.FETCH_WRITERS_REQUEST]: (state, action) => state.merge({ ...action.payload }),
  [actions.FETCH_WRITERS_SUCCESS]: (state, action) => state.merge({ ...action.payload, users: [], requesting: false }),
  [actions.FETCH_WRITERS_FAILURE]: (state, action) => state.merge({ ...action.payload, requesting: false }),

  [actions.CREATE_WRITER_REQUEST]: (state, action) => state.merge({ ...action.payload }),
  [actions.CREATE_WRITER_SUCCESS]: (state, action) => state.merge({ writers: state.get('writers').concat(action.payload) }),
  [actions.CREATE_WRITER_FAILURE]: (state, action) => state.merge({ ...action.payload, requesting: false }),

  [actions.DELETE_WRITER_REQUEST]: (state, action) => state.merge({ ...action.payload }),
  [actions.DELETE_WRITER_SUCCESS]: (state, action) => state.merge({ 'writers': state.get('writers').filter((writer, index) => index !== action.payload.index), requesting: false }),
  [actions.DELETE_WRITER_FAILURE]: (state, action) => state.merge({ ...action.payload }),

  [actions.UPDATE_WRITER_REQUEST]: (state, action) => state.merge({ ...action.payload }),
  [actions.UPDATE_WRITER_SUCCESS]: (state, action) => state.mergeIn([ 'writers', action.payload.index ], { ...action.payload.writer }),
  [actions.UPDATE_WRITER_FAILURE]: (state, action) => state.merge({ ...action.payload }),

  [actions.CHANGE_SELECTED_ROLE]: (state, action) => state.merge({ ...action.payload })
})
