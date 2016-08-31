import React, { PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite'
import { colors, media } from 'styles/settings'

const Snackbar = ({ message }) => (
  <div className={ css(styles.base) }>{ message }</div>
)

const styles = StyleSheet.create({
  base: {
    width: '100%',
    height: 'auto',
    padding: '20px',
    zIndex: 1,
    position: 'fixed',
    left: '50%',
    bottom: 0,
    transform: 'translateX(-50%)',
    fontSize: '14px',
    color: colors.light,
    background: colors.dark,
    opacity: 0.8,
    [media.aboveSmall]: {
      width: '400px',
    }
  },
})

Snackbar.propTypes = {
  message: PropTypes.string.isRequired
}

Snackbar.defaultProps = {
  message: ''
}

export default Snackbar
