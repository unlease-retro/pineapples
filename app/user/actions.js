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

export const createUser = (data) => ({
  types: [ actions.CREATE_USER_REQUEST, actions.CREATE_USER_SUCCESS, actions.CREATE_USER_FAILURE ],
  payload: { requesting: true, error: null },
  promise: () => new Promise( (resolve, reject) => service.createUser(data, resolve, reject) )
})

export const updateUser = (id, data) => ({
  types: [ actions.UPDATE_USER_REQUEST, actions.UPDATE_USER_SUCCESS, actions.UPDATE_USER_FAILURE ],
  payload: { requesting: true, error: null },
  promise: () => new Promise( (resolve, reject) => service.updateUser(id, data, resolve, reject) )
})

export const deleteUser = (id) => ({
  types: [ actions.DELETE_USER_REQUEST, actions.DELETE_USER_SUCCESS, actions.DELETE_USER_FAILURE ],
  payload: { requesting: true, error: null },
  promise: () => new Promise( (resolve, reject) => service.deleteUser(id, resolve, reject) )
})

export const fetchWriters = () => ({
  types: [ actions.FETCH_WRITERS_REQUEST, actions.FETCH_WRITERS_SUCCESS, actions.FETCH_WRITERS_FAILURE ],
  payload: { requesting: true, error: null },
  promise: () => new Promise( (resolve, reject) => service.fetchWriters(resolve, reject) )
})

export const createWriter = (data) => ({
  types: [ actions.CREATE_WRITER_REQUEST, actions.CREATE_WRITER_SUCCESS, actions.CREATE_WRITER_FAILURE ],
  payload: { requesting: true, error: null },
  promise: () => new Promise( (resolve, reject) => service.createWriter(data, resolve, reject) )
})

export const updateWriter = (id, data) => ({
  types: [ actions.UPDATE_WRITER_REQUEST, actions.UPDATE_WRITER_SUCCESS, actions.UPDATE_WRITER_FAILURE ],
  payload: { requesting: true, error: null },
  promise: () => new Promise( (resolve, reject) => service.updateWriter(id, data, resolve, reject) )
})

export const deleteWriter = (id) => ({
  types: [ actions.DELETE_WRITER_REQUEST, actions.DELETE_WRITER_SUCCESS, actions.DELETE_WRITER_FAILURE ],
  payload: { requesting: true, error: null },
  promise: () => new Promise( (resolve, reject) => service.deleteWriter(id, resolve, reject) )
})