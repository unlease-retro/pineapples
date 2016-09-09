/**
  * @desc Virtualized - utilities for working with react-virtualized
*/

import { SortDirection } from 'react-virtualized'

export const getSortedList = (list, sortBy, sortDirection) => list.sortBy( item => item.get(sortBy) ).update( list => sortDirection === SortDirection.DESC ? list.reverse() : list )
