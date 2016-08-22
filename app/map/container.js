import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import * as actions from './actions'
// import * as Components from './components'
import * as selectors from './selectors'

export class Map extends Component {

  componentWillMount() {

    // console.log('Map :: componentWillMount')

  }

  render() {

    return (
      <div>
        <h1>Map</h1>
      </div>
    )

  }

}

export default connect(
  createStructuredSelector({
    map: selectors.getAll,
  }),
  dispatch => ({
    actions: bindActionCreators(actions, dispatch)
  })
)(Map)
