import { combineReducers } from 'redux-immutablejs'
import routerReducer from './router'
import * as Dashboard from '../../dashboard'

export default combineReducers({
  routing: routerReducer,
  [Dashboard.name]: Dashboard.reducer,
})
