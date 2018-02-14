import React from 'react'
import PropTypes from 'prop-types'

import Actions from '../JobActions'

const JobItem = ({ id, customer, dimensions }) => (
  <div>
    <em>
      {customer.title} {customer.first_name} {customer.last_name}
    </em>
    <br />
    <strong>Dimensions: {dimensions}sqft</strong>
    <Actions id={id} />
  </div>
)

JobItem.propTypes = {
  id: PropTypes.number.isRequired,
  customer: PropTypes.shape({
    title: PropTypes.string,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
  }).isRequired,
  dimensions: PropTypes.number.isRequired,
}

export default JobItem
