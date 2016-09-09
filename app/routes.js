import React from 'react'
import { Route, IndexRoute } from 'react-router'

// containers
import App from './shared/containers/App'
import { Auth } from './shared/containers/Auth'
import NotFound from './shared/containers/NotFound'
import * as Home from './home'
import * as Report from './report'
import * as User from './user'

module.exports = (
  <Route path='/' component={App}>
    <IndexRoute component={Auth(Home.Container, Home.roles)} />
    <Route path='report' component={Auth(Report.Container, Report.roles)} />
    <Route path='users' component={Auth(User.Container, User.roles)} />
    <Route path='*' component={NotFound} />
  </Route>
)
