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
    position: 'absolute',
    top: 0,
    right: '220px',
    width: '200px'
  }
})

export default Filter
