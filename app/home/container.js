import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectors } from '../user'
import * as Admin from '../admin'
import * as Rider from '../rider'

export class Home extends Component {

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
