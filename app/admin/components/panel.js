import React, { PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import { media } from 'styles/settings'

import * as Components from './'
import * as SharedComponents from '../../shared/components'

const Panel = ({ clusterIndex, clusterId, clusterName, clusterPosition, clusterDepotName, clusterDepotPosition, clusterRider, clusterDeliverable, clusterTotalPineapples, riders, totalClusters, selectCluster, updateCluster, setMapCenter }) => {

  const onNextClick = () => {

    const nextIndex = clusterIndex >= totalClusters - 1 ? 0 : clusterIndex + 1

    selectCluster(nextIndex)

  }

  return (
    <div className={ css(styles.base) }>

      {/* TODO - convert to shared button component */}
      <div onClick={ () => selectCluster() }>
        Close
      </div>

      {/* TODO - create component */}
      <div onClick={ () => setMapCenter(clusterPosition) }>
        { clusterName }
      </div>

      {/* TODO - create component */}
      <div>
        { clusterTotalPineapples } Pineapples
      </div>

      {/* TODO - create component */}
      <div onClick={ () => setMapCenter(clusterDepotPosition) }>
        Depot: { clusterDepotName }
      </div>

      <Components.riders riders={riders} selectedRider={clusterRider} selectRider={ rider => updateCluster(clusterId, { rider }) } />

      <SharedComponents.toggle label={'Deliverable?'} active={clusterDeliverable} callback={ deliverable => updateCluster(clusterId, { deliverable }) } />

      {/* TODO - convert to shared button component */}
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
    width: '100%',
    height: '100%',
    background: 'white',
    [media.aboveSmall]: {
      width: '35%',
    }
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
