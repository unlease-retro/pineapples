import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import shallowCompare from 'react-addons-shallow-compare'

import { selectors } from '../../user'
import Unauthorised from './Unauthorised'

export const Auth = (Component, roles) => {

  class Enhancer extends React.Component {

    shouldComponentUpdate(nextProps, nextState) {

      return shallowCompare(this, nextProps, nextState)

    }

    render() {

      const { role } = this.props

      const renderComponent = roles.indexOf(role) > -1 ? <Component {...this.props} /> : <Unauthorised />

      return renderComponent

    }

  }

  return connect( createStructuredSelector({
    role: selectors.getRole,
  }) )(Enhancer)

}
