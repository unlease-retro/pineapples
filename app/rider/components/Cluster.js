/**
 * Created by BigaMasta on 8/24/16.
 */
import React from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'

const Cluster = ({ cluster, clusterIndex, actions: { selectCluster } }) => {

  return (
    <li className={ css(styles.li) } onClick={() => selectCluster(clusterIndex)}>
      <a>{cluster.name}</a>
    </li>
  )

}

const styles = StyleSheet.create({
  li: {
    fontSize: '30px',
    border: '1px solid #ccc',
    backgroundColor: '#FEDC81'
  },
})

export default Cluster
