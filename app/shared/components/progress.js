import React from 'react'
import { StyleSheet, css } from 'aphrodite'
import { colors } from 'styles/settings'

const Progress = () => (
  <div className={ css(styles.base) }></div>
)

const spin = {
  'from': {
    transform: 'rotate(0)',
  },
  'to': {
    transform: 'rotate(360deg)',
  }
}

const styles = StyleSheet.create({
  base: {
    width: '100%',
    zIndex: 1,
    position: 'fixed',
    top: 0,
    left: 0,
    background: colors.light,
    opacity: 0.9,
    ':after': {
      content: '""',
      width: 0,
      height: 0,
      borderStyle: 'solid',
      borderWidth: '0 10px 17.3px 10px',
      borderColor: `transparent transparent ${colors.accent} transparent`,
      position: 'absolute',
      bottom: '20px',
      left: '20px',
      transformOrigin: 'center center',
      animationName: spin,
      animationDuration: '0.5s',
      animationIterationCount: 'infinite',
    },
  },
})

export default Progress
