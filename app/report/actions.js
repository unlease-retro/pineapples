import * as actions from './actionTypes'
import * as service from './service'

export const fetchPineapples = (page = 0, sortBy = 'createdAt', sortDirection = 'ASC') => ({
  types: [ actions.FETCH_PINEAPPLES_REQUEST, actions.FETCH_PINEAPPLES_SUCCESS, actions.FETCH_PINEAPPLES_FAILURE ],
  payload: {},
  promise: () => new Promise( (resolve, reject) => service.fetchPineapples(page, sortBy, sortDirection, resolve, reject) )
})

export const setSort = props => ({
  type: actions.SET_SORT,
  payload: {
    options: {
      ...props
    }
  }
})
