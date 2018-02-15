import React, { Component } from 'react'
import PropTypes from 'prop-types'
import deepSort from 'deep-sort'
import { connect } from 'react-redux'
import { getJobListing } from '../../store/jobs/thunks'

import Jobs from './Jobs'

export class JobsContainer extends Component {
  static propTypes = {
    isPending: PropTypes.bool.isRequired,
    jobListings: PropTypes.arrayOf(PropTypes.object),
    sortBy: PropTypes.shape({
      by: PropTypes.string,
      order: PropTypes.string,
    }).isRequired,
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
    const { jobListings, isPending, sortBy: { key, order } } = this.props
    return <Jobs items={deepSort(jobListings, key, order)} pending={isPending} />
  }
}

export const mapStateToProps = ({ jobs, sorting }) => ({
  jobListings: jobs.data,
  isPending: jobs.pending,
  sortBy: sorting,
})

export const mapDispatchToProps = dispatch => ({
  getCurrentJobs: () => dispatch(getJobListing()),
})

export default connect(mapStateToProps, mapDispatchToProps)(JobsContainer)
