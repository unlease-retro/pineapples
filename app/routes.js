import React from 'react'
import { Route, IndexRoute } from 'react-router'

// containers
import App from './shared/containers/App'
import { Auth } from './shared/containers/Auth'
import NotFound from './shared/containers/NotFound'
import * as Dashboard from './dashboard'

module.exports = (
  <Route path='/' component={App}>
    <IndexRoute component={Auth(Dashboard.Container, Dashboard.roles)} />
    <Route path='*' component={NotFound} />
  </Route>
)
