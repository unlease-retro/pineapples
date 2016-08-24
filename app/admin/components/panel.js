import React, { PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'

import * as Components from './'

const Panel = ({ clusterId, clusterName, clusterDepotName, clusterDepotPosition, clusterRider, clusterTotalPineapples, riders, selectCluster, updateCluster, setMapCenter }) => {

  // TODO - componentize the stats, buttons etc

  return (
    <div className={ css(styles.base) }>

      <div onClick={ () => selectCluster() }>
        Close
      </div>

      <div>
        { clusterName }
      </div>

      <div>
        { clusterTotalPineapples } Pineapples
      </div>

      <div onClick={ () => setMapCenter(clusterDepotPosition) }>
        Depot: { clusterDepotName }
      </div>

      <Components.riders riders={riders} selectedRider={clusterRider} selectRider={ rider => updateCluster(clusterId, { rider }) } />

    </div>
  )

}

const styles = StyleSheet.create({
  base: {
    position: 'fixed',
    top: 0,
    width: '35%',
    height: '100%',
    background: 'white'
  }
})

Panel.propTypes = {
  clusterName: PropTypes.string.isRequired,
  clusterDepotName: PropTypes.string.isRequired,
  clusterDepotPosition: PropTypes.object.isRequired,
  clusterTotalPineapples: PropTypes.number.isRequired,
  setMapCenter: PropTypes.func.isRequired,
}

export default Panel
