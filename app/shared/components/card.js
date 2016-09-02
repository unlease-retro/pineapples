import React from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import { colors } from 'styles/settings'

const Card = ({ children, disabled, onClick }) => (
  <div className={ css(styles.card, disabled && styles.disabled) } onClick={onClick}>{ children }</div>
)

const styles = StyleSheet.create({
  card: {
    width: '100%',
    margin: '20px 0',
    padding: '20px',
    boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 6px, rgba(0, 0, 0, 0.1) 0px 1px 4px',
    backgroundColor: colors.light,
  },
  disabled: {
    backgroundColor: colors.ltgrey,
  },
})

export default Card
