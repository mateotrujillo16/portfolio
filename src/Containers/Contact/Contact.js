import React, { Component } from 'react';
import Axios from 'axios'

import Header from '../../Components/Header/Header';
import Content from '../../Components/Content/Content';
import { Button, Form } from 'react-bootstrap';

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
        <Header title="Contact" />
        <Content>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group>
              <Form.Label htmlFor="full-name">Full Name</Form.Label>
              <Form.Control id="full-name" name="name" type="text" value={this.state.name} onChange={this.handleChange} />
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="email">Email</Form.Label>
              <Form.Control id="email" name="email" type="email" value={this.state.email} onChange={this.handleChange} />
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="message">Full Name</Form.Label>
              <Form.Control id="message" name="message" as="textarea" value={this.state.message} onChange={this.handleChange} />
            </Form.Group>

            <Button className="d-inline-block" variant="primary" type="submit" disabled={this.state.disabled}>
              Submit
            </Button>


            {/* Check if the form was submitted successfully or not  */}
            {this.state.emailSent === true && <p className="d-inline success-msg">Email Sent</p>}
            {this.state.emailSent === false && <p className="d-inline err-msg">Email not Sent</p>}
          </Form>
        </Content>
      </div>
    )
  }
}

export default Contact