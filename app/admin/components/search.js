import React, { PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import Select from 'react-select'

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
        onChange={ cluster => setSearchCluster(cluster && cluster.value || cluster) }
      />

    </div>
  )

}

const styles = StyleSheet.create({
  base: {
    width: '200px',
    position: 'absolute',
    top: '10px',
    right: '10px',
  }
})

Search.propTypes = {
  clusters: PropTypes.array.isRequired,
  searchCluster: PropTypes.string,
  setSearchCluster: PropTypes.func.isRequired
}

export default Search
