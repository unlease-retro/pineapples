import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import * as actions from './actions'
// import * as Components from './components'
import * as selectors from './selectors'

export class Admin extends Component {

  componentWillMount() {

    // console.log('Admin :: componentWillMount')

  }

  render() {

    return (
      <div>
        <h1>Admin</h1>
      </div>
    )

  }

}

export default connect(
  createStructuredSelector({
    admin: selectors.getAll,
  }),
  dispatch => ({
    actions: bindActionCreators(actions, dispatch)
  })
)(Admin)
