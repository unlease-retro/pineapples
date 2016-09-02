/**
 * Created by BigaMasta on 8/23/16.
 */
import React from 'react'
import Pineapples from './Pineapples'
import { button as Button, position as Position, title as Title, wrap as Wrap } from '../../shared/components'

const Delivery = ({ selectedCluster, viewAllButton, undeliveredReasonOptions, actions: { unselectCluster, changeStatus, changeReason, submitChangedReason, startClusterDelivery, changeReasonComment } }) => {

  const renderViewAllButton = viewAllButton ? (
    <Position right='20px'>
      <Button onClick={ () => unselectCluster() } label='close' theme='icon' />
    </Position>
  ) : null

  const renderSelectedCluster = selectedCluster && selectedCluster.startedAt ? <Pineapples selectedCluster={selectedCluster} undeliveredReasonOptions={undeliveredReasonOptions} actions={{ changeStatus, changeReason, submitChangedReason, changeReasonComment }} /> : null
  const renderStartButton = !selectedCluster.startedAt ? <Button label='Start' onClick={ () => startClusterDelivery(selectedCluster) } theme='accent' /> : null

  return (
    <Wrap fullscreen>

      { renderViewAllButton }

      <Title content={selectedCluster.name} />

      { renderStartButton }

      { renderSelectedCluster }

    </Wrap>
  )

}

export default Delivery
