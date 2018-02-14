import React from 'react'
import PropTypes from 'prop-types'

const JobItem = ({ name, dimensions }) => (
  <div>
    {name} - {dimensions}sqft
  </div>
)

JobItem.propTypes = {
  name: PropTypes.string.isRequired,
  dimensions: PropTypes.number.isRequired,
}

export default JobItem
