import React from 'react'
import PropTypes from 'prop-types'
import { DropdownButton, MenuItem } from 'react-bootstrap'
import { SORT_ORDERING, JOB_SORT_KEYS } from '../../constants'

const JobSorting = ({ handleSortUpdate }) => (
  <DropdownButton bsStyle="default" title="Sort By">
    <MenuItem
      eventKey="1"
      onClick={() => handleSortUpdate(JOB_SORT_KEYS.LAST_NAME, SORT_ORDERING.ASC)}
    >
      Last Name (A &rsaquo; Z)
    </MenuItem>
    <MenuItem
      eventKey="2"
      onClick={() => handleSortUpdate(JOB_SORT_KEYS.LAST_NAME, SORT_ORDERING.DESC)}
    >
      Last Name (Z &rsaquo; A)
    </MenuItem>
    <MenuItem
      eventKey="3"
      onClick={() => handleSortUpdate(JOB_SORT_KEYS.DIMENSIONS, SORT_ORDERING.ASC)}
    >
      Dimensions (Low &rsaquo; High)
    </MenuItem>
    <MenuItem
      eventKey="4"
      onClick={() => handleSortUpdate(JOB_SORT_KEYS.DIMENSIONS, SORT_ORDERING.DESC)}
    >
      Dimensions (High &rsaquo; Low)
    </MenuItem>
  </DropdownButton>
)

JobSorting.propTypes = {
  handleSortUpdate: PropTypes.func.isRequired,
}

export default JobSorting
