import React from 'react'
import { Provider } from 'react-redux'
import { Spinner } from 'react-redux-spinner'
import store from './store'

import 'react-redux-spinner/dist/react-redux-spinner.css'
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
