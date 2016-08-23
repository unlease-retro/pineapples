/**
 * Created by BigaMasta on 8/23/16.
 */
import React from 'react'

export class Clusters extends React.Component {

  render() {

    const { clusters } = this.props

    return (
      <div>
        <h1>Your clusters</h1>
        <ul>
          {clusters.map(cluster => this._renderCluster(cluster))}
        </ul>
      </div>
    )

  }

  _renderCluster(cluster) {

    return <li key={cluster.name}>
      <a>{cluster.name}</a>
    </li>

  }

}

export default Clusters
