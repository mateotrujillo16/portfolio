import React from 'react';
import { Card, Button } from 'react-bootstrap';
import classes from './Card.module.css'


const ProjectCard = ({ data }) => {
  // const source = 'url(' + data.image + ')';
  return (
    <Card className="h-100 shadow-sm bg-white rounded">
      <Card.Img className={classes.cardimg} src={data.image} variant="top" />
      <Card.Body className="d-flex flex-column">
        <div className="d-flex mb-2 justify-content-between">
          <Card.Title className="mb-o font-weight-bold">{data.name}</Card.Title>
        </div>
        <Card.Text className="text-secondary">{data.description}</Card.Text>
        <a href={data.code} target="_blank">
          <Button className= {classes.btn} block>Code Source</Button>
        </a>
        <br />
        <a href={data.demo} target="_blank">
          <Button className= {classes.btn} block>Live Demo</Button>
        </a>
      </Card.Body>
    </Card>
  )
}

export default ProjectCard 