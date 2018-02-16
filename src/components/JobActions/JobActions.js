import React from 'react'
import PropTypes from 'prop-types'
import { DropdownButton, MenuItem } from 'react-bootstrap'

const JobActions = ({ id, handleEdit, handleDelete }) => (
  <DropdownButton bsStyle="primary" title="Actions" className="job-actions-handle">
    <MenuItem eventKey="1" onClick={() => handleEdit(id)}>
      Edit
    </MenuItem>
    <MenuItem eventKey="2" onClick={() => handleDelete(id)}>
      Delete
    </MenuItem>
  </DropdownButton>
)

JobActions.propTypes = {
  id: PropTypes.number.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
}

export default JobActions
