/**
 * Created by BigaMasta on 9/12/16.
 */
import React from 'react'
import Paginate from 'react-js-pagination'

class pagination extends React.Component {

  render() {

    const { page, perPage, pineapplesCount, goToPage } = this.props

    return (
      <div>

        <Paginate
          activePage={page}
          itemsCountPerPage={perPage}
          totalItemsCount={pineapplesCount || 0}
          pageRangeDisplayed={5}
          onChange={goToPage}
        />

      </div>
    )

  }

}

export default pagination