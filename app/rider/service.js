/**
 * Created by BigaMasta on 8/22/16.
 */
import * as API from '../shared/services/api'

export const fetchClusters = (resolve, reject) =>
  API.get('cluster?deliverable=true')
    .then( res => res.json() )
    .then( json => resolve(json) )
    .catch( e => reject(e) )

export const changeStatus = (id, status, pineappleIndex, resolve, reject) =>
  API.put(`pineapple/${id}`, status)
    .then( res => res.json() )
    .then( json => resolve({...json, pineappleIndex}) )
    .catch( e => reject(e) )

export const startClusterDelivery = (cluster, resolve, reject) =>
  API.put(`cluster/${cluster._id}`, {startedAt: new Date()})
    .then( res => res.json() )
    .then( json => resolve(json) )
    .catch( e => reject(e) )
