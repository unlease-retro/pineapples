import Immutable from 'immutable'
import React, { PropTypes } from 'react'
import uuid from 'node-uuid'
import { StyleSheet, css } from 'aphrodite/no-important'
import { colors } from 'styles/settings'
import { AutoSizer, FlexTable, FlexColumn, SortIndicator } from 'react-virtualized'
import { getSortedList } from '../../shared/util/virtualized'
import { getCapitalised } from '../../shared/util'
import { DISPLAY_FIELDS } from '../constants'

const Table = ({ list, options, setSort, onSortClick, onRowItemClick }) => {

  const { styles } = Table

  const { disableHeader, headerHeight, height, overscanRowCount, rowHeight, sortEnabled, sortBy, sortDirection, useDynamicRowHeight } = options

  // sort list if enabled
  const sortedList = sortEnabled ? getSortedList(list, sortBy, sortDirection) : list

  // custom rowGetter
  const rowGetter = ({ index }) => sortedList.get(index % sortedList.size)

  // make headers sortable
  const headerRenderer = ({ dataKey, label, sortBy, sortDirection }) => ( <div>{ label } { sortBy === dataKey && <SortIndicator sortDirection={sortDirection} /> } </div> )

  const renderColumns = DISPLAY_FIELDS.map( field => ( <FlexColumn key={uuid.v4()} headerRenderer={headerRenderer} label={getCapitalised(field)} dataKey={field} disableSort={!sortEnabled} width={1} flexGrow={1} flexShrink={0} /> ) )

  // handle sort -> dispatch action
  const onSort = ({ sortBy, sortDirection }) => {

    setSort({ sortBy, sortDirection })
    onSortClick({ sortBy, sortDirection })

  }

  const onRowClick = ({ index }) => onRowItemClick(rowGetter({ index }))

  // custom renderer if no data
  const noRowsRenderer = () => ( <div className={css(styles.noRows)}>No rows</div> )

  // odd/even row classnames
  const rowClassName = ({ index }) => index < 0 ? css(styles.headerRow) : index % 2 === 0 ? css(styles.evenRow) : css(styles.oddRow)

  return (
    <div className={ css(styles.table) }>

      <AutoSizer>

        { ({ width }) => (

          <FlexTable
            width={width}
            height={height}
            disableHeader={disableHeader}
            headerHeight={headerHeight}
            overscanRowCount={overscanRowCount}
            rowHeight={rowHeight}
            rowCount={sortedList.size}
            rowGetter={rowGetter}
            rowClassName={rowClassName}
            sort={onSort}
            sortBy={sortBy}
            sortDirection={sortDirection}
            useDynamicRowHeight={useDynamicRowHeight}
            noRowsRenderer={noRowsRenderer}
            onRowClick={onRowClick}
          >
            { renderColumns }
          </FlexTable>

        )}

      </AutoSizer>

    </div>
  )

}

Table.styles = StyleSheet.create({
  table: {
    fontSize: '12px',
    marginTop: '100px',
  },
  headerRow: {
    color: colors.light,
    backgroundColor: colors.pineapple,
  },
  evenRow: {

  },
  oddRow: {
    backgroundColor: colors.ltgrey,
  },
  noRows: {
    color: colors.error,
  },
})

Table.propTypes = {
  fields: PropTypes.array,
  list: PropTypes.instanceOf(Immutable.List).isRequired,
  options: PropTypes.object.isRequired,
  setSort: PropTypes.func.isRequired,
}

export default Table
