import sortingReducer from './reducer'
import { UPDATE_SORTING, UPDATE_SORTING_ORDER, UPDATE_SORTING_TYPE } from './constants'

jest.mock('../../constants', () => ({
  SORT_ORDERING: {
    ASC: 'asc',
    DESC: 'desc',
  },
  JOB_SORT_KEYS: {
    ID: 'job_id',
    FIRST_NAME: 'first_name',
    LAST_NAME: 'last_name',
    DIMENSIONS: 'dimensions',
  },
}))

describe('Jobs Reducer', () => {
  test('should return the initial state', () => {
    expect(sortingReducer(undefined, {})).toEqual({
      key: 'job_id',
      order: 'asc',
    })
  })

  test('should update both values on UPDATE_SORTING', () => {
    expect(sortingReducer(
      {
        key: 'id',
        order: 'asc',
      },
      {
        type: UPDATE_SORTING,
        payload: {
          key: 'first_name',
          order: 'desc',
        },
      },
    )).toEqual({
      key: 'first_name',
      order: 'desc',
    })
  })

  test('should set the state to pending on fail', () => {
    expect(sortingReducer(
      {
        key: 'id',
        order: 'asc',
      },
      {
        type: UPDATE_SORTING_ORDER,
        payload: 'desc',
      },
    )).toEqual({
      key: 'id',
      order: 'desc',
    })
  })

  test('should set the state to pending on fail', () => {
    expect(sortingReducer(
      {
        key: 'id',
        order: 'asc',
      },
      {
        type: UPDATE_SORTING_TYPE,
        payload: 'dimensions',
      },
    )).toEqual({
      key: 'dimensions',
      order: 'asc',
    })
  })
})
