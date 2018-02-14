import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getJobListing } from '../../store/jobs/thunks'

import Jobs from './Jobs'

export class JobsContainer extends Component {
  static propTypes = {
    jobListings: PropTypes.arrayOf(PropTypes.object),
    getCurrentJobs: PropTypes.func.isRequired,
  }

  static defaultProps = {
    jobListings: [],
  }

  componentWillMount() {
    const { getCurrentJobs } = this.props
    getCurrentJobs()
  }

  render() {
    const { jobListings } = this.props
    return <Jobs items={jobListings} />
  }
}

export const mapStateToProps = ({ jobs }) => ({
  jobListings: jobs.data,
})

export const mapDispatchToProps = dispatch => ({
  getCurrentJobs: () => dispatch(getJobListing()),
})

export default connect(mapStateToProps, mapDispatchToProps)(JobsContainer)
