import { name } from './constants'

// static
const getAll = state => state.get(name)
const getOptions = state => state.getIn([ name, 'options' ]).toObject()
const getPineapples = state => state.getIn([ name, 'pineapples' ])
const getPineapplesCount = state => state.getIn([ name, 'pineapplesCount' ])


export default {
  all: getAll,
  options: getOptions,
  pineapples: getPineapples,
  pineapplesCount: getPineapplesCount
}
