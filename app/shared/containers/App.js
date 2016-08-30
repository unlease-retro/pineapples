import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import * as User from '../../user'
import { selectors as UISelectors} from '../../ui'
import { splash as Splash } from '../components'

export class App extends Component {

  componentWillMount() {

    const { role, actions: { fetchUser } } = this.props

    // fetch user if required
    if (!role) fetchUser()

  }

  render() {

    const { children, splash } = this.props

    // render splash screen if user role not fetched
    const renderApp = splash ? <Splash /> : children

    return (
      <div id='app'>

        { renderApp }

      </div>
    )

  }

}

export default connect(
  createStructuredSelector({
    role: User.selectors.getRole,
    splash: UISelectors.getSplash,
  }),
  dispatch => ({
    actions: bindActionCreators(User.actions, dispatch)
  })
)(App)
