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
        <Components.Clusters clusters={this.props.clusters} chooseCluster={this._chooseCluster} />
      </div>
    )

  }

  _chooseCluster(cluster) {

    console.log('choosing ' + cluster)

  }

}

export default connect(
  createStructuredSelector({
    rider: selectors.getAll,
    clusters: selectors.getClusters
  }),
  dispatch => ({
    actions: bindActionCreators(actions, dispatch)
  })
)(Rider)
