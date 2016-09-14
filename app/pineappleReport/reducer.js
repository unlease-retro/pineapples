import Immutable from 'immutable'
import { createReducer } from 'redux-immutablejs'

import * as actions from './actionTypes'

const mergeToState = (state, action) => state.merge({ ...action.payload })

export const initialState = Immutable.fromJS({
  pineapple: {},
})

export default createReducer(initialState, {

  [actions.FETCH_PINEAPPLE_REQUEST]: mergeToState,
  [actions.FETCH_PINEAPPLE_SUCCESS]: mergeToState,
  [actions.FETCH_PINEAPPLE_FAILURE]: mergeToState,

})
