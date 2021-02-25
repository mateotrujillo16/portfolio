import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Jumbotron from 'react-bootstrap/Jumbotron'

const Header = props => {
  return (
    <Jumbotron className="bg-transparent jumbotron-fluid">
      <Container fluid={true}>
        <Row className="justify-content-center py-5">
          <Col md={45}>
            {(props.title && <h1 className="display-2 font-weight-bold font-size-20">{props.title}</h1>) }
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  )
}

export default Header
