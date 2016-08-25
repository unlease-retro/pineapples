import React, { PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import { colors } from 'styles/settings'

const Toggle = ({label, active, callback}) => {

  const { styles } = Toggle
  const className = css(styles.base, active && styles.active)

  return (
    <div className={className}>
      <label>
        <input ref={ r => Toggle._input = r } type='checkbox' hidden defaultChecked={active} onChange={ () => callback(Toggle._input.checked) } />
        { label }
      </label>
    </div>
  )

}

Toggle.styles = StyleSheet.create({
  base: {
    color: colors.error
  },
  active: {
    color: colors.accent
  }
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
