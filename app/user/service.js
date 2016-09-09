/**
  * @desc User service - provides an interface to the User API
*/

import * as API from '../shared/services/api'

export const fetchUser = (resolve, reject) =>
  API.get('auth/whoami')
    .then( res => res.json() )
    .then( json => json.errMsg ? reject(Error(json.errMsg)) : resolve(json.user) )
    .catch( e => reject(e) )

export const fetchUsers = (role, resolve, reject) =>
  API.get(`user/${role}`)
    .then( res => res.json() )
    .then( json => json.errMsg ? reject(Error(json.errMsg)) : resolve(json) )
    .catch( e => reject(e) )

export const createUser = (data, resolve, reject) =>
  API.post('user', data)
    .then( res => res.json() )
    .then( json => json.errMsg ? reject(Error(json.errMsg)) : resolve(json.user) )
    .catch( e => reject(e) )

export const updateUser = (id, data, index, resolve, reject) =>
  API.put(`user/${id}`, data)
    .then( res => res.json() )
    .then( json => json.errMsg ? reject(Error(json.errMsg)) : resolve({ index, user: json.user, snackbar: 'User updated, no problemo 😁'  }) )
    .catch( e => reject(e) )

export const deleteUser = (id, data, index, resolve, reject) =>
  API.remove(`user/${id}`, data)
    .then( res => res.ok ? resolve({ index, res }) : reject(Error('Error deleting writer')) )
    .catch( e => reject(e) )

export const fetchWriters = (resolve, reject) =>
  API.get('writer')
  .then( res => res.json() )
  .then( json => json.errMsg ? reject(Error(json.errMsg)) : resolve(json) )
  .catch( e => reject(e) )

export const createWriter = (data, resolve, reject) =>
  API.post('writer', data)
    .then( res => res.json() )
    .then( json => json.errMsg ? reject(Error(json.errMsg)) : resolve(json) )
    .catch( e => reject(e) )

export const updateWriter = (id, data, index, resolve, reject) =>
  API.put(`writer/${id}`, data)
    .then( res => res.json() )
    .then( json => json.errMsg ? reject(Error(json.errMsg)) : resolve({ index, writer: json.writer }) )
    .catch( e => reject(e) )

export const deleteWriter = (id, data, index, resolve, reject) =>
  API.remove(`writer/${id}`)
    .then( res => res.ok ? resolve({ index, res }) : reject(Error('Error deleting writer')) )
    .catch( e => reject(e) )
