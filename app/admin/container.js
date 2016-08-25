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

    const { clusters, clustersOptions, depots, ridersOptions, mapCenter, searchCluster, filterCluster, clusterFilterOptions, filteredClusters, isPanelOpen, totalClusters, selectedCluster } = this.props
    const { selectCluster, updateCluster, setMapCenter, setSearchCluster, setFilterCluster } = this.props.actions

    // show all clusters unless filtered by search
    const showClusters = filteredClusters.length > 0 ? filteredClusters : clusters

    // render `panel` when cluster selected
    const renderPanel = isPanelOpen ? <Components.panel {...selectedCluster} riders={ridersOptions} totalClusters={totalClusters} selectCluster={selectCluster} updateCluster={updateCluster} setMapCenter={setMapCenter} /> : null

    return (
      <div className={ css(styles.base) }>

        <Components.map clusters={showClusters} depots={depots} mapCenter={mapCenter} isPanelOpen={isPanelOpen} selectCluster={selectCluster} setMapCenter={setMapCenter} />
        <Components.search clusters={clustersOptions} searchCluster={searchCluster} setSearchCluster={setSearchCluster} />
        <Components.filter options={clusterFilterOptions} filterCluster={filterCluster} setFilterCluster={setFilterCluster} />

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
    clustersOptions: selectors.getClustersOptions,
    depots: selectors.getDepots,
    ridersOptions: selectors.getRidersOptions,
    mapCenter: selectors.getMapCenter,
    searchCluster: selectors.getSearchCluster,
    filterCluster: selectors.getFilterCluster,
    clusterFilterOptions: selectors.getClusterFilterOptions,
    filteredClusters: selectors.getFilteredClusters,
    isPanelOpen: selectors.getIsPanelOpen,
    totalClusters: selectors.getTotalClusters,
    selectedCluster: createStructuredSelector({
      clusterIndex: selectors.getSelectedClusterIndex,
      clusterId: selectors.getClusterId,
      clusterName: selectors.getClusterName,
      clusterPosition: selectors.getClusterPosition,
      clusterDepotName: selectors.getClusterDepotName,
      clusterDepotPosition: selectors.getClusterDepotPosition,
      clusterRider: selectors.getClusterRider,
      clusterDeliverable: selectors.getClusterDeliverable,
      clusterTotalPineapples: selectors.getClusterTotalPineapples,
    }),
  }),
  dispatch => ({
    actions: bindActionCreators(actions, dispatch)
  })
)(Admin)
