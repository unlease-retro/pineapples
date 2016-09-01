import React from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import { colors } from 'styles/settings'

const Input = props => ( <input className={ css(styles.input) } {...props} /> )

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: '100%',
    border: 'none',
    borderBottom: `1px solid ${colors.dkgrey}`,
    padding: '0 0 4px',
    lineHeight: '24px',
    outline: 'none',
    position: 'relative',
    transition: '0.2s',
    ':focus': {
      borderBottomColor: colors.accent,
    },
  },
})

Input.defaultProps = {
  type: 'text',
}

export default Input
