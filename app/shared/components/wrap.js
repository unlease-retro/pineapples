import React from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import { dimensions } from 'styles/settings'

const Wrap = ({ children }) => (
  <div className={ css(styles.wrap) }>{ children }</div>
)

const styles = StyleSheet.create({
  wrap: {
    width: dimensions.contentWidth,
    maxWidth: dimensions.contentMaxWidth,
    margin: '0 auto',
    padding: `${dimensions.gutterVertical} ${dimensions.gutterSide}`,
  },
})

export default Wrap
