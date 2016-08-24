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
          <span>
            <a className={ css(styles.printButton) } onClick={this.props.actions.unselectCluster}>View Clusters</a>
            <h1 className={ css(styles.h1) }>{selectedCluster.name} delivery</h1>
            <a className={ css(styles.printButton) }>Print</a>
          </span>
        </div>
        {selectedCluster ? <Pineapples selectedCluster={selectedCluster} actions={{ changeStatus: this.props.actions.changeStatus}} /> : null}
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
    lineHeight: '45px'
  },
  printButton: {
    backgroundColor: '#FEC581',
    borderRadius: '5px',
    padding: '10px',
    fontSize: '16px'
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
    margin: 0
  }
})
