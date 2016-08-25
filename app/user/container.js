import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import * as actions from './actions'
import * as Components from './components'
import * as selectors from './selectors'


export class User extends Component {

  componentWillMount() {

    console.log('User :: componentWillMount')

    this.props.actions.fetchUsers()

  }

  render() {

    const { role, users, actions: { fetchUsers, deleteUser, createUser } } = this.props

    return (
      <div>

        <Components.users role={role} users={users} deleteUser={deleteUser} onChange={fetchUsers} />

        <hr />

        <Components.create role={role} onSubmit={createUser} />

      </div>
    )

  }

}

export default connect(
  createStructuredSelector({
    all: selectors.getAll,
    users: selectors.getUsers,
    role: selectors.getRole
  }),
  dispatch => ({
    actions: bindActionCreators(actions, dispatch)
  })
)(User)
