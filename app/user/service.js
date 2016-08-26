/**
  * @desc User service - provides an interface to the User API
*/

import * as API from '../shared/services/api'


export const fetchUser = (resolve, reject) =>
  API.get('auth/whoami')
    .then( res => res.json() )
    .then( json => resolve(json.user) )
    .catch( e => reject(e) )

export const fetchUsers = (role, resolve, reject) =>
  API.get(`user/${role}`)
    .then( res => res.json() )
    .then( json => resolve(json) )
    .catch( e => reject(e) )

export const createUser = (data, resolve, reject) =>
  API.post('user', data)
    .then( res => res.json() )
    .then( json => resolve(json.user) )
    .catch( e => reject(e) )

export const updateUser = (id, data, resolve, reject) =>
  API.put(`user/${id}`, data)
    .then( res => res.json() )
    .then( json => resolve(json) )
    .catch( e => reject(e) )

export const deleteUser = (id, resolve, reject) =>
  API.remove(`user/${id}`)
    .then( res => resolve(id, res) )
    .catch( e => reject(e) )

export const fetchWriters = (resolve, reject) =>
  API.get('writer')
  .then( res => res.json() )
  .then( json => resolve(json) )
  .catch( e => reject(e) )

export const createWriter = (data, resolve, reject) =>
  API.post('writer', data)
    .then( res => res.json() )
    .then( json => resolve(json.writer) )
    .catch( e => reject(e) )

export const updateWriter = (id, data, resolve, reject) =>
  API.put(`writer/${id}`, data)
    .then( res => res.json() )
    .then( json => resolve(json) )
    .catch( e => reject(e) )

export const deleteWriter = (id, resolve, reject) =>
  API.remove(`writer/${id}`)
    .then( res => resolve(id, res) )
    .catch( e => reject(e) )