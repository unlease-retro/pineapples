/**
 * Created by BigaMasta on 9/14/16.
 */
import React from 'react'

import { button as Button } from '../../shared/components'

class filter extends React.Component {

  render() {

    const { filterShown } = this.props

    const renderAddFilterButton = !filterShown ?  <Button
      label='Add filter'
      onClick={() => console.log('update store')}
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