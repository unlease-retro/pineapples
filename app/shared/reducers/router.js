import Immutable from 'immutable'
import { createReducer } from 'redux-immutablejs'

import { LOCATION_CHANGE } from 'react-router-redux'

const initialState = Immutable.fromJS({})

export default createReducer(initialState, {

  [LOCATION_CHANGE]: (state, action) => state.merge({ ...action.payload })

})
