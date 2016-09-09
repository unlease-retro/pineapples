import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import * as actions from './actions'
import * as Components from './components'
// import * as SharedComponents from '../shared/components'
import selectors from './selectors'

export class Report extends Component {

  componentWillMount() {

    const { actions: { fetchPineapples } } = this.props

    fetchPineapples()

  }

  render() {

    const { fields, options, pineapples, actions } = this.props
    const { setSort } = actions

    return (
      <div>
        <Components.table fields={fields} list={pineapples} options={options} setSort={setSort} />
      </div>
    )

  }

}

export default connect(
  createStructuredSelector({ ...selectors }),
  dispatch => ({
    actions: bindActionCreators(actions, dispatch)
  })
)(Report)
