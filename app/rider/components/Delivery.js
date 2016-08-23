/**
 * Created by BigaMasta on 8/23/16.
 */
import React from 'react'
import Pineapples from './Pineapples'

export default class Delivery extends React.Component {
  render() {

    const { selectedCluster, pineapples } = this.props

    return (
      <div>
        {selectedCluster ? <Pineapples selectedCluster={selectedCluster} /> : null}
      </div>
    );
  }
}