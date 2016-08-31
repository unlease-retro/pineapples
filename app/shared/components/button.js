/**
 * Created by BigaMasta on 8/25/16.
 */
import React, { PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import { colors } from 'styles/settings'

const Button = ({ label, onClick, theme, disabled }) => {

  const { styles } = Button

  const className = css(styles.base, theme && styles[theme], disabled && styles.disabled)

  return (
    <button className={className} onClick={onClick}>
      <span className={ css(styles.label) }>{ label }</span>
    </button>
  )

}

Button.styles = StyleSheet.create({
  base: {
    height: '36px',
    display: 'inline-block',
    padding: 0,
    border: 0,
    borderRadius: '2px',
    boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 6px, rgba(0, 0, 0, 0.1) 0px 1px 4px',
    lineHeight: '36px',
    fontSize: '14px',
    fontWeight: 500,
    color: colors.dark,
    backgroundColor: colors.light,
    cursor: 'pointer',
    outline: 0,
    transition: '0.2s',
    ':hover': {
      backgroundColor: colors.ltgrey,
    },
  },
  icon: {
    boxShadow: 'none',
    fontSize: '30px',
    ':hover': {
      backgroundColor: 'transparent',
    },
  },
  primary: {
    color: colors.light,
    backgroundColor: colors.primary,
    fontWeight: 800,
    ':hover': {
      backgroundColor: colors.secondary,
    },
  },
  disabled: {
    color: colors.light,
    backgroundColor: colors.ltgrey,
    pointerEvents: 'none',
  },
  label: {
    padding: '0 16px',
    lineHeight: '36px',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
})

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  theme: PropTypes.string,
  disabled: PropTypes.bool,
}

export default Button
