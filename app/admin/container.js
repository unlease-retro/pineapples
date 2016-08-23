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

    const { actions: { fetchClusters } } = this.props

    fetchClusters()

  }

  render() {

    const { clusters, selectedCluster, isPanelOpen, actions: { selectCluster } } = this.props

    // show `panel` when cluster selected
    const renderPanel = isPanelOpen ? (
      <ReactCSSTransitionGroup transitionName='slide-right' transitionAppear={true} transitionAppearTimeout={500} transitionEnterTimeout={500} transitionLeaveTimeout={300} >
        <Components.panel selectedCluster={selectedCluster} />
      </ReactCSSTransitionGroup>
    ) : null

    return (
      <div className={ css(styles.base) }>

        <Components.map clusters={clusters} isPanelOpen={isPanelOpen} selectCluster={selectCluster} />

        { renderPanel }

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
    selectedCluster: selectors.getSelectedCluster,
    isPanelOpen: selectors.getIsPanelOpen,
  }),
  dispatch => ({
    actions: bindActionCreators(actions, dispatch)
  })
)(Admin)
