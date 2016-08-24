import React, { PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'

const Toggle = ({label, active, callback}) => {

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

const styles = StyleSheet.create({
  base: {
    color: 'indianred'
  },
  active: {
    color: '#bada55'
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
