import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { push } from 'react-router-redux'

import * as actions from './actions'
import * as Components from './components'
import { position as Position } from '../shared/components'
import selectors from './selectors'
import { perPage, fields } from './constants'
import { buildLocationForReport, buildLocationForOrderInfo } from '../shared/util/location'
import { toQueryString, objectWithStrippedProps } from '../../server/shared/util/misc'

export class Report extends Component {

  componentWillMount() {

    const { actions: { fetchPineapples }, location: { query } } = this.props

    fetchPineapples(toQueryString(query))

  }

  render() {

    const { filterOptions: { filterShown, filters }, options, pineapples, actions, location: { query }, pineapplesCount, filterableOptions, dispatch, selectedFilter, picker } = this.props
    const { page } = query
    const { setSort, setFilterShown } = actions

    return (
      <div>
        <Components.filter
          setFilterShown={setFilterShown}
          filterShown={filterShown}
          filters={filters}
          filterableOptions={filterableOptions}
          dispatch={dispatch}
          selectedFilter={selectedFilter}
          picker={picker}
          onFilterApplied={this.onFilterApplied.bind(this)}
          filtersApplied={objectWithStrippedProps(query, 'page', 'sortBy', 'sortDirection')}
          onFilterRemove={this.onFilterRemove.bind(this)} />
        <Components.table list={pineapples} options={options} setSort={setSort} onSortClick={this.onSortClick.bind(this)} showItem={this.goToOrder.bind(this)}/>
        <Position top='1040px' left='calc(50% - 116px)'>
          <Components.pagination
            page={parseInt(page) || 0}
            perPage={perPage}
            pineapplesCount={pineapplesCount || 0}
            goToPage={this.goToPage.bind(this)}/>
        </Position>
      </div>
    )

  }

  goToOrder(row) {

    const id = row.get('_id')
    const { dispatch } = this.props
    dispatch(push(buildLocationForOrderInfo(id)))

  }

  goToPage(page) {

    const { actions: { fetchPineapples }, location: { query }, dispatch } = this.props
    const queryString = toQueryString({ ...query, page })
    fetchPineapples(queryString)
    dispatch(push(buildLocationForReport(queryString)))

  }

  onSortClick({ sortBy, sortDirection }) {

    const { actions: { fetchPineapples }, location: { query }, dispatch } = this.props
    const queryString = toQueryString(objectWithStrippedProps({ ...query, sortBy, sortDirection }, 'page'))
    fetchPineapples(queryString)
    dispatch(push(buildLocationForReport(queryString)))

  }

  onFilterApplied(selectedFilter, filterValue) {

    // first time the boolean is undefined
    const emptyValue = (!filterValue && fields[selectedFilter] instanceof Boolean) ? 'false' : ''

    const { actions: { fetchPineapples, setFilterShown }, location: { query }, dispatch } = this.props
    const queryString = toQueryString(objectWithStrippedProps({ ...query, [selectedFilter]: (filterValue || emptyValue) }, 'page', 'sortBy', 'sortDirection'))
    fetchPineapples(queryString)
    dispatch(push(buildLocationForReport(queryString)))
    setFilterShown(false)

  }

  onFilterRemove(filterToRemove) {

    const { actions: { fetchPineapples }, location: { query }, dispatch } = this.props
    const queryString = toQueryString(objectWithStrippedProps(query, filterToRemove))
    fetchPineapples(queryString)
    dispatch(push(buildLocationForReport(queryString)))

  }

}

export default connect(
  createStructuredSelector({ ...selectors }),
  dispatch => ({
    actions: bindActionCreators(actions, dispatch)
  })
)(Report)
