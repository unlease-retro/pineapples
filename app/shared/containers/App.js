import React, { Component } from 'react'
import * as Components from '../components'

export default class App extends Component {

  componentWillMount() {

    // fetch user
    // TODO user action

  }

  render() {

    return (
      <div>

        <Components.header />

        {this.props.children}

      </div>
    )

  }

}
