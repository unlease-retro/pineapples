/**
 * Created by BigaMasta on 8/24/16.
 */
import React from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'

class Cluster extends React.Component {

  render() {

    const { cluster, actions: { selectCluster } } = this.props

    return <li className={ css(styles.li) } onClick={() => selectCluster(cluster)}>
      <a>{cluster.name}</a>
    </li>

  }

}

const styles = StyleSheet.create({
  li: {
    fontSize: '30px',
    border: '1px solid #ccc',
    backgroundColor: '#FEDC81'
  },
})


export default Cluster