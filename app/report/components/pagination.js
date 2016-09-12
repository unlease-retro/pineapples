/**
 * Created by BigaMasta on 9/12/16.
 */
import React, { PropTypes } from 'react'
import Paginate from 'react-js-pagination'

class Pagination extends React.Component {

  render() {

    const { page, perPage, pineapplesCount, goToPage } = this.props

    return (
      <div>

        <Paginate
          activePage={page}
          itemsCountPerPage={perPage}
          totalItemsCount={pineapplesCount || 0}
          pageRangeDisplayed={5}
          onChange={goToPage} />

      </div>
    )

  }

}

Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  perPage: PropTypes.number.isRequired,
  pineapplesCount: PropTypes.number.isRequired,
  goToPage: PropTypes.func.isRequired
}

export default Pagination