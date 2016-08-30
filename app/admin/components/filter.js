import React from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import Select from 'react-select'

const Filter = ({ options, filterCluster, setFilterCluster }) => {

  return (
    <div className={ css(styles.base) }>

      <Select
        name='filter'
        placeholder='Filter clusters'
        value={filterCluster}
        options={options}
        autoBlur={true}
        clearable={true}
        searchable={true}
        onChange={ option => setFilterCluster(option && option.value || option) }
      />

    </div>
  )

}

const styles = StyleSheet.create({
  base: {
    width: '200px',
    position: 'absolute',
    top: '10px',
    right: '230px',
  }
})

export default Filter
