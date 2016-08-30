import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import * as User from '../../user'
import { selectors as UISelectors} from '../../ui'
import { error as Error, progress as Progress, splash as Splash } from '../components'

export class App extends Component {

  componentWillMount() {

    const { role, actions: { fetchUser } } = this.props

    // fetch user if required
    if (!role) fetchUser()

  }

  render() {

    const { children, error, requesting, splash } = this.props

    // render splash screen if user role not fetched
    const renderApp = splash ? <Splash /> : children

    // render progress if requesting from API
    const renderProgress = requesting ? <Progress /> : null

    // render error if something went wrong...
    const renderError = error ? <Error message={error.message} /> : null

    return (
      <div id='app'>

        { renderProgress }

        { renderError }

        { renderApp }

      </div>
    )

  }

}

export default connect(
  createStructuredSelector({
    error: UISelectors.getError,
    requesting: UISelectors.getRequesting,
    role: User.selectors.getRole,
    splash: UISelectors.getSplash,
  }),
  dispatch => ({
    actions: bindActionCreators(User.actions, dispatch)
  })
)(App)
