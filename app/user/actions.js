import * as actions from './actionTypes'
import * as service from './service'

export const fetchUser = () => ({
  types: [ actions.FETCH_REQUEST, actions.FETCH_SUCCESS, actions.FETCH_FAILURE ],
  payload: { requesting: true, error: null },
  promise: () => new Promise( (resolve, reject) => service.fetchUser(resolve, reject) )
})

export const fetchUsers = (role = 'any') => ({
  types: [ actions.FETCH_USERS_REQUEST, actions.FETCH_USERS_SUCCESS, actions.FETCH_USERS_FAILURE ],
  payload: { requesting: true, error: null },
  promise: () => new Promise( (resolve, reject) => service.fetchUsers(role, resolve, reject) )
})

export const createUser = (user) => ({
  types: [ actions.CREATE_USER_REQUEST, actions.CREATE_USER_SUCCESS, actions.CREATE_USER_FAILURE ],
  payload: { requesting: true, error: null },
  promise: () => new Promise( (resolve, reject) => service.createUser(user, resolve, reject) )
})

export const deleteUser = (id) => ({
  types: [ actions.DELETE_USER_REQUEST, actions.DELETE_USER_SUCCESS, actions.DELETE_USER_FAILURE ],
  payload: { requesting: true, error: null },
  promise: () => new Promise( (resolve, reject) => service.deleteUser(id, resolve, reject) )
})