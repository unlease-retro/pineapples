/**
  * @desc Report service - provides a general interface to API methods used for reporting
*/

import * as API from '../shared/services/api'

export const fetchPineapples = (page = 0, resolve, reject) =>
  API.get(`pineapple?page=${page}`)
    .then( res => res.json() )
    .then( json => json.errMsg ? reject(Error(json.errMsg)) : resolve(json) )
    .catch( e => reject(e) )
