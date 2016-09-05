import Immutable from 'immutable'
import { createReducer } from 'redux-immutablejs'

import { LOCATION_CHANGE } from 'react-router-redux'

const initialState = Immutable.fromJS({
  locationBeforeTransitions: null
})

export default createReducer(initialState, {

  [LOCATION_CHANGE]: (state, action) => state.merge({ locationBeforeTransitions: action.payload })

})
