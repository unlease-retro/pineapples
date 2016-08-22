/**
  * @desc User service - provides an interface to the User API
*/

import * as API from '../shared/services/api'

export const fetchUser = (resolve, reject) =>
  API.get('auth/whoami')
    .then( res => res.json() )
    .then( json => resolve(json.user) )
    .catch( e => reject(e) )
