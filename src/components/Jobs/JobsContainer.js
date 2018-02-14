import React, { Component } from 'react'
// import PropTypes from 'prop-types'
// import { get } from '../../utils/ApiWrapper'

import Jobs from './Jobs'

class JobsContainer extends Component {
  componentWillMount() {
    console.log('This will fire a redux thunk to get the jobs')
  }

  render() {
    return <Jobs />
  }
}

export default JobsContainer
