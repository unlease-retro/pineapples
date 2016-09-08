/**
 * Created by BigaMasta on 8/23/16.
 */
import React from 'react'
import Pineapples from './Pineapples'
import { button as Button, position as Position, title as Title, wrap as Wrap, link as Link, chip as Chip, row as Row } from '../../shared/components'

const Delivery = ({ selectedCluster, viewAllButton, undeliveredReasonOptions, clusterDistance, clusterDuration, clusterDepotName, actions: { unselectCluster, changeStatus, changeReason, submitChangedReason, startClusterDelivery, changeReasonComment } }) => {

  const renderViewAllButton = viewAllButton ? (
    <Position right='20px'>
      <Button onClick={ () => unselectCluster() } label='close' theme='icon' />
    </Position>
  ) : null

  const clusterGoogleMapsLink = selectedCluster.get('googleMapsLink')
  const renderSelectedCluster = selectedCluster && selectedCluster.get('startedAt') ? <Pineapples selectedCluster={selectedCluster} undeliveredReasonOptions={undeliveredReasonOptions} actions={{ changeStatus, changeReason, submitChangedReason, changeReasonComment }} /> : null
  const renderStartButton = selectedCluster && !selectedCluster.get('startedAt') ? <Button label='Start' onClick={ () => startClusterDelivery(selectedCluster.get('_id')) } theme='accent' /> : null
  const renderMapButton = selectedCluster && selectedCluster.get('startedAt') ? <Link label='Map' href={clusterGoogleMapsLink} /> : null

  return (
    <Wrap fullscreen>

      { renderViewAllButton }

      <Title content={selectedCluster.get('name')} />

      <Row>
        <Chip label={`${clusterDistance}km`} icon='directions' iconTheme='light' />
        <Chip label={`${clusterDuration}`} icon='directions_bike' iconTheme='light' />
        <Chip label={clusterDepotName} icon='store' iconTheme='light' />
      </Row>
      { renderStartButton }

      { renderMapButton }

      { renderSelectedCluster }

    </Wrap>
  )

}

export default Delivery
