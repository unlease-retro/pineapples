/**
 * Created by BigaMasta on 8/23/16.
 */
import React from 'react'
import Pineapples from './Pineapples'
import { StyleSheet, css } from 'aphrodite/no-important'

export default class Delivery extends React.Component {

  render() {

    const { selectedCluster } = this.props

    if (!selectedCluster)
      return <div>No Cluster selected</div>

    return (
      <div className={ css(styles.greenBackground) }>
        <div className={ css(styles.header) }>
          <h1 className={ css(styles.h1) }>Cluster {selectedCluster.name}</h1>
          <a className={ css(styles.headerButton) }>Print</a>
          {this.props.clusters.length > 1 ? <a className={ css(styles.headerButton) } onClick={this.props.actions.unselectCluster}>View Clusters</a> : null}
        </div>
        {selectedCluster ? <Pineapples selectedCluster={selectedCluster} actions={{ changeStatus: this.props.actions.changeStatus}} /> : null}
      </div>
    )

  }

}

const styles = StyleSheet.create({
  inline: {
    display: 'inline'
  },
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
  li: {
    fontSize: '30px',
    border: '1px solid #ccc',
    backgroundColor: '#FEDC81'
  },
  ol: {
    margin: 0,
    padding: 0,
    textAlign: 'center'
  },
  h1: {
    fontSize: '40px',
    margin: '0 10px',
    display: 'inline',
    textAlign: 'center'
  }
})
