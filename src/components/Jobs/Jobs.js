import React from 'react'
import PropTypes from 'prop-types'
import { Row } from 'react-flexbox-grid'
import { Alert } from 'react-bootstrap'

import JobItem from '../JobItem'

const Jobs = ({ pending, items }) => (
  <div className="jobs-list">
    {pending && <Row className="jobs-list-isLoading">Loading</Row>}
    {!pending &&
      items.length < 1 && (
        <Row className="jobs-list-isEmpty">
          <Alert bsStyle="warning">No items to display</Alert>
        </Row>
      )}
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
