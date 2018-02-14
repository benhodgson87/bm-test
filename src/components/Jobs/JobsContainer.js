import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getJobListing } from '../../store/jobs/thunks'

import Jobs from './Jobs'

export class JobsContainer extends Component {
  static propTypes = {
    isPending: PropTypes.bool,
    jobListings: PropTypes.arrayOf(PropTypes.object),
    getCurrentJobs: PropTypes.func.isRequired,
  }

  static defaultProps = {
    jobListings: [],
    isPending: false,
  }

  componentWillMount() {
    const { getCurrentJobs } = this.props
    getCurrentJobs()
  }

  render() {
    const { jobListings, isPending } = this.props
    return <Jobs items={jobListings} pending={isPending} />
  }
}

export const mapStateToProps = ({ jobs }) => ({
  jobListings: jobs.data,
  isPending: jobs.pending,
})

export const mapDispatchToProps = dispatch => ({
  getCurrentJobs: () => dispatch(getJobListing()),
})

export default connect(mapStateToProps, mapDispatchToProps)(JobsContainer)
