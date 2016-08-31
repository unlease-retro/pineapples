import React from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import Select from 'react-select'
import { media } from 'styles/settings'

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
    width: '100%',
    position: 'absolute',
    top: '60px',
    [media.aboveSmall]: {
      width: '200px',
      top: '10px',
      right: '230px',
    },
  }
})

export default Filter
