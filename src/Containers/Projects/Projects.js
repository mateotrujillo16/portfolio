import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../../Components/Header/Header';
import classes from './Project.module.css'
import proj from './data.json'
import ProjectCard from './Card/Card'
import 'bootstrap/dist/css/bootstrap.min.css';

function Projects(props) {

  return (
    <div id="projects">
      <Header title = "Projects" />
      <Container>
        <Row>
          {proj.map(data => (
            <Col fluid={true} xl={4} sm={4} className= {classes.col} key={`${data.id}`}>
              <ProjectCard data={data} />
            </Col>
          ))}
        </Row>
      </Container>
      
    </div>
  )

};

export default Projects