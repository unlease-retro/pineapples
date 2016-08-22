import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import * as actions from './actions'
import * as Components from './components'
import * as selectors from './selectors'

export class Admin extends Component {

  componentWillMount() {

    const { actions: { fetchClusters } } = this.props

    fetchClusters()

  }

  render() {

    const { clusters } = this.props

    return (
      <div className='admin'>
        <Components.map clusters={clusters} />
      </div>
    )

  }

}

export default connect(
  createStructuredSelector({
    clusters: selectors.getClusters,
  }),
  dispatch => ({
    actions: bindActionCreators(actions, dispatch)
  })
)(Admin)
