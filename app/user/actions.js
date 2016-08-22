import * as actions from './actionTypes'
import * as service from './service'

export const fetchUser = () => ({
  types: [ actions.FETCH_REQUEST, actions.FETCH_SUCCESS, actions.FETCH_FAILURE ],
  payload: { requesting: true, error: null },
  promise: () => new Promise( (resolve, reject) => service.fetchUser(resolve, reject) )
})
