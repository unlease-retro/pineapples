/**
  * @desc Admin service - provides a general interface to admin user API methods
*/

import * as API from '../shared/services/api'

export const fetchClusters = (resolve, reject) =>
  API.get('cluster')
    .then( res => resolve(res.json()) )
    .catch( e => reject(e) )

export const fetchDepots = (resolve, reject) =>
  API.get('depot')
    .then( res => resolve(res.json()) )
    .catch( e => reject(e) )

export const fetchRiders = (resolve, reject) =>
  API.get('user/rider')
    .then( res => res.json() )
    .then( json => resolve({ riders: json.users }) )
    .catch( e => reject(e) )

export const updateCluster = (resolve, reject, id, data) =>
  API.put(`cluster/${id}`, data)
    .then( res => res.json() )
    .then( json => resolve({ selectedCluster: json.cluster }) )
    .catch( e => reject(e) )

export const cutOff = (resolve, reject) =>
  API.post('cluster/generate')
    .then( res => resolve(res.json()) )
    .catch( e => reject(e) )