import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import * as actions from './actions'
// import * as Components from './components'
import * as selectors from './selectors'

export class User extends Component {

  componentWillMount() {

    console.log('User :: componentWillMount')

  }

  render() {

    // const { role } = this.props
    // const { someAction } = this.props.actions

    return (
      <div>

        Users

      </div>
    )

  }

}

export default connect(
  createStructuredSelector({
    role: selectors.getRole,
  }),
  dispatch => ({
    actions: bindActionCreators(actions, dispatch)
  })
)(User)
