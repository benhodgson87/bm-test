import {
  RETRIEVE_JOBS_PENDING,
  RETRIEVE_JOBS_SUCCESS,
  RETRIEVE_JOBS_FAIL,
  ADD_JOB,
  EDIT_JOB,
  DELETE_JOB,
} from './constants'

export const jobRetrievePending = () => ({
  type: RETRIEVE_JOBS_PENDING,
})

export const jobRetrieveSuccess = payload => ({
  type: RETRIEVE_JOBS_SUCCESS,
  payload,
})

export const jobRetrieveFail = () => ({
  type: RETRIEVE_JOBS_FAIL,
})

export const jobAdd = payload => ({
  type: ADD_JOB,
  payload,
})

export const jobEdit = payload => ({
  type: EDIT_JOB,
  payload,
})

export const jobDelete = id => ({
  type: DELETE_JOB,
  id,
})
