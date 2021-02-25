import React from 'react';
import { Card, Button } from 'react-bootstrap';
import classes from '../Project.module.css'

const ProjectCard = ({ data }) => {
  const source = 'url(' + data.image + ')';
  return (
    <Card className="h-100 shadow-sm bg-white rounded">
      <Card.Img className={classes.image} style ={{ content: source }} />
      <Card.Body className="d-flex flex-column">
        <div className="d-flex mb-2 justify-content-between">
          <Card.Title className="mb-o font-weight-bold">{data.name}</Card.Title>
        </div>
        <Card.Text className="text-secondary">{data.description}</Card.Text>
        <Button className="mt-auto font-weight-bold">Code Source</Button>
        <Button className="mt-auto font-weight-bold" block>Live Demo</Button>
      </Card.Body>
    </Card>
  )
}

export default ProjectCard 