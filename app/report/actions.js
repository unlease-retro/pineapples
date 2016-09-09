import * as actions from './actionTypes'
import * as service from './service'

export const fetchPineapples = () => ({
  types: [ actions.FETCH_PINEAPPLES_REQUEST, actions.FETCH_PINEAPPLES_SUCCESS, actions.FETCH_PINEAPPLES_FAILURE ],
  payload: {},
  promise: () => new Promise( (resolve, reject) => service.fetchPineapples(resolve, reject) )
})

export const setSort = props => ({
  type: actions.SET_SORT,
  payload: {
    options: {
      ...props
    }
  }
})
