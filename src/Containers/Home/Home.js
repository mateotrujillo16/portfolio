import React from 'react';
import './Home.css'
import "bootstrap/dist/css/bootstrap.min.css";

import Header from '../../Components/Header/Header'
import About from '../About/About'
// import Content from '../../Components/Content/Content'
import { Col, Container, Image, Row } from 'react-bootstrap';
import Contact from '../Contact/Contact'
import './Home.css'
import profile from '../../Components/images/IMG_2174.JPG'


function Home(props) {


  return (
    <div id="home">
      <Header title="Mateo Trujillo" />
      <Container>
        <Row>
          <Col xs={15} md={4} fluid>
            <Image src={profile} alt="profile" fluid rounded />
          </Col>
          <Col xs={10} md={8}>
            <About />
          </Col>
        </Row>
      </Container>
    </div>
  )
};
 
export default Home