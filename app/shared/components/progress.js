import React from 'react'
import { StyleSheet, css } from 'aphrodite'
import { colors } from 'styles/settings'

const Progress = ({ requesting }) => (
  <div className={ css(styles.base, requesting && styles.requesting) }></div>
)

const pulse = {
  'from': {
    opacity: 1,
  },
  'to': {
    opacity: 0.5,
  }
}

const styles = StyleSheet.create({
  base: {
    width: '100%',
    height: '5px',
    borderRadius: 0,
    zIndex: 1,
    position: 'fixed',
    top: 0,
    background: colors.primary,
  },
  requesting: {
    background: colors.accent,
    animationName: pulse,
    animationDuration: '0.75s',
    animationIterationCount: 'infinite',
  },
})

export default Progress
