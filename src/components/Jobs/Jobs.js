import React from 'react'
import PropTypes from 'prop-types'

import JobItem from '../JobItem'

const Jobs = ({ items }) => (
  <div>
    {items.length < 1 && <div>No items to display</div>}
    {items.map(item => (
      <JobItem
        key={item.id}
        id={item.id}
        customer={item.customer}
        dimensions={item.job.dimensions}
      />
    ))}
  </div>
)

Jobs.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Jobs
