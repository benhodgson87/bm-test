import configureStore from 'redux-mock-store'

import { UPDATE_SORTING, UPDATE_SORTING_ORDER, UPDATE_SORTING_TYPE } from './constants'

import { updateSort, updateSortOrder, updateSortType } from './actions'

const mockStore = configureStore()

describe('Sorting actions', () => {
  test('should dispatch an action to update sort key and order', () => {
    const store = mockStore({})

    store.dispatch(updateSort('foo.bar', 'desc'))

    const expectedActions = store.getActions()
    expect(expectedActions.length).toBe(1)
    expect(expectedActions).toContainEqual({
      type: UPDATE_SORTING,
      payload: {
        key: 'foo.bar',
        order: 'desc',
      },
    })
  })

  test('should dispatch an action to update sort order only', () => {
    const store = mockStore({})

    store.dispatch(updateSortOrder('desc'))

    const expectedActions = store.getActions()
    expect(expectedActions.length).toBe(1)
    expect(expectedActions).toContainEqual({
      type: UPDATE_SORTING_ORDER,
      payload: 'desc',
    })
  })

  test('should dispatch an action to update sort key only', () => {
    const store = mockStore({})

    store.dispatch(updateSortType('foo.bar'))

    const expectedActions = store.getActions()
    expect(expectedActions.length).toBe(1)
    expect(expectedActions).toContainEqual({
      type: UPDATE_SORTING_TYPE,
      payload: 'foo.bar',
    })
  })
})
