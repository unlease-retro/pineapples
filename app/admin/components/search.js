import React, { PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import Select from 'react-select'
import { media } from 'styles/settings'

const Search = ({ clusters, searchCluster, setSearchCluster, selectCluster }) => {

  const handleChange = cluster => {

    // filter clusters by search result
    setSearchCluster(cluster && cluster.value || cluster)

    // also set the cluster as selected -> open's panel and centers map
    if (cluster) {

      // get index of selected cluster in clusters array
      const selectedClusterIndex = clusters.reduce( (selected, c, i) => {

        if ( c.value === cluster.value ) selected = i

        return selected

      }, null)

      selectCluster(selectedClusterIndex, cluster.position)

    }

  }

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
        onChange={handleChange}
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
