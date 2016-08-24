import React, { PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import Select from 'react-select'

const Riders = ({ riders, selectedRider, selectRider }) => {

  return (
    <div className={ css(styles.base) }>

      <label htmlFor='riders'>Assign to a rider:</label>

      <Select
        name='riders'
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
  base: {

  }
})

Riders.propTypes = {
  riders: PropTypes.array.isRequired
}

export default Riders
