import { combineReducers } from 'redux-immutablejs'
import routerReducer from './router'
import * as Admin from '../../admin'
import * as UI from '../../ui'
import * as User from '../../user'
import * as Rider from '../../rider'

export default combineReducers({
  routing: routerReducer,
  [Admin.name]: Admin.reducer,
  [UI.name]: UI.reducer,
  [User.name]: User.reducer,
  [Rider.name]: Rider.reducer,
})
