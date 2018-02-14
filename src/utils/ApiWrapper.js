import axios from 'axios'
import { pendingTask, begin, end } from 'react-redux-spinner'
import { API_PATH, REDUX_SPINNER_ACTION } from '../constants'
import store from '../store'

export const get = path => {
  store.dispatch({ type: REDUX_SPINNER_ACTION, [pendingTask]: begin })
  return axios
    .get(API_PATH + path)
    .then(resp => {
      store.dispatch({ type: REDUX_SPINNER_ACTION, [pendingTask]: end })
      return resp.data
    })
    .catch(err => {
      store.dispatch({ type: REDUX_SPINNER_ACTION, [pendingTask]: end })
      return err
    })
}

export const post = (path, data) => {
  store.dispatch({ type: REDUX_SPINNER_ACTION, [pendingTask]: begin })
  return axios
    .post(API_PATH + path, data)
    .then(resp => {
      store.dispatch({ type: REDUX_SPINNER_ACTION, [pendingTask]: end })
      return resp
    })
    .catch(err => {
      store.dispatch({ type: REDUX_SPINNER_ACTION, [pendingTask]: end })
      return err
    })
}
