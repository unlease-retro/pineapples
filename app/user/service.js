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

export const createUser = (user, resolve, reject) =>
  API.post('user', user)
    .then( res => res.json() )
    .then( json => resolve(json.user) )
    .catch( e => reject(e) )

export const deleteUser = (id, resolve, reject) =>
  API.remove(`user/${id}`)
    .then( res => res.json() )
    .then( json => resolve(json) )
    .catch( e => reject(e) )