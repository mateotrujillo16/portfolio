import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Jumbotron from 'react-bootstrap/Jumbotron'
import classes from './Header.module.css'

const Header = props => {
  return (
    <Jumbotron className="bg-transparent jumbotron-fluid">
      <Container fluid={true}>
        <Row className="justify-content-center py-5">
          <Col ClassName={classes.col}>
            {(props.title && <h1 className={classes.header}>{props.title}</h1>) }
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  )
}

export default Header
