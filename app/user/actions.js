import * as actions from './actionTypes'
import * as service from './service'

export const fetchUser = () => ({
  types: [ actions.FETCH_REQUEST, actions.FETCH_SUCCESS, actions.FETCH_FAILURE ],
  payload: {},
  promise: () => new Promise( (resolve, reject) => service.fetchUser(resolve, reject) )
})

export const fetchUsers = (role = 'any') => ({
  types: [ actions.FETCH_USERS_REQUEST, actions.FETCH_USERS_SUCCESS, actions.FETCH_USERS_FAILURE ],
  payload: {},
  promise: () => new Promise( (resolve, reject) => service.fetchUsers(role, resolve, reject) )
})

export const createUser = (data) => ({
  types: [ actions.CREATE_USER_REQUEST, actions.CREATE_USER_SUCCESS, actions.CREATE_USER_FAILURE ],
  payload: {},
  promise: () => new Promise( (resolve, reject) => service.createUser(data, resolve, reject) )
})

export const updateUser = (id, data, index) => ({
  types: [ actions.UPDATE_USER_REQUEST, actions.UPDATE_USER_SUCCESS, actions.UPDATE_USER_FAILURE ],
  payload: {},
  promise: () => new Promise( (resolve, reject) => service.updateUser(id, data, index, resolve, reject) )
})

export const deleteUser = (id, data, index) => ({
  types: [ actions.DELETE_USER_REQUEST, actions.DELETE_USER_SUCCESS, actions.DELETE_USER_FAILURE ],
  payload: {},
  promise: () => new Promise( (resolve, reject) => service.deleteUser(id, data, index, resolve, reject) )
})

export const fetchWriters = () => ({
  types: [ actions.FETCH_WRITERS_REQUEST, actions.FETCH_WRITERS_SUCCESS, actions.FETCH_WRITERS_FAILURE ],
  payload: {},
  promise: () => new Promise( (resolve, reject) => service.fetchWriters(resolve, reject) )
})

export const createWriter = (data) => ({
  types: [ actions.CREATE_WRITER_REQUEST, actions.CREATE_WRITER_SUCCESS, actions.CREATE_WRITER_FAILURE ],
  payload: {},
  promise: () => new Promise( (resolve, reject) => service.createWriter(data, resolve, reject) )
})

export const updateWriter = (id, data, index) => ({
  types: [ actions.UPDATE_WRITER_REQUEST, actions.UPDATE_WRITER_SUCCESS, actions.UPDATE_WRITER_FAILURE ],
  payload: {},
  promise: () => new Promise( (resolve, reject) => service.updateWriter(id, data, index, resolve, reject) )
})

export const deleteWriter = (id, data, index) => ({
  types: [ actions.DELETE_WRITER_REQUEST, actions.DELETE_WRITER_SUCCESS, actions.DELETE_WRITER_FAILURE ],
  payload: {},
  promise: () => new Promise( (resolve, reject) => service.deleteWriter(id, data, index, resolve, reject) )
})

export const changeRole = (selectedRole) => ({
  type: actions.CHANGE_SELECTED_ROLE,
  payload: { selectedRole }
})

export const changeRoleForUpdate = (selectedRoleForUpdateUser) => ({
  type: actions.CHANGE_SELECTED_ROLE_FOR_UPDATE,
  payload: { selectedRoleForUpdateUser }
})
