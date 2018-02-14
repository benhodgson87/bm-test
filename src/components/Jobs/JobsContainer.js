import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getJobListing } from '../../store/jobs/thunks'

import Jobs from './Jobs'

export class JobsContainer extends Component {
  static propTypes = {
    getCurrentJobs: PropTypes.func.isRequired,
  }

  componentWillMount() {
    const { getCurrentJobs } = this.props
    getCurrentJobs()
  }

  render() {
    return <Jobs />
  }
}

export const mapStateToProps = ({ jobs }) => ({
  jobs: jobs.data,
})

export const mapDispatchToProps = dispatch => ({
  getCurrentJobs: () => dispatch(getJobListing()),
})

export default connect(mapStateToProps, mapDispatchToProps)(JobsContainer)
