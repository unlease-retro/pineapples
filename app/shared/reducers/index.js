import { combineReducers } from 'redux-immutablejs'
import routerReducer from './router'
import * as Admin from '../../admin'
import * as User from '../../user'

export default combineReducers({
  routing: routerReducer,
  [Admin.name]: Admin.reducer,
  [User.name]: User.reducer,
})
