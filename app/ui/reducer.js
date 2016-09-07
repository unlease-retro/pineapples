import Immutable from 'immutable'
import { createReducer } from 'redux-immutablejs'

import * as actions from './actionTypes'

export const initialState = Immutable.fromJS({
  error: null,
  requesting: false,
  snackbar: null,
  scriptsLoaded: false,
})

export default createReducer(initialState, {

  [actions.UPDATE]: (state, action) => state.merge({ ...action.payload }),
  [actions.RESET]: state => state.merge({ ...initialState.toJS() }),

})
