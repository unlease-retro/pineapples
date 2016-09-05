import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import * as actions from './actions'
import * as Components from './components'
import * as SharedComponents from '../shared/components'
import * as selectors from './selectors'

export class Rider extends Component {

  componentWillMount() {

    this.props.actions.fetchClusters()

  }

  render() {

    const { clusters, selectedCluster, clusterDistance, clusterDuration, actions, undeliveredReasonOptions } = this.props

    const deliveryActions = {
      changeStatus: actions.changeStatus,
      changeReason: actions.changeReason,
      submitChangedReason: actions.submitChangedReason,
      unselectCluster: actions.unselectCluster,
      startClusterDelivery: actions.startClusterDelivery,
      changeReasonComment: actions.changeReasonComment
    }

    const clustersActions = { selectCluster: actions.selectCluster }

    const renderDelivery = selectedCluster ? (
      <Components.Delivery
        selectedCluster={selectedCluster}
        actions={deliveryActions}
        viewAllButton={clusters.size > 1}
        undeliveredReasonOptions={undeliveredReasonOptions}
        clusterDistance={clusterDistance}
        clusterDuration={clusterDuration}
      />
    ) : null

    return (
      <SharedComponents.wrap>

        <Components.Clusters
          clusters={clusters}
          actions={clustersActions} />

        <ReactCSSTransitionGroup transitionName='slide-in-left' transitionEnterTimeout={300} transitionLeaveTimeout={300}>
          {renderDelivery}
        </ReactCSSTransitionGroup>

      </SharedComponents.wrap>
    )

  }

}

export default connect(
  createStructuredSelector({
    rider: selectors.getAll,
    clusters: selectors.getClusters,
    selectedCluster: selectors.selectedCluster,
    undeliveredReasonOptions: selectors.getUndeliveredReasonOptions,
    clusterDistance: selectors.getClusterDistance,
    clusterDuration: selectors.getClusterDuration
  }),
  dispatch => ({
    actions: bindActionCreators(actions, dispatch)
  })
)(Rider)
