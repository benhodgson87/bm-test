import { compose, createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { pendingTasksReducer } from 'react-redux-spinner'

import jobsReducer from './jobs/reducer'

const rootReducer = combineReducers({
  jobs: jobsReducer,
  pendingTasks: pendingTasksReducer,
})

const createStoreWithMiddleware = compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f,
)(createStore)
const store = createStoreWithMiddleware(rootReducer)

export default store
