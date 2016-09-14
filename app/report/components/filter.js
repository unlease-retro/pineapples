/**
 * Created by BigaMasta on 9/14/16.
 */
import React from 'react'

import FilterBuilder from './FilterBuilder'
import { button as Button } from '../../shared/components'

class filter extends React.Component {

  render() {

    const { setFilterShown, filterShown } = this.props

    const renderAddFilterButton = !filterShown ? <Button
      label='Add filter'
      onClick={() => setFilterShown(!filterShown)}
      theme='accent'
    /> : null

    const renderFilterBuilder = filterShown ? <FilterBuilder /> : null

    return (
      <div>
        {renderAddFilterButton}
        {renderFilterBuilder}
      </div>
    )

  }

}

export default filter