import React, { PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'

const Toggle = ({label, active, callback}) => {

  const className = css(styles.base, active && styles.active)

  return (
    <div className={className}>
      <label htmlFor='toggle'>{ label }</label>
      <input ref={ r => Toggle._input = r } name='toggle' type='checkbox' defaultChecked={active} onChange={ () => callback(Toggle._input.checked) } />
    </div>
  )

}

const styles = StyleSheet.create({
  base: {

  },
  active: {

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
