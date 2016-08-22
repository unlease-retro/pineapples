/**
  * @desc Admin service - provides a general interface to admin user API methods
*/

import * as API from '../shared/services/api'

export const fetchClusters = (resolve, reject) =>
  API.get('cluster')
    .then( res => resolve(res.json()) )
    .catch( e => reject(e) )
