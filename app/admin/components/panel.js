import React, { PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'

const Panel = ({ cluster, setMapCenter }) => {

  // TODO - close button selectCluster()

  // TODO - pass as props w/selectors
  const { depot, name, items } = cluster
  const { location: { coordinates }, name: depotName } = depot
  const depotPosition = { lat: coordinates[1], lng: coordinates[0] }
  const pineapplesTotal = items.length

  return (
    <div className={ css(styles.base) }>

      <div>
        { name }
      </div>

      <div>
        { pineapplesTotal } Pineapples
      </div>

      <div onClick={ () => setMapCenter(depotPosition) }>
        Depot: { depotName }
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
