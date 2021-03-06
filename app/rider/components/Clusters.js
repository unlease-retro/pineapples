/**
 * Created by BigaMasta on 8/23/16.
 */
import React from 'react'
import Cluster from './Cluster'
import { title as Title } from '../../shared/components'

const Clusters = ({ clusters, actions: { selectCluster } }) => {

  const clusterActions = { selectCluster }

  if (clusters.size === 0)
    return <Title content='No clusters assigned. Try again later.' />

  const renderClusters = clusters.map( (cluster, index) => ( <Cluster key={cluster.get('name')} cluster={cluster} actions={clusterActions} clusterIndex={index} /> ))

  return (
    <div>

      <Title content='Your clusters' />

      { renderClusters }

    </div>
  )

}

export default Clusters
