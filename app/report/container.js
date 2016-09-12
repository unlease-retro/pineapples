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

export class Report extends Component {

  componentWillMount() {

    const { actions: { fetchPineapples }, location: { query: { page } } } = this.props

    fetchPineapples(page)

  }

  render() {

    const { fields, options, pineapples, actions, location: { query: { page } }, pineapplesCount } = this.props
    const { setSort } = actions

    return (
      <div>
        <Components.table fields={fields} list={pineapples} options={options} setSort={setSort} />
        <Position top='600px'>
          <Components.pagination page={parseInt(page)} perPage={perPage} pineapplesCount={pineapplesCount} goToPage={this.goToPage.bind(this)}/>
        </Position>
      </div>
    )

  }

  goToPage(pageNumber) {

    this.props.dispatch(push(`/report?page=${pageNumber}`))

  }

}

export default connect(
  createStructuredSelector({ ...selectors }),
  dispatch => ({
    actions: bindActionCreators(actions, dispatch)
  })
)(Report)
