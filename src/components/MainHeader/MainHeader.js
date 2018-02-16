import React from 'react'
import { Row, Col } from 'react-flexbox-grid'
import { Button } from 'react-bootstrap'

import './MainHeader.css'

const MainHeader = () => (
  <Row className="main-header">
    <Col xs={12} className="main-header-add">
      <Button bsStyle="primary">Add New</Button>
    </Col>
  </Row>
)

export default MainHeader
