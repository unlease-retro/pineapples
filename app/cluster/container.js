import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import * as actions from './actions'
// import * as Components from './components'
import * as selectors from './selectors'

export class Cluster extends Component {

  componentWillMount() {

    // console.log('Cluster :: componentWillMount')

  }

  render() {

    return (
      <div>
        <h1>Cluster</h1>
      </div>
    )

  }

}

export default connect(
  createStructuredSelector({
    cluster: selectors.getAll,
  }),
  dispatch => ({
    actions: bindActionCreators(actions, dispatch)
  })
)(Cluster)
