/**
 * Created by BigaMasta on 9/15/16.
 */
import React from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'

import { closableChip as ClosableChip } from '../../shared/components'

class FiltersApplied extends React.Component {

  render() {

    const { styles } = FiltersApplied

    const { filtersApplied, onFilterRemove } = this.props

    const renderFiltersApplied = []
    for (let filter in filtersApplied) {

      renderFiltersApplied.push(
        <ClosableChip key={filter} label={`${filter}: ${filtersApplied[filter]}`} onClose={onFilterRemove} onCloseData={filter}/>
      )

    }

    return (
      <div className={ css(styles.isFormComponent) }>
        {renderFiltersApplied}
      </div>
    )

  }

}

FiltersApplied.styles = StyleSheet.create({
  isFormComponent: {
    marginBottom: '20px'
  }
})

export default FiltersApplied