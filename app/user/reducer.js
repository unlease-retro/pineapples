import Immutable from 'immutable'
import { createReducer } from 'redux-immutablejs'

import * as actions from './actionTypes'

export const initialState = Immutable.fromJS({
  role: null,
  users: [],
  writers: [],
  requesting: false,
  error: null
})

export default createReducer(initialState, {

  [actions.FETCH_REQUEST]: (state, action) => state.merge({ ...action.payload }),
  [actions.FETCH_SUCCESS]: (state, action) => state.merge({ ...action.payload, requesting: false }),
  [actions.FETCH_FAILURE]: (state, action) => state.merge({ ...action.payload, requesting: false }),

  [actions.FETCH_USERS_REQUEST]: (state, action) => state.merge({ ...action.payload }),
  [actions.FETCH_USERS_SUCCESS]: (state, action) => state.merge({ ...action.payload, writers: [], requesting: false }),
  [actions.FETCH_USERS_FAILURE]: (state, action) => state.merge({ ...action.payload, requesting: false }),

  [actions.CREATE_USER_REQUEST]: (state, action) => state.merge({ ...action.payload }),
  [actions.CREATE_USER_SUCCESS]: (state, action) => state.merge({ users: state.get('users').concat(action.payload) }),
  [actions.CREATE_USER_FAILURE]: (state, action) => state.merge({ ...action.payload, requesting: false }),

  [actions.DELETE_USER_REQUEST]: (state, action) => state.merge({ ...action.payload }),
  [actions.DELETE_USER_SUCCESS]: (state, action) => state.merge({ 'users': state.get('users').filter(user => user.get('_id') !== action.payload), requesting: false }),
  [actions.DELETE_USER_FAILURE]: (state, action) => state.merge({ ...action.payload }),

  [actions.UPDATE_USER_REQUEST]: (state, action) => state.merge({ ...action.payload }),
  [actions.UPDATE_USER_SUCCESS]: (state, action) => {

    return state.merge({ 'users': state.get('users').map(user => {

      if (user.get('_id') === action.payload.user._id)
        return user.merge(action.payload.user)
      else
        return user

    }), 'requesting': false })

  },
  [actions.UPDATE_USER_FAILURE]: (state, action) => state.merge({ ...action.payload }),

  [actions.FETCH_WRITERS_REQUEST]: (state, action) => state.merge({ ...action.payload }),
  [actions.FETCH_WRITERS_SUCCESS]: (state, action) => state.merge({ ...action.payload, users: [], requesting: false }),
  [actions.FETCH_WRITERS_FAILURE]: (state, action) => state.merge({ ...action.payload, requesting: false }),

  [actions.DELETE_WRITER_REQUEST]: (state, action) => state.merge({ ...action.payload }),
  [actions.DELETE_WRITER_SUCCESS]: (state, action) => state.merge({ 'writers': state.get('writers').filter(writer => writer.get('_id') !== action.payload), requesting: false }),
  [actions.DELETE_WRITER_FAILURE]: (state, action) => state.merge({ ...action.payload }),

  [actions.UPDATE_WRITER_REQUEST]: (state, action) => state.merge({ ...action.payload }),
  [actions.UPDATE_WRITER_SUCCESS]: (state, action) => {

    return state.merge({ 'writers': state.get('writers').map(writer => {

      if (writer.get('_id') === action.payload.writer._id)
        return writer.merge(action.payload.writer)
      else
        return writer

    }), 'requesting': false })

  },
  [actions.UPDATE_WRITER_FAILURE]: (state, action) => state.merge({ ...action.payload }),
})