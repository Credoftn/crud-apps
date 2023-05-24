import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import "./AddUserForm.css";

class AddUserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
    };
  }
  handleChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addUser(this.state);
    this.setState({
      name: "",
      email: "",
      phone: "",
    });
    console.log("Form Created", this.state);
  };
  render() {
    return (
      <div className="form_container">
        <Form onSubmit={this.handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail" id="name">
            <Form.Label className="fw-bold">Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Name"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail" id="name">
            <Form.Label className="fw-bold">Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword" id="name">
            <Form.Label className="fw-bold">Phone Number</Form.Label>
            <Form.Control
              type="number"
              placeholder="add 00 before the country code Ex : 00229"
              name="phone"
              value={this.state.phone}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="fw-bold">
            Create
          </Button>
        </Form>
        <div className="box"></div>
      </div>
    );
  }
}

export default AddUserForm;
