import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'react-flexbox-grid'
import { Label } from 'react-bootstrap'

import Actions from '../JobActions'

import './JobItem.css'

const JobItem = ({ id, customer, dimensions }) => (
  <Row className="job-item">
    <Col xs={5} className="job-item-section">
      {customer.title} {customer.first_name} {customer.last_name}
    </Col>
    <Col xs={3} className="job-item-section">
      <strong>{dimensions}</strong>ft³
    </Col>
    <Col xs={2} className="job-item-section">
      <Label bsStyle="primary">Cube Job</Label>
    </Col>
    <Col xs={2} className="job-item-section">
      <Actions id={id} />
    </Col>
  </Row>
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
