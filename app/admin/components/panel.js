import React, { PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'

const Panel = ({ selectedCluster }) => {

  // TODO - close button selectCluster()

  return (
    <div className={ css(styles.base) }>
      { selectedCluster.name }
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
  selectedCluster: PropTypes.object.isRequired
}

export default Panel
