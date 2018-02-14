import configureStore from 'redux-mock-store'

import {
  RETRIEVE_JOBS_PENDING,
  RETRIEVE_JOBS_SUCCESS,
  RETRIEVE_JOBS_FAIL,
  ADD_JOB,
  EDIT_JOB,
  DELETE_JOB,
} from './constants'

import {
  jobRetrievePending,
  jobRetrieveSuccess,
  jobRetrieveFail,
  jobAdd,
  jobEdit,
  jobDelete,
} from './actions'

const mockStore = configureStore()

describe('Jobs actions', () => {
  test('should dispatch a pending retrieve action', () => {
    const store = mockStore({})

    store.dispatch(jobRetrievePending())

    const expectedActions = store.getActions()
    expect(expectedActions.length).toBe(1)
    expect(expectedActions).toContainEqual({
      type: RETRIEVE_JOBS_PENDING,
    })
  })

  test('should dispatch a successful retrieve action with the payload', () => {
    const store = mockStore({})

    store.dispatch(jobRetrieveSuccess([1, 2, 3]))

    const expectedActions = store.getActions()
    expect(expectedActions.length).toBe(1)
    expect(expectedActions).toContainEqual({
      type: RETRIEVE_JOBS_SUCCESS,
      payload: [1, 2, 3],
    })
  })

  test('should dispatch a failed retrieve action', () => {
    const store = mockStore({})

    store.dispatch(jobRetrieveFail())

    const expectedActions = store.getActions()
    expect(expectedActions.length).toBe(1)
    expect(expectedActions).toContainEqual({
      type: RETRIEVE_JOBS_FAIL,
    })
  })

  test('should dispatch an add job action with payload', () => {
    const store = mockStore({})

    store.dispatch(jobAdd({ id: 123, customer: 'Wayne Garth' }))

    const expectedActions = store.getActions()
    expect(expectedActions.length).toBe(1)
    expect(expectedActions).toContainEqual({
      type: ADD_JOB,
      payload: { id: 123, customer: 'Wayne Garth' },
    })
  })

  test('should dispatch an edit job action with payload', () => {
    const store = mockStore({})

    store.dispatch(jobEdit({ id: 123, customer: 'Garth Wayne' }))

    const expectedActions = store.getActions()
    expect(expectedActions.length).toBe(1)
    expect(expectedActions).toContainEqual({
      type: EDIT_JOB,
      payload: { id: 123, customer: 'Garth Wayne' },
    })
  })

  test('should dispatch a delete job action with id to delete', () => {
    const store = mockStore({})

    store.dispatch(jobDelete(123))

    const expectedActions = store.getActions()
    expect(expectedActions.length).toBe(1)
    expect(expectedActions).toContainEqual({
      type: DELETE_JOB,
      id: 123,
    })
  })
})
