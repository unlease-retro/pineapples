import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import * as actions from './actions'
import * as Components from './components'
import * as selectors from './selectors'

export class Rider extends Component {

  componentWillMount() {

    // console.log('Rider :: componentWillMount')

    this.props.actions.fetchClusters()

  }

  render() {

    return (
      <div>
        <Components.Clusters clusters={this.props.rider.get('clusters').toJS()} />
      </div>
    )

  }

}

export default connect(
  createStructuredSelector({
    rider: selectors.getAll,
  }),
  dispatch => ({
    actions: bindActionCreators(actions, dispatch)
  })
)(Rider)
