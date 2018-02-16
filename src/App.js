import React from 'react'
import { Provider } from 'react-redux'
import { Spinner } from 'react-redux-spinner'
import { Grid } from 'react-flexbox-grid'
import store from './store'

import './BootstrapCustom.css'
import './App.css'

import Surveys from './views/Surveys'

const App = () => (
  <Provider store={store}>
    <div className="app">
      <div className="app-container">
        <Spinner />

        {/* Normally the react-router wrapper would go here, but as it's a single page, we can embed
        the view directly and imagine there's routing happening */}
        <Surveys />
      </div>
    </div>
  </Provider>
)

export default App
