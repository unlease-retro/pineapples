import Immutable from 'immutable'
import { createReducer } from 'redux-immutablejs'

import * as actions from './actionTypes'

export const initialState = Immutable.fromJS({
  role: null
})

export default createReducer(initialState, {

  [actions.SOME_ACTION]: (state, action) => state.merge({ ...action.payload }),

})
