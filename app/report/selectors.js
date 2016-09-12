import { createSelector } from 'reselect'
import { name } from './constants'

// static
const getAll = state => state.get(name)
const getOptions = state => state.getIn([ name, 'options' ]).toObject()
const getPineapples = state => state.getIn([ name, 'pineapples' ])
const getPineapplesCount = state => state.getIn([ name, 'pineapplesCount' ])

// computed
const getFields = createSelector( getPineapples, pineapples => pineapples.get(0) && pineapples.get(0).keySeq().toArray() )

export default {
  all: getAll,
  fields: getFields,
  options: getOptions,
  pineapples: getPineapples,
  pineapplesCount: getPineapplesCount
}
