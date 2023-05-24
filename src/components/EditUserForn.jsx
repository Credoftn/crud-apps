import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

class EditUserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.userInfo.name,
      email: props.userInfo.email,
      phone: props.userInfo.phone,
      id: props.userInfo.id,
    };
  }
  handleChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.editUser(this.state.id, this.state);
    this.setState({
      name: "",
      email: "",
      phone: "",
    });
    this.props.closeModal();
  };
  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="fw-bold">Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Edit Name"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="fw-bold">Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Edit email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
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
          Edit
        </Button>
      </Form>
    );
  }
}

export default EditUserForm;
