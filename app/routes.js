import React from 'react'
import { Route, IndexRoute } from 'react-router'

// containers
import App from './shared/containers/App'
import { Auth } from './shared/containers/Auth'
import NotFound from './shared/containers/NotFound'
import * as Home from './Home'
import * as Cluster from './Cluster'
import * as Map from './Map'

module.exports = (
  <Route path='/' component={App}>
    <IndexRoute component={Auth(Home.Container, Home.roles)} />
    <Route path='cluster' component={Auth(Cluster.Container, Cluster.roles)} />
    <Route path='map' component={Auth(Map.Container, Map.roles)} />
    <Route path='*' component={NotFound} />
  </Route>
)
