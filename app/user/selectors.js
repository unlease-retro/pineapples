import { name } from './constants'

export const getAll = state => state.get(name)
export const getRole = state => state.getIn([ name, 'role' ])
export const getUsers = state => state.getIn([ name, 'users' ]).toJS()
export const getWriters = state => state.getIn([ name, 'writers' ]).toJS()
export const getSelectedRole = state => state.getIn([ name, 'selectedRole' ])
export const getSelectedRoleForUpdateUser = state => state.getIn([ name, 'selectedRoleForUpdateUser' ])