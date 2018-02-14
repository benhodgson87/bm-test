import jobsReducer from './reducer'
import {
  RETRIEVE_JOBS_PENDING,
  RETRIEVE_JOBS_SUCCESS,
  RETRIEVE_JOBS_FAIL,
  ADD_JOB,
  EDIT_JOB,
  DELETE_JOB,
} from './constants'

describe('Jobs Reducer', () => {
  test('should return the initial state', () => {
    expect(jobsReducer(undefined, {})).toEqual({
      pending: false,
      data: [],
    })
  })

  test('should set the state to pending', () => {
    expect(jobsReducer(
      {
        pending: false,
        data: [],
      },
      {
        type: RETRIEVE_JOBS_PENDING,
      },
    )).toEqual({
      pending: true,
      data: [],
    })
  })

  test('should set the state to pending on fail', () => {
    expect(jobsReducer(
      {
        pending: true,
        data: [],
      },
      {
        type: RETRIEVE_JOBS_FAIL,
      },
    )).toEqual({
      pending: false,
      data: [],
    })
  })

  test('should populate the job listings on success and set pending to false', () => {
    expect(jobsReducer(
      {
        pending: true,
        data: [],
      },
      {
        type: RETRIEVE_JOBS_SUCCESS,
        payload: [{ id: 123, customer: 'Wayne' }, { id: 234, customer: 'Garth' }],
      },
    )).toEqual({
      pending: false,
      data: [{ id: 123, customer: 'Wayne' }, { id: 234, customer: 'Garth' }],
    })
  })

  test('should add a job to the end of the array', () => {
    expect(jobsReducer(
      {
        pending: false,
        data: [{ id: 123, customer: 'Wayne' }],
      },
      {
        type: ADD_JOB,
        payload: { id: 234, customer: 'Garth' },
      },
    )).toEqual({
      pending: false,
      data: [{ id: 123, customer: 'Wayne' }, { id: 234, customer: 'Garth' }],
    })
  })

  test('should replace a job with edited data', () => {
    expect(jobsReducer(
      {
        pending: false,
        data: [
          { id: 123, customer: 'Wayne' },
          { id: 234, customer: 'Del' },
          { id: 345, customer: 'Cassandra' },
        ],
      },
      {
        type: EDIT_JOB,
        payload: { id: 234, customer: 'Garth' },
      },
    )).toEqual({
      pending: false,
      data: [
        { id: 123, customer: 'Wayne' },
        { id: 234, customer: 'Garth' },
        { id: 345, customer: 'Cassandra' },
      ],
    })
  })

  test('should delete a job using the provided id', () => {
    expect(jobsReducer(
      {
        pending: false,
        data: [
          { id: 123, customer: 'Wayne' },
          { id: 234, customer: 'Garth' },
          { id: 345, customer: 'Cassandra' },
        ],
      },
      {
        type: DELETE_JOB,
        id: 234,
      },
    )).toEqual({
      pending: false,
      data: [{ id: 123, customer: 'Wayne' }, { id: 345, customer: 'Cassandra' }],
    })
  })
})
