import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import * as actions from './actions'
import * as Components from './components'
import * as selectors from './selectors'

export class Dashboard extends Component {

  componentWillMount() {

    console.log('Dashboard :: componentWillMount')

  }

  render() {

    return (
      <div>
        <h1>Dashboard</h1>
      </div>
    )

  }

}

export default connect(
  createStructuredSelector({
    dashboard: selectors.getAll,
  }),
  dispatch => ({
    actions: bindActionCreators(actions, dispatch)
  })
)(Dashboard)
