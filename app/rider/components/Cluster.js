/**
 * Created by BigaMasta on 8/24/16.
 */
import React from 'react'
// import { StyleSheet, css } from 'aphrodite/no-important'
import { card as Card } from '../../shared/components'

const Cluster = ({ cluster, clusterIndex, actions: { selectCluster } }) => {

  return (
    <Card onClick={() => selectCluster(clusterIndex)}>
      <div>{ cluster.get('name') }</div>
    </Card>
  )

}

// const styles = StyleSheet.create({
//   li: {
//     fontSize: '30px',
//     border: '1px solid #ccc',
//     backgroundColor: '#FEDC81'
//   },
// })

export default Cluster
