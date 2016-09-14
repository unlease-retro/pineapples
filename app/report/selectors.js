import { name } from './constants'

// static
const getAll = state => state.get(name)
const getFilterOptions = state => state.getIn([ name, 'filterOptions' ]).toObject()
const getOptions = state => state.getIn([ name, 'options' ]).toObject()
const getPineapples = state => state.getIn([ name, 'pineapples' ])
const getPineapplesCount = state => state.getIn([ name, 'pineapplesCount' ])


export default {
  all: getAll,
  filterOptions: getFilterOptions,
  options: getOptions,
  pineapples: getPineapples,
  pineapplesCount: getPineapplesCount
}
