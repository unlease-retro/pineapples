/**
 * Created by BigaMasta on 9/14/16.
 */
import React from 'react'

import { button as Button } from '../../shared/components'

class filter extends React.Component {

  render() {

    const { setFilterShown, filterShown } = this.props

    const renderAddFilterButton = !filterShown ? <Button
      label='Add filter'
      onClick={() => setFilterShown(!filterShown)}
      theme='accent'
    /> : null

    return (
      <div>
        {renderAddFilterButton}
      </div>
    )

  }

}

export default filter