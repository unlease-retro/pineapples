import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import routes from '../../routes'
import configureStore from '../store/configureStore'
import createSelectLocationState from '../util/createSelectLocationState'

const store = configureStore()

const history = syncHistoryWithStore(browserHistory, store, { selectLocationState: createSelectLocationState() })

export default class Root extends Component {

  render() {

    return (
      <Provider store={store}>
        <Router routes={routes} history={history} />
      </Provider>
    )

  }

}
