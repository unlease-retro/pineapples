import React from 'react'
import { Route, IndexRoute } from 'react-router'

// containers
import App from './shared/containers/App'
import NotFound from './shared/containers/NotFound'
import * as Dashboard from './dashboard'

module.exports = (
  <Route path='/' component={App}>
    <IndexRoute component={Dashboard.Container} />
    <Route path='*' component={NotFound} />
  </Route>
)
