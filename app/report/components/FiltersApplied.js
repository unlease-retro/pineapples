/**
 * Created by BigaMasta on 9/15/16.
 */
import React from 'react'
import { closableChip as ClosableChip } from '../../shared/components'

class FiltersApplied extends React.Component {

  render() {

    const { filtersApplied, onFilterRemove } = this.props

    const renderFiltersApplied = []
    for (let filter in filtersApplied) {

      renderFiltersApplied.push(
        <ClosableChip key={filter} label={`${filter}: ${filtersApplied[filter]}`} onClose={onFilterRemove} onCloseData={filter}/>
      )

    }

    const renderTitle = renderFiltersApplied.length > 0 ? <span>Filters Applied</span> : null

    return (
      <div>
        {renderTitle}
        {renderFiltersApplied}
      </div>
    )

  }

}

export default FiltersApplied