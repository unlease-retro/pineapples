import React from 'react'
import { Route, IndexRoute } from 'react-router'

// containers
import App from './shared/containers/App'
import { Auth } from './shared/containers/Auth'
import NotFound from './shared/containers/NotFound'
import * as Home from './Home'

module.exports = (
  <Route path='/' component={App}>
    <IndexRoute component={Auth(Home.Container, Home.roles)} />
    <Route path='*' component={NotFound} />
  </Route>
)
