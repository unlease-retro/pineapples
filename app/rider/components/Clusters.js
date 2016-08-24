/**
 * Created by BigaMasta on 8/23/16.
 */
import React from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import Cluster from './Cluster'

export class Clusters extends React.Component {

  render() {

    const { clusters } = this.props
    const { selectCluster } = this.props.actions
    const clusterActions = { selectCluster }

    return (
      <div>
        <h1 className={ css(styles.h1) }>Your clusters</h1>
        <ol className={ css(styles.ol) }>
          {clusters.map(cluster => <Cluster key={cluster.name} cluster={cluster} actions={clusterActions} />)}
        </ol>
      </div>
    )

  }

  _renderCluster(cluster) {

    const { actions: { selectCluster } } = this.props

    return <li key={cluster.name} className={ css(styles.li) } onClick={() => selectCluster(cluster)}>
      <a>{cluster.name}</a>
    </li>

  }

}

const styles = StyleSheet.create({
  li: {
    fontSize: '30px',
    border: '1px solid #ccc',
    backgroundColor: '#FEDC81'
  },
  ol: {
    margin: 0,
    padding: 0,
    textAlign: 'center'
  },
  h1: {
    fontSize: '40px',
    textAlign: 'center',
    backgroundColor: '#6FC9BC',
    margin: 0
  }
})

export default Clusters
