import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { StyleSheet, css } from 'aphrodite/no-important'

import * as actions from './actions'
import * as Components from './components'
import * as selectors from './selectors'

export class Admin extends Component {

  componentWillMount() {

    const { actions: { fetchClusters, fetchDepots, fetchRiders } } = this.props

    fetchClusters()
    fetchDepots()
    fetchRiders()

  }

  render() {

    const { clusters, depots, ridersOptions, mapCenter, isPanelOpen, selectedCluster, actions: { selectCluster, updateCluster, setMapCenter } } = this.props

    // show `panel` when cluster selected
    const renderPanel = isPanelOpen ? <Components.panel {...selectedCluster} riders={ridersOptions} selectCluster={selectCluster} updateCluster={updateCluster} setMapCenter={setMapCenter} /> : null

    return (
      <div className={ css(styles.base) }>

        <Components.map clusters={clusters} depots={depots} mapCenter={mapCenter} isPanelOpen={isPanelOpen} selectCluster={selectCluster} setMapCenter={setMapCenter} />

        <ReactCSSTransitionGroup transitionName='slide-right' transitionAppear={true} transitionAppearTimeout={500} transitionEnterTimeout={500} transitionLeaveTimeout={300} >
          { renderPanel }
        </ReactCSSTransitionGroup>

      </div>
    )

  }

}

const styles = StyleSheet.create({
  base: {
    height: '100%',
    margin: 0,
  }
})

export default connect(
  createStructuredSelector({
    clusters: selectors.getClusters,
    depots: selectors.getDepots,
    ridersOptions: selectors.getRidersOptions,
    mapCenter: selectors.getMapCenter,
    isPanelOpen: selectors.getIsPanelOpen,
    selectedCluster: createStructuredSelector({
      clusterId: selectors.getClusterId,
      clusterName: selectors.getClusterName,
      clusterDepotName: selectors.getClusterDepotName,
      clusterDepotPosition: selectors.getClusterDepotPosition,
      clusterRider: selectors.getClusterRider,
      clusterTotalPineapples: selectors.getClusterTotalPineapples,
    }),
  }),
  dispatch => ({
    actions: bindActionCreators(actions, dispatch)
  })
)(Admin)
