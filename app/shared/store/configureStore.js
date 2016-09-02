import Immutable from 'immutable'
import { createStore, applyMiddleware, compose } from 'redux'
import { browserHistory } from 'react-router'
import { routerMiddleware } from 'react-router-redux'
import createLogger from 'redux-logger'
import promise from '../middleware/promise'
import ui from '../middleware/ui'
import rootReducer from '../reducers'

// environment
const isDevelopment = process.env.NODE_ENV === 'development'

// middleware
const router = routerMiddleware(browserHistory)

let middleware = [ router, promise, ui ]

// logger middleware in development
if (isDevelopment) middleware.push( createLogger({ collapsed: true }) )

const finalCreateStore = compose(
  applyMiddleware(...middleware),
  isDevelopment && window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore)

const initialState = Immutable.fromJS({})

export default function configureStore() {

  const store = finalCreateStore(rootReducer, initialState)

  return store

}
