import { UPDATE_SORTING, UPDATE_SORTING_ORDER, UPDATE_SORTING_TYPE } from './constants'

export const updateSort = (key, order) => ({
  type: UPDATE_SORTING,
  payload: {
    key,
    order,
  },
})

export const updateSortOrder = order => ({
  type: UPDATE_SORTING_ORDER,
  payload: order,
})

export const updateSortType = type => ({
  type: UPDATE_SORTING_TYPE,
  payload: type,
})
