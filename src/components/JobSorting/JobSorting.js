import React from 'react'
import PropTypes from 'prop-types'
import { SORT_ORDERING, JOB_SORT_KEYS } from '../../constants'

const JobSorting = ({ handleSortUpdate }) => (
  <ul>
    <li>
      <button onClick={() => handleSortUpdate(JOB_SORT_KEYS.LAST_NAME, SORT_ORDERING.ASC)}>
        Last Name (A &rsaquo; Z)
      </button>
    </li>
    <li>
      <button onClick={() => handleSortUpdate(JOB_SORT_KEYS.LAST_NAME, SORT_ORDERING.DESC)}>
        Last Name (Z &rsaquo; A)
      </button>
    </li>
    <li>
      <button onClick={() => handleSortUpdate(JOB_SORT_KEYS.DIMENSIONS, SORT_ORDERING.ASC)}>
        Dimensions (Low &rsaquo; High)
      </button>
    </li>
    <li>
      <button onClick={() => handleSortUpdate(JOB_SORT_KEYS.DIMENSIONS, SORT_ORDERING.DESC)}>
        Dimensions (High &rsaquo; Low)
      </button>
    </li>
  </ul>
)

JobSorting.propTypes = {
  handleSortUpdate: PropTypes.func.isRequired,
}

export default JobSorting
