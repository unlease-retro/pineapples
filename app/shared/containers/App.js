import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import * as User from '../../user'

export class App extends Component {

  componentWillMount() {

    const { role, actions: { fetchUser } } = this.props

    // fetch user if required
    if (!role) fetchUser()

  }

  render() {

    return (
      <div id='app'>

        {this.props.children}

      </div>
    )

  }

}

export default connect(
  createStructuredSelector({
    role: User.selectors.getRole,
  }),
  dispatch => ({
    actions: bindActionCreators(User.actions, dispatch)
  })
)(App)
