import { get } from '../../utils/apiWrapper'
import { jobRetrievePending, jobRetrieveSuccess, jobRetrieveFail } from './actions'

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
