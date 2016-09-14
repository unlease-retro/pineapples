import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { push } from 'react-router-redux'

import * as actions from './actions'
import * as Components from './components'
import { position as Position } from '../shared/components'
import selectors from './selectors'
import { perPage } from './constants'
import { buildLocationForReport, buildLocationForOrderInfo } from '../shared/util/location'
import { toQueryString } from '../../server/shared/util/misc'

export class Report extends Component {

  componentWillMount() {

    const { actions: { fetchPineapples }, location: { query } } = this.props

    fetchPineapples(toQueryString(query))

  }

  render() {

    const { options, pineapples, actions, location: { query: { page } }, pineapplesCount } = this.props
    const { setSort } = actions

    return (
      <div>
        <Components.table list={pineapples} options={options} setSort={setSort} onSortClick={this.onSortClick.bind(this)} onRowItemClick={this.goToOrder.bind(this)}/>
        <Position top='940px' left='calc(50% - 116px)'>
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
    const queryString = toQueryString({ ...query, sortBy, sortDirection })
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
