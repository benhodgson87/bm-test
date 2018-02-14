import React from 'react'
import { Provider } from 'react-redux'
import { Spinner } from 'react-redux-spinner'
import store from './store'

import './App.css'

import Jobs from './components/Jobs'

const App = () => (
  <Provider store={store}>
    <div>
      <Spinner />
      <Jobs />
    </div>
  </Provider>
)

export default App
