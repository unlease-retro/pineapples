import { combineReducers } from 'redux-immutablejs'
import routerReducer from './router'
import * as User from '../../user'

export default combineReducers({
  routing: routerReducer,
  [User.name]: User.reducer,
})
