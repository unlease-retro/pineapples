import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import scriptLoader from '../util/scriptLoader'

import * as User from '../../user'
import * as UI from '../../ui'
import { error as Error, progress as Progress, snackbar as Snackbar, splash as Splash } from '../components'
import { GOOGLE_MAPS_SCRIPT } from '../constants'

export class App extends Component {

  componentWillMount() {

    const { role, actions: { fetchUser } } = this.props

    // fetch user if required
    if (!role) fetchUser()

  }

  componentWillReceiveProps(nextProps) {

    const { role, actions: { updateUI } } = this.props
    const { role: nextRole } = nextProps
    const { id, src } = GOOGLE_MAPS_SCRIPT

    // has script been appended to DOM?
    const shouldLoadScript = Boolean(!document.getElementById(id))

    if (nextRole && nextRole !== role && shouldLoadScript) {

      const onload = () => updateUI({ scriptsLoaded: true })

      // load Google Maps script if not rider
      if (nextRole !== 'RIDER') return scriptLoader({ id, src, onload })

      // skip Google Maps script and load app for riders
      onload()

    }

  }

  render() {

    const { children, error, requesting, snackbar, appLoaded } = this.props

    // render splash screen if user role not fetched / Google Maps not loaded
    const renderApp = appLoaded ? children : <Splash />

    // render progress if requesting from API
    const renderProgress = requesting ? <Progress /> : null

    // render error if something went wrong...
    const renderError = error ? <Error message={error.message} /> : null

    // render error if something went wrong...
    const renderSnackbar = snackbar ? <Snackbar message={snackbar} /> : null

    return (
      <div id='app'>

        { renderProgress }

        { renderError }

        { renderApp }

        { renderSnackbar }

      </div>
    )

  }

}

export default connect(
  createStructuredSelector({
    error: UI.selectors.getError,
    requesting: UI.selectors.getRequesting,
    role: User.selectors.getRole,
    snackbar: UI.selectors.getSnackbar,
    appLoaded: UI.selectors.getAppLoaded,
  }),
  dispatch => ({
    actions: bindActionCreators({ ...User.actions, ...UI.actions }, dispatch)
  })
)(App)
