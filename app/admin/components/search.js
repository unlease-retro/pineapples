import React, { PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import Select from 'react-select'
import { media } from 'styles/settings'

const Search = ({ clusters, searchCluster, setSearchCluster }) => {

  return (
    <div className={ css(styles.base) }>

      <Select
        name='clusters'
        placeholder='Search for a cluster'
        value={searchCluster}
        options={clusters}
        autoBlur={true}
        clearable={true}
        searchable={true}
        onChange={ cluster => setSearchCluster(cluster && cluster.value || cluster, cluster && cluster.position || {}) }
      />

    </div>
  )

}

const styles = StyleSheet.create({
  base: {
    width: '100%',
    position: 'absolute',
    top: '10px',
    [media.aboveSmall]: {
      width: '200px',
      right: '10px',
    },
  }
})

Search.propTypes = {
  clusters: PropTypes.array.isRequired,
  searchCluster: PropTypes.string,
  setSearchCluster: PropTypes.func.isRequired
}

export default Search
