import React from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import { colors } from 'styles/settings'

const TextInput = ({ placeholder }) => (
  <input className={ css(styles.input) } type='text' placeholder={placeholder} />
)

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

export default TextInput
