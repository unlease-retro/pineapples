import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { browserHistory } from 'react-router'

import * as actions from './actions'
import * as Components from './components'
import * as SharedComponents from '../shared/components'
import * as selectors from './selectors'

export class User extends Component {

  render() {

    const { role, selectedRole, selectedRoleForUpdateUser, users, writers, actions } = this.props

    return (
      <SharedComponents.wrap>

        <SharedComponents.button onClick={ () => browserHistory.push('/') } label='arrow_back' theme='icon' />

        <SharedComponents.title content='Update user' />

        <Components.filter role={role} fetchWriters={actions.fetchWriters} fetchUsers={actions.fetchUsers} changeRole={actions.changeRoleForUpdate} selectedRole={selectedRoleForUpdateUser} />
        <Components.list data={users} update={actions.updateUser} remove={actions.deleteUser} />
        <Components.list data={writers} update={actions.updateWriter} remove={actions.deleteWriter} />

        <SharedComponents.title content='Create user' />

        <Components.create role={role} selectedRole={selectedRole} changeRole={actions.changeRole} createUser={actions.createUser} createWriter={actions.createWriter} />

      </SharedComponents.wrap>
    )

  }

}

export default connect(
  createStructuredSelector({
    users: selectors.getUsers,
    writers: selectors.getWriters,
    role: selectors.getRole,
    selectedRole: selectors.getSelectedRole,
    selectedRoleForUpdateUser: selectors.getSelectedRoleForUpdateUser
  }),
  dispatch => ({
    actions: bindActionCreators(actions, dispatch)
  })
)(User)
