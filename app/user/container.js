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

  }

  render() {

    const { role, selectedRole, users, writers, actions } = this.props


    return (
      <div>

        <Components.filter role={role} fetchWriters={actions.fetchWriters} fetchUsers={actions.fetchUsers} />
        <Components.list data={users} update={actions.updateUser} remove={actions.deleteUser} />
        <Components.list data={writers} update={actions.updateWriter} remove={actions.deleteWriter} />

        <hr />

        <Components.create role={role} selectedRole={selectedRole} changeRole={actions.changeRole} createUser={actions.createUser} createWriter={actions.createWriter} />

      </div>
    )

  }

}

export default connect(
  createStructuredSelector({
    all: selectors.getAll,
    users: selectors.getUsers,
    writers: selectors.getWriters,
    role: selectors.getRole,
    selectedRole: selectors.getSelectedRole
  }),
  dispatch => ({
    actions: bindActionCreators(actions, dispatch)
  })
)(User)
