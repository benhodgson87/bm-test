import { get, post } from '../../utils/apiWrapper'
import {
  jobRetrievePending,
  jobRetrieveSuccess,
  jobRetrieveFail,
  jobAdd,
  jobEdit,
  jobDelete,
} from './actions'

export const getJobListing = () => dispatch => {
  dispatch(jobRetrievePending())
  return get('/jobs')
    .then(response => {
      dispatch(jobRetrieveSuccess(response.data))
    })
    .catch(() => {
      dispatch(jobRetrieveFail())
    })
}

export const addJob = data => dispatch =>
  post('/add', data)
    .then(() => {
      dispatch(jobAdd(data))
    })
    .catch(() => {
      console.error('Handle failed deletes, eg. flash an error')
    })

export const editJob = data => dispatch =>
  post('/edit', data)
    .then(() => {
      dispatch(jobEdit(data))
    })
    .catch(() => {
      console.error('Handle failed deletes, eg. flash an error')
    })

export const deleteJob = id => dispatch =>
  post('/delete', id)
    .then(() => {
      dispatch(jobDelete(id))
    })
    .catch(() => {
      console.error('Handle failed deletes, eg. flash an error')
    })
