/**
 * Created by BigaMasta on 8/23/16.
 */
import React from 'react'
import Pineapples from './Pineapples'
import { StyleSheet, css } from 'aphrodite/no-important'

export default class Delivery extends React.Component {

  render() {

    const { selectedCluster, viewAllButton, actions: { unselectCluster, changeStatus } } = this.props

    if (!selectedCluster)
      return <div>No Cluster selected</div>

    const renderViewAllButton = viewAllButton ? <a className={ css(styles.headerButton) } onClick={unselectCluster}>View Clusters</a> : null
    const renderSelectedCluster = selectedCluster ? <Pineapples selectedCluster={selectedCluster} actions={{ changeStatus }} /> : null

    return (
      <div className={ css(styles.greenBackground) }>
        <div className={ css(styles.header) }>
          <h1 className={ css(styles.h1) }>Cluster {selectedCluster.name}</h1>
          <a className={ css(styles.headerButton) }>Print</a>
          {renderViewAllButton}
        </div>
        {renderSelectedCluster}
      </div>
    )

  }

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
  }
})
