import React, { PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'

import * as Components from './'
import * as SharedComponents from '../../shared/components'

const Panel = ({ clusterIndex, clusterId, clusterName, clusterPosition, clusterDepotName, clusterDepotPosition, clusterRider, clusterDeliverable, clusterTotalPineapples, riders, totalClusters, selectCluster, updateCluster, setMapCenter }) => {

  // TODO - componentize the stats, buttons etc, render as children

  const onNextClick = () => {

    const nextIndex = clusterIndex >= totalClusters - 1 ? 0 : clusterIndex + 1

    selectCluster(nextIndex)

  }

  return (
    <div className={ css(styles.base) }>

      <div onClick={ () => selectCluster() }>
        Close
      </div>

      <div onClick={ () => setMapCenter(clusterPosition) }>
        { clusterName }
      </div>

      <div>
        { clusterTotalPineapples } Pineapples
      </div>

      <div onClick={ () => setMapCenter(clusterDepotPosition) }>
        Depot: { clusterDepotName }
      </div>

      <Components.riders riders={riders} selectedRider={clusterRider} selectRider={ rider => updateCluster(clusterId, { rider }) } />

      <SharedComponents.toggle label={'Deliverable?'} active={clusterDeliverable} callback={ deliverable => updateCluster(clusterId, { deliverable }) } />

      <div onClick={onNextClick}>
        Next
      </div>

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
