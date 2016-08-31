import React from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import { dimensions } from 'styles/settings'

const Row = ({ children }) => (
  <div className={ css(styles.base) }>{ children }</div>
)

const styles = StyleSheet.create({
  base: {
    width: '100%',
    marginBottom: `${dimensions.gutterVertical}`,
  },
})

export default Row
