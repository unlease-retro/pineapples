import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import shallowCompare from 'react-addons-shallow-compare'

import { selectors } from '../user'
import * as Admin from '../admin'
import * as Rider from '../rider'

export class Home extends Component {

  shouldComponentUpdate(nextProps, nextState) {

    return shallowCompare(this, nextProps, nextState)

  }

  render() {

    const { role } = this.props

    const content = role === 'RIDER' ? <Rider.Container /> : <Admin.Container />

    return (
      <div>

        { content }

      </div>
    )

  }

}

export default connect(
  createStructuredSelector({
    role: selectors.getRole,
  })
)(Home)
