import React, { Component } from 'react'
import * as Components from '../components'

export default class App extends Component {

  render() {

    return (
      <div>

        <Components.header />

        {this.props.children}

      </div>
    )

  }

}
