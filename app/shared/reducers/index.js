import { combineReducers } from 'redux-immutablejs'
import routerReducer from './router'
import * as User from '../../user'
import * as Dashboard from '../../dashboard'

export default combineReducers({
  routing: routerReducer,
  [User.name]: User.reducer,
  [Dashboard.name]: Dashboard.reducer,
})
