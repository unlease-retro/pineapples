/**
 * Created by BigaMasta on 9/14/16.
 */
import React from 'react'

import FilterBuilder from './FilterBuilder'
import FiltersApplied from './FiltersApplied'
import { button as Button } from '../../shared/components'

class filter extends React.Component {

  render() {

    const { setFilterShown, filterShown, filterableOptions, dispatch, selectedFilter, picker, onFilterApplied, filtersApplied } = this.props

    const renderAddFilterButton = !filterShown ? <Button
      label='Add filter'
      onClick={() => setFilterShown(!filterShown)}
      theme='accent'
    /> : null

    const renderFilterBuilder = filterShown ? <FilterBuilder filterableOptions={filterableOptions} dispatch={dispatch} selectedFilter={selectedFilter} picker={picker} onFilterApplied={onFilterApplied} /> : null

    return (
      <div>
        <FiltersApplied filtersApplied={filtersApplied}/>
        {renderAddFilterButton}
        {renderFilterBuilder}
      </div>
    )

  }

}

export default filter