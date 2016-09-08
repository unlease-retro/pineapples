import React from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import { colors } from 'styles/settings'

const Divider = () => (
  <hr className={ css(styles.divider) } />
)

const styles = StyleSheet.create({
  divider: {
    width: '100%',
    height: '2px',
    border: '0',
    margin: '0 0 40px',
    padding: '0',
    backgroundColor: colors.ltgrey,
  },
})

export default Divider
