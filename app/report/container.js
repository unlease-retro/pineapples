import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { push } from 'react-router-redux'

import * as actions from './actions'
import * as Components from './components'
import { position as Position } from '../shared/components'
// import * as SharedComponents from '../shared/components'
import selectors from './selectors'
import { perPage } from './constants'
import { buildLocationForReport } from '../shared/util/location'

export class Report extends Component {

  componentWillMount() {

    const { actions: { fetchPineapples }, location: { query: { page, sortBy, sortDirection } } } = this.props

    fetchPineapples(page, sortBy, sortDirection)

  }

  render() {

    const { fields, options, pineapples, actions, location: { query: { page } }, pineapplesCount } = this.props
    const { setSort } = actions

    return (
      <div>
        <Components.table fields={fields} list={pineapples} options={options} setSort={setSort} onSortClick={this.onSortClick.bind(this)}/>
        <Position top='600px' left='100px'>
          <Components.pagination
            page={parseInt(page)}
            perPage={perPage}
            pineapplesCount={pineapplesCount || 0}
            goToPage={this.goToPage.bind(this)}/>
        </Position>
      </div>
    )

  }

  goToPage(page) {

    const { actions: { fetchPineapples }, location: { query: { sortBy, sortDirection } }, dispatch } = this.props
    fetchPineapples(page, sortBy, sortDirection)
    dispatch(push(buildLocationForReport(page, sortBy, sortDirection)))

  }

  onSortClick({ sortBy, sortDirection }) {

    const { actions: { fetchPineapples }, location: { query: { page } }, dispatch } = this.props
    fetchPineapples(page, sortBy, sortDirection)
    dispatch(push(buildLocationForReport(page, sortBy, sortDirection)))

  }

}

export default connect(
  createStructuredSelector({ ...selectors }),
  dispatch => ({
    actions: bindActionCreators(actions, dispatch)
  })
)(Report)
