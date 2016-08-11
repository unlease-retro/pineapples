import Immutable from 'immutable'
import { createStore, applyMiddleware, compose } from 'redux'
import { browserHistory } from 'react-router'
import { routerMiddleware } from 'react-router-redux'
import createLogger from 'redux-logger'
import rootReducer from '../reducers'
import * as Storage from '../services/storage'
import { STATE_KEY } from '../constants'

// environment
const isDevelopment = process.env.NODE_ENV === 'development'

// middleware
const router = routerMiddleware(browserHistory)

let middleware = [ router ]

// logger middleware in development
if (isDevelopment) middleware.push( createLogger({ collapsed: true }) )

const finalCreateStore = compose(
  applyMiddleware(...middleware),
  isDevelopment && window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore)

// persist stored state
const persistState = Storage.getItem(STATE_KEY) || {}
const initialState = Immutable.fromJS(persistState)

export default function configureStore(state = initialState) {

  const store = finalCreateStore(rootReducer, initialState)

  // store state on change
  store.subscribe( () => {

    // remove routing from state before storing
    let stateTrimmed = store.getState().delete('routing')

    Storage.setItem(STATE_KEY, stateTrimmed.toJS())

  })

  return store

}
