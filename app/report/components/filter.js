/**
 * Created by BigaMasta on 9/14/16.
 */
import React from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'

import FilterBuilder from './FilterBuilder'
import FiltersApplied from './FiltersApplied'
import { button as Button } from '../../shared/components'

class filter extends React.Component {

  render() {

    const { styles } = filter

    const { pineapplesCount, setFilterShown, filterShown, filterableOptions, dispatch, selectedFilter, pickedValue, onFilterApplied, filtersApplied, onFilterRemove, pickedStartValue, pickedEndValue } = this.props

    const renderAddFilterButton = !filterShown ? <Button
      label='Add filter'
      onClick={() => setFilterShown(!filterShown)}
      theme='accent'
    /> : null

    const renderFilterBuilder = filterShown ? <FilterBuilder filterableOptions={filterableOptions} dispatch={dispatch} selectedFilter={selectedFilter} pickedValue={pickedValue} onFilterApplied={onFilterApplied} pickedStartValue={pickedStartValue} pickedEndValue={pickedEndValue}/> : null
    const renderTotalCount = <div className={ css(styles.counter)} >{`Total count : ${pineapplesCount}`}</div>
    return (
      <div className={ css(styles.overall) }>
        <FiltersApplied filtersApplied={filtersApplied} onFilterRemove={onFilterRemove} />
        {renderAddFilterButton}
        {renderFilterBuilder}
        {renderTotalCount}
      </div>
    )

  }

}

filter.styles = StyleSheet.create({
  overall: {
    margin: '20px'
  },
  counter : {
    paddingTop : '10px'
  }
})

export default filter