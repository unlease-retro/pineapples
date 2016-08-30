import React, { PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import Select from 'react-select'

const Riders = ({ riders, selectedRider, selectRider }) => {

  return (
    <div>

      <label htmlFor='riders' className={ css(styles.label) }>Assign to a rider:</label>

      <Select
        name='riders'
        placeholder='Select rider'
        value={selectedRider}
        options={riders}
        autoBlur={true}
        clearable={false}
        searchable={true}
        onChange={ ({ value }) => selectRider(value) }
      />

    </div>
  )

}

const styles = StyleSheet.create({
  label: {
    marginBottom: '10px',
    display: 'block',
  }
})

Riders.propTypes = {
  riders: PropTypes.array.isRequired
}

export default Riders
