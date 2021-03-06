/**
 * Created by BigaMasta on 8/22/16.
 */
import * as API from '../shared/services/api'

export const fetchClusters = (resolve, reject) =>
  API.get('cluster?deliverable=true')
    .then( res => res.json() )
    .then( json => json.errMsg ? reject(Error(json.errMsg)) : resolve(json) )
    .catch( e => reject(e) )

export const changeStatus = (id, status, pineappleIndex, resolve, reject) =>
  API.put(`pineapple/${id}`, status)
    .then( res => res.json() )
    .then( json => json.errMsg ? reject(Error(json.errMsg)) : resolve({ ...json, pineappleIndex, snackbar: 'Pineapple delivery status updated! 🍍' }) )
    .catch( e => reject(e) )

export const changeReason = (id, reason, comment, pineappleIndex, resolve, reject) =>
  API.put(`pineapple/${id}`, { undeliveredReason: reason, reasonComment: comment, deliverable: false })
    .then( res => res.json() )
    .then( json => json.errMsg ? reject(Error(json.errMsg)) : resolve({ ...json, pineappleIndex, snackbar: 'Pineapple undelivered reason updated! 👍' }) )
    .catch( e => reject(e) )

export const startClusterDelivery = (id, resolve, reject) =>
  API.put(`cluster/${id}`, {startedAt: new Date()})
    .then( res => res.json() )
    .then( json => json.errMsg ? reject(Error(json.errMsg)) : resolve(json) )
    .catch( e => reject(e) )
