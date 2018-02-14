import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { get } from '../../utils/apiWrapper'

import { getJobListing } from './thunks'
import { RETRIEVE_JOBS_PENDING, RETRIEVE_JOBS_SUCCESS, RETRIEVE_JOBS_FAIL } from './constants'

jest.mock('../../utils/apiWrapper', () => ({
  get: jest.fn(),
}))

const mockStore = configureStore([thunk])

describe('Jobs side effects (thunks)', () => {
  afterEach(() => {
    jest.resetAllMocks()
  })

  test('should request the jobs from the api and dispatch on success', () => {
    const store = mockStore({})

    get.mockReturnValueOnce(Promise.resolve({
      data: [{ id: 123, customer: 'Wayne' }, { id: 234, customer: 'Garth' }],
    }))

    return store.dispatch(getJobListing()).then(() => {
      expect(get).toHaveBeenCalledWith('/jobs')

      const expectedActions = store.getActions()
      expect(expectedActions.length).toBe(2)
      expect(expectedActions).toContainEqual({ type: RETRIEVE_JOBS_PENDING })
      expect(expectedActions).toContainEqual({
        type: RETRIEVE_JOBS_SUCCESS,
        payload: [{ id: 123, customer: 'Wayne' }, { id: 234, customer: 'Garth' }],
      })
    })
  })

  test('should dispatch a fail action on reject', () => {
    const store = mockStore({})

    get.mockReturnValueOnce(Promise.reject())

    return store.dispatch(getJobListing()).then(() => {
      expect(get).toHaveBeenCalledWith('/jobs')

      const expectedActions = store.getActions()
      expect(expectedActions.length).toBe(2)
      expect(expectedActions).toContainEqual({ type: RETRIEVE_JOBS_PENDING })
      expect(expectedActions).toContainEqual({
        type: RETRIEVE_JOBS_FAIL,
      })
    })
  })
})
