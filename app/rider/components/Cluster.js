/**
 * Created by BigaMasta on 8/24/16.
 */
import React from 'react'
// import { StyleSheet, css } from 'aphrodite/no-important'
import { card as Card, icon as Icon } from '../../shared/components'

const Cluster = ({ cluster, clusterIndex, actions: { selectCluster } }) => {

  const renderDoneTick = cluster.get('finishedAt') ? <Icon name='check_circle' theme='accent'/> : null

  return (
    <Card onClick={() => selectCluster(clusterIndex)}>
      <div>{ cluster.get('name') } {renderDoneTick}</div>
    </Card>
  )

}

export default Cluster
