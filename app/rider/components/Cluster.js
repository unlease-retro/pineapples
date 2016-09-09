/**
 * Created by BigaMasta on 8/24/16.
 */
import React from 'react'
// import { StyleSheet, css } from 'aphrodite/no-important'
import { card as Card, icon as Icon } from '../../shared/components'

const Cluster = ({ cluster, clusterIndex, actions: { selectCluster } }) => {

  const renderDoneTick = cluster.get('finished') ? <Icon name='check_circle' theme='accent'/> : null
  const renderWarningTick = cluster.get('finished') && cluster.get('hasUndeliveredReasons') ? <Icon name='warning' theme='pineapple'/> : null

  return (
    <Card onClick={() => selectCluster(clusterIndex)}>
      <div>{ cluster.get('name') } {renderDoneTick} {renderWarningTick}</div>
    </Card>
  )

}

export default Cluster
