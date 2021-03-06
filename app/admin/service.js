/**
  * @desc Admin service - provides a general interface to admin user API methods
*/

import * as API from '../shared/services/api'

export const fetchClusters = (resolve, reject) =>
  API.get('cluster')
    .then( res => res.json() )
    .then( json => json.errMsg ? reject(Error(json.errMsg)) : resolve(json) )
    .catch( e => reject(e) )

export const fetchDepots = (resolve, reject) =>
  API.get('depot')
    .then( res => res.json() )
    .then( json => json.errMsg ? reject(Error(json.errMsg)) : resolve(json) )
    .catch( e => reject(e) )

export const fetchRiders = (resolve, reject) =>
  API.get('user/rider')
    .then( res => res.json() )
    .then( json => json.errMsg ? reject(Error(json.errMsg)) : resolve({ riders: json.users }) )
    .catch( e => reject(e) )

export const updateCluster = (resolve, reject, id, data, index) =>
  API.put(`cluster/${id}`, data)
    .then( res => res.json() )
    .then( json => json.errMsg ? reject(Error(json.errMsg)) : resolve({ index, cluster: json.cluster, snackbar: 'Cluster updated, no problemo 😁' }) )
    .catch( e => reject(e) )

export const cutOff = (resolve, reject) =>
  API.post('cluster/generate')
    .then( res => res.json() )
    .then( json => json.errMsg ? reject(Error(json.errMsg)) : resolve({ ...json, generateUnlocked: false }) )
    .catch( e => reject(e) )

export const fetchStats = (resolve, reject) =>
  API.get('pineapple/list/stats')
    .then( res => res.json() )
    .then( json => json.errMsg ? reject(Error(json.errMsg)) : resolve(json) )
    .catch( e => reject(e) )
