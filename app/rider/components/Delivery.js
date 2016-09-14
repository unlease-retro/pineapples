/**
 * Created by BigaMasta on 8/23/16.
 */
import React from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import Pineapples from './Pineapples'
import { button as Button, position as Position, wrap as Wrap, link as Link, chip as Chip, row as Row } from '../../shared/components'
import { colors } from 'styles/settings'

const Delivery = ({ selectedCluster, viewAllButton, undeliveredReasonOptions, clusterDepotName, actions: { unselectCluster, changeStatus, changeReason, submitChangedReason, startClusterDelivery, changeReasonComment } }) => {

  const renderViewAllButton = viewAllButton ? (
    <Position right='20px'>
      <Button onClick={ () => unselectCluster() } label='close' theme='icon' />
    </Position>
  ) : null

  const clusterGoogleMapsLink = selectedCluster.get('googleMapsLink')
  const renderSelectedCluster = selectedCluster && selectedCluster.get('startedAt') ? <Pineapples selectedCluster={selectedCluster} undeliveredReasonOptions={undeliveredReasonOptions} actions={{ changeStatus, changeReason, submitChangedReason, changeReasonComment }} /> : null
  const renderStartButton = selectedCluster && !selectedCluster.get('startedAt') ? <Button label='Start' onClick={ () => startClusterDelivery(selectedCluster.get('_id')) } theme='accent' /> : null
  const renderMapButton = selectedCluster && selectedCluster.get('startedAt') ? <Link label='View Full Map' href={clusterGoogleMapsLink} /> : null

  return (
    <Wrap fullscreen>

      { renderViewAllButton }

      <div className={ css(styles.name) }>{ selectedCluster.get('name') }</div>

      <Row>
        <Chip label={clusterDepotName} icon='store' iconTheme='light' />
      </Row>
      { renderStartButton }

      { renderMapButton }

      { renderSelectedCluster }

    </Wrap>
  )

}

const styles = StyleSheet.create({
  name: {
    fontSize: '20px',
    marginBottom: '20px',
    paddingBottom: '10px',
    borderBottom: `4px solid ${colors.pineapple}`,
  },
})

export default Delivery
