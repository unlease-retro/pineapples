import React, { PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite'
import { colors } from 'styles/settings'

const Error = ({ message }) => (
  <div className={ css(styles.base) }>{ message }</div>
)

const styles = StyleSheet.create({
  base: {
    width: '100%',
    height: 'auto',
    padding: '20px',
    zIndex: 1,
    position: 'fixed',
    top: 0,
    color: colors.light,
    background: colors.error,
    opacity: 0.9,
  },
})

Error.propTypes = {
  loaded: PropTypes.string.isRequired
}

Error.defaultProps = {
  message: ''
}

export default Error
