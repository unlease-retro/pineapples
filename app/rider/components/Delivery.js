/**
 * Created by BigaMasta on 8/23/16.
 */
import React from 'react'
import Pineapples from './Pineapples'
import { button as Button, position as Position, title as Title, wrap as Wrap, link as Link } from '../../shared/components'
import { constructGoogleMapsLinkFor } from '../../shared/util/googleMapsLinkBuilder'

const Delivery = ({ selectedCluster, viewAllButton, undeliveredReasonOptions, actions: { unselectCluster, changeStatus, changeReason, submitChangedReason, startClusterDelivery, changeReasonComment } }) => {

  const renderViewAllButton = viewAllButton ? (
    <Position right='20px'>
      <Button onClick={ () => unselectCluster() } label='close' theme='icon' />
    </Position>
  ) : null


  // TODO use optimized route
  const clusterGoogleMapsLink = constructGoogleMapsLinkFor(selectedCluster)
  const renderSelectedCluster = selectedCluster && selectedCluster.startedAt ? <Pineapples selectedCluster={selectedCluster} undeliveredReasonOptions={undeliveredReasonOptions} actions={{ changeStatus, changeReason, submitChangedReason, changeReasonComment }} /> : null
  const renderStartButton = selectedCluster && !selectedCluster.startedAt ? <Button label='Start' onClick={ () => startClusterDelivery(selectedCluster) } theme='accent' /> : null
  const renderMapButton = selectedCluster && selectedCluster.startedAt ? <Link label='Map' href={clusterGoogleMapsLink} /> : null

  return (
    <Wrap fullscreen>

      { renderViewAllButton }

      <Title content={selectedCluster.name} />

      { renderStartButton }

      { renderMapButton }

      { renderSelectedCluster }

    </Wrap>
  )

}

export default Delivery
