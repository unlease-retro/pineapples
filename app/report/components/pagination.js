/**
 * Created by BigaMasta on 9/12/16.
 */
import React from 'react'
import Paginate from 'react-js-pagination'

class pagination extends React.Component {

  render() {

    const { page, perPage, pineapplesCount } = this.props
    console.log(pineapplesCount)

    return (
      <div>

        <Paginate
          activePage={page}
          itemsCountPerPage={perPage}
          totalItemsCount={pineapplesCount || 0}
          pageRangeDisplayed={5}
          onChange={this._handlePageClick}
        />

      </div>
    )

  }

  _handlePageClick(pageNumber) {

    console.log(`active page is ${pageNumber}`)

  }

}

export default pagination