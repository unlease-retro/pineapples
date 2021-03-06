import React, { Children } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import { media } from 'styles/settings'

const Grid = ({ children, staticCells, nonPaddedCells, leftAlign }) => (
  <div className={ css(styles.grid) }>
    { Children.map( children, child => child ? <div className={ css(styles.cell, staticCells && styles.staticCell, nonPaddedCells && styles.nonPaddedCell, leftAlign && styles.leftAlign) }>{ child }</div> : null ) }
  </div>
)

const styles = StyleSheet.create({
  grid: {
    display: 'flex',
    flexWrap: 'wrap',
    marginBottom: '20px',
  },
  cell: {
    flex: '0 0 100%',
    textAlign: 'center',
    padding: '20px 0',
    [media.aboveSmall]: {
      flex: 1,
      padding: '0 10px',
      ':first-of-type': {
        paddingLeft: 0,
      },
      ':last-of-type': {
        paddingRight: 0,
      },
    },
  },
  leftAlign: {
    textAlign: 'left',
  },
  staticCell: {
    flex: 1,
  },
  nonPaddedCell: {
    padding: 0,
  },
})

export default Grid
