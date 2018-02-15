import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateSort } from '../../store/sorting/actions'

import JobSorting from './JobSorting'

export const JobSortingContainer = ({ setSortOrder }) => (
  <JobSorting handleSortUpdate={setSortOrder} />
)

JobSortingContainer.propTypes = {
  setSortOrder: PropTypes.func.isRequired,
}

export const mapDispatchToProps = dispatch => ({
  setSortOrder: (key, order) => dispatch(updateSort(key, order)),
})

export default connect(null, mapDispatchToProps)(JobSortingContainer)
