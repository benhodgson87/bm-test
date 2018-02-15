import { UPDATE_SORTING, UPDATE_SORTING_ORDER, UPDATE_SORTING_TYPE } from './constants'
import { SORT_ORDERING, JOB_SORT_KEYS } from '../../constants'

const initialState = {
  key: JOB_SORT_KEYS.ID,
  order: SORT_ORDERING.ASC,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SORTING:
      return {
        ...state,
        key: action.payload.key,
        order: action.payload.order,
      }

    case UPDATE_SORTING_ORDER:
      return {
        ...state,
        order: action.payload,
      }

    case UPDATE_SORTING_TYPE:
      return {
        ...state,
        key: action.payload,
      }

    default:
      return state
  }
}
