import React from 'react'
import PropTypes from 'prop-types'

import JobItem from '../JobItem'

const Jobs = ({ pending, items }) => (
  <div>
    {pending && <div>Loading</div>}
    {!pending && items.length < 1 && <div>No items to display</div>}
    {!pending &&
      items.length > 0 &&
      items.map(item => (
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
  pending: PropTypes.bool.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Jobs
