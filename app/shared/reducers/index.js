import { combineReducers } from 'redux-immutablejs'
import routerReducer from './router'
import * as User from '../../user'
import * as Rider from '../../rider'

export default combineReducers({
  routing: routerReducer,
  [User.name]: User.reducer,
  [Rider.name]: Rider.reducer
})
