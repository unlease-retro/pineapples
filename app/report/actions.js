import * as actions from './actionTypes'
import * as service from './service'

export const fetchPineapples = (queryString) => ({
  types: [ actions.FETCH_PINEAPPLES_REQUEST, actions.FETCH_PINEAPPLES_SUCCESS, actions.FETCH_PINEAPPLES_FAILURE ],
  payload: {},
  promise: () => new Promise( (resolve, reject) => service.fetchPineapples(queryString, resolve, reject) )
})

export const setSort = props => ({
  type: actions.SET_SORT,
  payload: {
    options: {
      ...props
    }
  }
})

export const setFilterShown = filterShown => ({
  type: actions.SET_FILTER_SHOWN,
  payload: {
    filterOptions: {
      filterShown
    }
  }
})
