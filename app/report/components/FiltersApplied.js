/**
 * Created by BigaMasta on 9/15/16.
 */
import React from 'react'
import { chip as Chip } from '../../shared/components'

class FiltersApplied extends React.Component {

  render() {

    const { filtersApplied } = this.props

    const renderFiltersApplied = []
    for (let filter in filtersApplied) {

      renderFiltersApplied.push(
        <Chip key={filter} label={`${filter}: ${filtersApplied[filter]}`}/>
      )

    }

    return (
      <div>
        Filters Applied:&nbsp;
        {renderFiltersApplied}
      </div>
    )

  }

}

export default FiltersApplied