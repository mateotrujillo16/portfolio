import React, { useState } from 'react';
import { Col, Container, Image } from 'react-bootstrap';
import { Document, Page, pdfjs } from 'react-pdf'
import Header from '../../Components/Header/Header'
import classes from './Resume.module.css'
import resume from './Resume.jpg'


export default function Resume() {


  return (
    <>
      <div id="resume" className={classes.resume}>
        <Header title="Resume" />
        <Container className="justify-content-center">
          <Col xs={45} md={45}>
            <Image className={classes.resume} src={resume} alt="resume" fluid />
          </Col>
        </Container>
      </div>

    </>
  )
};

