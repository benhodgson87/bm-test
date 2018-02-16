import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { deleteJob } from '../../store/jobs/thunks'

import JobActions from './JobActions'

export class JobActionsContainer extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    deleteById: PropTypes.func.isRequired,
  }

  handleEdit(id) {
    console.log(`Pop a modal for editing ${id} record data`)
  }

  handleDelete(id) {
    const { deleteById } = this.props
    const isConfirmed = window.confirm('Are you sure you want to delete this record?') // eslint-disable-line no-alert
    if (isConfirmed) deleteById(id)
  }

  render() {
    const { id } = this.props
    return (
      <JobActions
        id={id}
        handleEdit={e => this.handleEdit(e)}
        handleDelete={e => this.handleDelete(e)}
      />
    )
  }
}

export const mapDispatchToProps = dispatch => ({
  deleteById: id => dispatch(deleteJob(id)),
})

export default connect(null, mapDispatchToProps)(JobActionsContainer)
