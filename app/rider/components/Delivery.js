/**
 * Created by BigaMasta on 8/23/16.
 */
import React from 'react'
import Pineapples from './Pineapples'
import { StyleSheet, css } from 'aphrodite/no-important'
import { button as Button } from '../../shared/components'

const Delivery = ({ selectedCluster, viewAllButton, undeliveredReasonOptions, actions: { unselectCluster, changeStatus, changeReason, submitChangedReason, startClusterDelivery, changeReasonComment } }) => {

  const renderViewAllButton = viewAllButton ? <Button label='View Clusters' onClick={unselectCluster}/> : null
  const renderSelectedCluster = selectedCluster && selectedCluster.startedAt ? <Pineapples selectedCluster={selectedCluster} undeliveredReasonOptions={undeliveredReasonOptions} actions={{ changeStatus, changeReason, submitChangedReason, changeReasonComment }} /> : null
  const renderStartButton = !selectedCluster.startedAt ? <a className={ css(styles.headerButton) } onClick={() => startClusterDelivery(selectedCluster)}>Start</a> : null

  return (
    <div className={ css(styles.greenBackground, styles.absolutePosition) }>
      <div className={ css(styles.header) }>
        <h1 className={ css(styles.h1) }>Cluster {selectedCluster.name}</h1>
        {/* commented out for showcase <Button label='Print' /> */}
        {renderStartButton}
        {renderViewAllButton}
      </div>
      {renderSelectedCluster}
    </div>
  )

}

const styles = StyleSheet.create({
  greenBackground: {
    backgroundColor: '#6FC9BC'
  },
  header: {
    backgroundColor: '#6FC9BC',
    textAlign: 'center',
    paddingBottom: '5px',
    lineHeight: '45px',
    display: 'inline'
  },
  headerButton: {
    backgroundColor: '#FEC581',
    borderRadius: '5px',
    padding: '10px',
    fontSize: '16px',
    margin: '10px',
    cursor: 'pointer'
  },
  h1: {
    fontSize: '40px',
    margin: '0 10px',
    display: 'inline',
    textAlign: 'center'
  },
  absolutePosition: {
    position: 'absolute',
    top: 0,
    left: 0
  }
})

export default Delivery
