import { get, post } from '../../utils/apiWrapper'
import { jobRetrievePending, jobRetrieveSuccess, jobRetrieveFail, jobDelete } from './actions'

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

export const deleteJob = id => dispatch =>
  post('/delete')
    .then(() => {
      dispatch(jobDelete(id))
    })
    .catch(() => {
      console.error('Handle failed deletes, eg. flash an error')
    })
