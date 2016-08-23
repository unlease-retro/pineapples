import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

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
      <div className='admin'>

        <Components.map clusters={clusters} selectCluster={selectCluster} />

        { renderPanel }

      </div>
    )

  }

}

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
