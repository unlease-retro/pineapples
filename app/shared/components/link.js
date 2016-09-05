/**
 * Created by BigaMasta on 9/5/16.
 */
import React, { PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import { colors } from 'styles/settings'
import { adjustColour } from '../util'

import { icon as Icon } from './'

const Link = ({ label, href, theme, disabled }) => {

  const { styles } = Link

  const className = css(styles.base, theme && styles[theme], disabled && styles.disabled)

  const renderLabel = theme === 'icon' ? <Icon name={label} /> : <span className={ css(styles.label) }>{ label }</span>

  return (
    <a className={className} href={href}>

      { renderLabel }

    </a>
  )

}

Link.styles = StyleSheet.create({
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
    textDecoration: 'none'
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
      backgroundColor: adjustColour(colors.secondary, 10),
    },
  },
  accent: {
    color: colors.light,
    backgroundColor: colors.accent,
    ':hover': {
      backgroundColor: adjustColour(colors.accent, 20),
    }
  },
  alert: {
    color: colors.light,
    backgroundColor: colors.error,
    ':hover': {
      backgroundColor: adjustColour(colors.error, 30),
    }
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

Link.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  theme: PropTypes.string,
  disabled: PropTypes.bool,
}

export default Link
