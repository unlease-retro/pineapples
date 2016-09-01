/**
 * Created by BigaMasta on 8/23/16.
 */
import React from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import Cluster from './Cluster'

const Clusters = ({ clusters, actions: { selectCluster } }) => {

  const clusterActions = { selectCluster }

  return (
    <div>
      <h1 className={ css(styles.h1) }>Your clusters</h1>
      <ol className={ css(styles.ol) }>
        {clusters.map((cluster, index) => <Cluster key={cluster.name} cluster={cluster} actions={clusterActions} clusterIndex={index} />)}
      </ol>
    </div>
  )

}

const styles = StyleSheet.create({
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
