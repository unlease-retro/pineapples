import { combineReducers } from 'redux-immutablejs'
import routerReducer from './router'
import * as Admin from '../../admin'
import * as Report from '../../report'
import * as Rider from '../../rider'
import * as UI from '../../ui'
import * as User from '../../user'

export default combineReducers({
  routing: routerReducer,
  [Admin.name]: Admin.reducer,
  [Report.name]: Report.reducer,
  [Rider.name]: Rider.reducer,
  [UI.name]: UI.reducer,
  [User.name]: User.reducer,
})
