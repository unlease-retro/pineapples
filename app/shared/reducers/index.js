import { combineReducers } from 'redux-immutablejs'
import { reducer as formReducer } from 'redux-form'
import routerReducer from './router'
import * as Admin from '../../admin'
import * as PineappleReport from '../../pineappleReport'
import * as Report from '../../report'
import * as Rider from '../../rider'
import * as UI from '../../ui'
import * as User from '../../user'

export default combineReducers({
  routing: routerReducer,
  [Admin.name]: Admin.reducer,
  [PineappleReport.name]: PineappleReport.reducer,
  [Report.name]: Report.reducer,
  [Rider.name]: Rider.reducer,
  [UI.name]: UI.reducer,
  [User.name]: User.reducer,
  form: formReducer
})
