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
        <Components.Clusters clusters={this.props.clusters} actions={{ selectCluster: this.props.actions.selectCluster }}/>
        <Components.Delivery
          selectedCluster={this.props.selectedCluster}
          actions={{
            changeStatus: this.props.actions.changeStatus,
            unselectCluster: this.props.actions.unselectCluster
          }}
          clusters={this.props.clusters}
        />
      </div>
    )

  }

}

export default connect(
  createStructuredSelector({
    rider: selectors.getAll,
    clusters: selectors.getClusters,
    selectedCluster: selectors.selectedCluster
  }),
  dispatch => ({
    actions: bindActionCreators(actions, dispatch)
  })
)(Rider)
