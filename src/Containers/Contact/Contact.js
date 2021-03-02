import React, { Component } from 'react';
import Axios from 'axios'

import Header from '../../Components/Header/Header';
import Content from '../../Components/Content/Content';
import { Form, Row, Col, Image, Button } from 'react-bootstrap';
import img from '../../Components/images/IMG_2895.jpeg'
import classes from './Contact.module.css'


class Contact extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      disabled: false,
      emailSent: null
    };
  }
  // function that will change the users input on the form 
  handleChange = (event) => {
    console.log(event);

    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    })
  };

  handleSubmit = (event) => {
    //cancel refresh default behavior
    event.preventDefault();

    this.setState({
      disabled: false,
    });

    Axios.post('http://localhost:3030/api/email', this.state)
      .then(res => {
        if (res.data.success) {
          this.setState({
            disabled: false,
            emailSent: true
          });
        } else {
          this.setState({
            disabled: false,
            emailSent: false
          })
        }
      })
      .catch(err => {
        console.log(err);

        this.setState({
          disabled: false,
          emailSent: false
        })
      })
  }

  render() {
    return (
      <div id="contact">
        <Header title="Contact Me" />
        {/* <hr /> */}
        <Content>
          <Row>
            <Col xs={8} md={4}>
              <Image src={img} alt="profile" fluid thumbnail />
            </Col>
            <br />
            <Col xs={3} md={6}>
              <Form onSubmit={this.handleSubmit} className={classes.form}>
                <Form.Group>
                  <h3>Email</h3>
                  <Form.Label htmlFor="full-name">mateotrujillo1114@gmail.com</Form.Label>
                  {/* <Form.Control id="full-name" name="name" type="text" value={this.state.name} onChange={this.handleChange} /> */}
                </Form.Group>

                <Form.Group>
                <h3>Phone Number</h3>
                  <Form.Label htmlFor="email">980-267-7329</Form.Label>
                  {/* <Form.Control id="email" name="email" type="email" value={this.state.email} onChange={this.handleChange} /> */}
                </Form.Group>

                <Form.Group>
                <h3>Location</h3>
                  <Form.Label htmlFor="message">Charlotte, NC</Form.Label>
                  {/* <Form.Control id="message" name="message" as="textarea" value={this.state.message} onChange={this.handleChange} /> */}
                </Form.Group>

                {/* <Button className={classes.btn} type="submit" disabled={this.state.disabled}>
                  Submit
            </Button> */}



                {/* Check if the form was submitted successfully or not  */}
                {this.state.emailSent === true && <p className="d-inline success-msg">Email Sent</p>}
                {this.state.emailSent === false && <p className="d-inline err-msg">Email not Sent</p>}
              </Form>
            </Col>
          </Row>
        </Content>
      </div>
    )
  }
}

export default Contact