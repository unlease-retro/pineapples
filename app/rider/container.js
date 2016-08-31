import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import * as actions from './actions'
import * as Components from './components'
import * as selectors from './selectors'

export class Rider extends Component {

  componentWillMount() {

    // console.log('Rider :: componentWillMount')

    this.props.actions.fetchClusters()

  }

  render() {

    const { clusters, selectedCluster, actions } = this.props

    const deliveryActions = {
      changeStatus: actions.changeStatus,
      changeReason: actions.changeReason,
      unselectCluster: actions.unselectCluster,
      startClusterDelivery: actions.startClusterDelivery
    }

    const clustersActions = { selectCluster: actions.selectCluster }

    const renderDelivery = selectedCluster ? (
      <Components.Delivery
        selectedCluster={selectedCluster}
        actions={deliveryActions}
        viewAllButton={clusters.length > 1} />
    ) : null

    return (
      <div>

        <Components.Clusters
          clusters={clusters}
          actions={clustersActions} />
        <ReactCSSTransitionGroup transitionName='slide-in-left' transitionEnterTimeout={300} transitionLeaveTimeout={300}>
          {renderDelivery}
        </ReactCSSTransitionGroup>
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
