import React, { PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import { colors } from 'styles/settings'
import { vAlign } from 'styles/mixins'

const TOGGLE_SIZE = '20px'

const Toggle = ({ label, active, disabled, callback }) => {

  const { styles } = Toggle
  const className = css(styles.base, active && styles.active, disabled && styles.disabled)

  let _input

  return (
    <label className={className}>
      <input ref={ r => _input = r } type='checkbox' hidden defaultChecked={active} onChange={ () => callback(_input.checked) } />
      { label }
    </label>
  )

}

Toggle.styles = StyleSheet.create({
  base: {
    width: '100%',
    marginBottom: '20px',
    lineHeight: 1,
    display: 'block',
    position: 'relative',
    cursor: 'pointer',
    userSelect: 'none',
    '-webkitTapHighlightColor': 'transparent',
    ':before': {
      content: '""',
      width: '36px',
      height: '14px',
      borderRadius: '30px',
      background: colors.dkgrey,
      display: 'inline-block',
      position: 'absolute',
      right: '0',
      transition: '0.2s',
    },
    ':after': Object.assign({}, vAlign, {
      content: '""',
      width: TOGGLE_SIZE,
      height: TOGGLE_SIZE,
      borderRadius: '50%',
      background: colors.ltgrey,
      boxShadow: 'rgba(0, 0, 0, 0.2) 0px 1px 6px, rgba(0, 0, 0, 0.2) 0px 1px 4px',
      display: 'inline-block',
      right: TOGGLE_SIZE,
      transition: '0.2s',
    }),
  },
  active: {
    ':before': {
      background: colors.accent,
      opacity: 0.5,
    },
    ':after': {
      background: colors.accent,
      transform: `translate3d(${TOGGLE_SIZE}, -50%, 0)`,
    },
  },
  disabled: {
    color: colors.dkgrey,
    pointerEvents: 'none',
    ':before': {
      background: colors.dkgrey,
    },
    ':after': {
      background: colors.dkgrey,
    },
  },
})

Toggle.propTypes = {
  label: PropTypes.string,
  active: PropTypes.bool.isRequired,
  callback: PropTypes.func.isRequired
}

Toggle.defaultProps = {
  active: false
}

export default Toggle
