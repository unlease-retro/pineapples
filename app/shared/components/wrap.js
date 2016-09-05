import React from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import { colors, dimensions } from 'styles/settings'

const Wrap = ({ children, fullscreen }) => (
  <div className={ css(styles.wrap, fullscreen && styles.fullscreen) }>{ children }</div>
)

const styles = StyleSheet.create({
  wrap: {
    width: dimensions.contentWidth,
    maxWidth: dimensions.contentMaxWidth,
    margin: '0 auto',
    padding: `${dimensions.gutterVertical} ${dimensions.gutterSide}`,
  },
  fullscreen: {
    width: '100%',
    maxWidth: 'initial',
    height: '100%',
    position: 'absolute',
    top: '0',
    left: '0',
    background: colors.light,
  },
})

export default Wrap
