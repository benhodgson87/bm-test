import React from 'react'
import PropTypes from 'prop-types'

const JobActions = ({ id, handleEdit, handleDelete }) => (
  <ul>
    <li>
      <button onClick={() => handleEdit(id)}>Edit</button>
      <button onClick={() => handleDelete(id)}>Delete</button>
    </li>
  </ul>
)

JobActions.propTypes = {
  id: PropTypes.number.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
}

export default JobActions
