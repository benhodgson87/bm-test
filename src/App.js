import React from 'react'
import { Provider } from 'react-redux'
import { Spinner } from 'react-redux-spinner'
import store from './store'

import './App.css'

import Surveys from './views/Surveys'

const App = () => (
  <Provider store={store}>
    <div>
      <Spinner />

      {/* Normally the react-router wrapper would go here, but as it's a single page, we can embed
        the view directly and pretend there's routing happening */}
      <Surveys />
    </div>
  </Provider>
)

export default App
