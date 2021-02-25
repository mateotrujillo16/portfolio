import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Content(props) {
  return (
    <Container fluid={true}>
      <Row className="justify-content-center">
        <Col className="text-align-center">
          {props.children}
        </Col>
      </Row>
    </Container>
  )
}

export default Content
