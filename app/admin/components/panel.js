import React, { PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'

const Panel = ({ clusterName, clusterDepotName, clusterDepotPosition, clusterTotalPineapples, setMapCenter }) => {

  // TODO - close button selectCluster()

  return (
    <div className={ css(styles.base) }>

      <div>
        { clusterName }
      </div>

      <div>
        { clusterTotalPineapples } Pineapples
      </div>

      <div onClick={ () => setMapCenter(clusterDepotPosition) }>
        Depot: { clusterDepotName }
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
  cluster: PropTypes.object.isRequired
}

export default Panel
