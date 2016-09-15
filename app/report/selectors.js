import { name } from './constants'
import { DISPLAY_FIELDS } from './constants'

// static
const getAll = state => state.get(name)
const getFilterOptions = state => state.getIn([ name, 'filterOptions' ]).toObject()
const getOptions = state => state.getIn([ name, 'options' ]).toObject()
const getPineapples = state => state.getIn([ name, 'pineapples' ])
const getPineapplesCount = state => state.getIn([ name, 'pineapplesCount' ])

// stateless
const getFilterableOptions = () =>
  DISPLAY_FIELDS.map(field => ({value: field, label: field}))

// form
const getSelectedFilter = state =>
  state.getIn(['form'])
    && state.getIn(['form']).filterBuilder
    && state.getIn(['form']).filterBuilder.values
    && state.getIn(['form']).filterBuilder.values.selectedFilter
    && state.getIn(['form']).filterBuilder.values.selectedFilter.value

export default {
  all: getAll,
  filterableOptions: getFilterableOptions,
  filterOptions: getFilterOptions,
  options: getOptions,
  pineapples: getPineapples,
  pineapplesCount: getPineapplesCount,
  selectedFilter: getSelectedFilter,
}
