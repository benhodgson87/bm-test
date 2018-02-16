import React from 'react'
import { Row, Col } from 'react-flexbox-grid'
import JobSorting from '../JobSorting'

import './JobsHeader.css'

const JobsHeader = () => (
  <Row className="jobs-header">
    <Col xs={8}>
      <h2>Tasks</h2>
    </Col>
    <Col xs={2}>{/* TODO: To Cube - not sure what this is, check with BM devs */}</Col>
    <Col xs={2}>
      <JobSorting />
    </Col>
  </Row>
)

export default JobsHeader
