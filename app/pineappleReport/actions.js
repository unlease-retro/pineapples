import * as actions from './actionTypes'
import * as service from './service'

export const fetchPineapple = (id) => ({
  types: [ actions.FETCH_PINEAPPLE_REQUEST, actions.FETCH_PINEAPPLE_SUCCESS, actions.FETCH_PINEAPPLE_FAILURE ],
  payload: {},
  promise: () => new Promise( (resolve, reject) => service.fetchPineapple(id, resolve, reject) )
})
