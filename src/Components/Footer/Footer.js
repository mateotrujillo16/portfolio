import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Footer() {
  
  return (
    <footer className="mt-5">
      <Container fluid={true} className="">
        <Row className="border-top p-3">
          <Col className="">
            <p>Mateo Trujillo</p>
            <p>Copyright</p>
          </Col>
          {/* <Col className="p-0 d-flex" md={3}>
            Copyright
          </Col> */}
        </Row>
      </Container>
    </footer>
  )
}

export default Footer;

