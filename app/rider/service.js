/**
 * Created by BigaMasta on 8/22/16.
 */
import * as API from '../shared/services/api'

export const fetchClusters = (resolve, reject) =>
  API.get('cluster')
    .then( res => res.json() )
    .then( json => resolve(json) )
    .catch( e => reject(e) )