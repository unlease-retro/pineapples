import { name } from './constants'
import { FIELDS } from './constants'

// static
const getAll = state => state.get(name)
const getFilterOptions = state => state.getIn([ name, 'filterOptions' ]).toObject()
const getOptions = state => state.getIn([ name, 'options' ]).toObject()
const getPineapples = state => state.getIn([ name, 'pineapples' ])
const getPineapplesCount = state => state.getIn([ name, 'pineapplesCount' ])

// stateless
const getFilterableOptions = () =>
  Object.keys(FIELDS).map(fieldName => ({value: fieldName, label: fieldName}))

// form
const getSelectedFilter = state =>
  state.getIn(['form'])
    && state.getIn(['form']).filterBuilder
    && state.getIn(['form']).filterBuilder.values
    && state.getIn(['form']).filterBuilder.values.selectedFilter
    && state.getIn(['form']).filterBuilder.values.selectedFilter.value

const getPickedValue = state =>
  state.getIn(['form'])
    && state.getIn(['form']).filterBuilder
    && state.getIn(['form']).filterBuilder.values
    && state.getIn(['form']).filterBuilder.values.pickedValue

const getPickedStartValue = state =>
  state.getIn(['form'])
    && state.getIn(['form']).filterBuilder
    && state.getIn(['form']).filterBuilder.values
    && state.getIn(['form']).filterBuilder.values.pickedStartValue

const getPickedEndValue = state =>
  state.getIn(['form'])
    && state.getIn(['form']).filterBuilder
    && state.getIn(['form']).filterBuilder.values
    && state.getIn(['form']).filterBuilder.values.pickedEndValue

export default {
  all: getAll,
  filterableOptions: getFilterableOptions,
  filterOptions: getFilterOptions,
  options: getOptions,
  pickedEndValue: getPickedEndValue,
  pickedStartValue: getPickedStartValue,
  pickedValue: getPickedValue,
  pineapples: getPineapples,
  pineapplesCount: getPineapplesCount,
  selectedFilter: getSelectedFilter,
}
