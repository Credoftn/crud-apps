import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import React, { Component } from "react";
import Users from "./components/Users";
import "./App.css";
import AddUserForm from "./components/AddUserForm";
import { v4 as uuid } from "uuid";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          name: "Credo",
          email: "credo.src@gmail.com",
          phone: "0023360164063",
          id: uuid(),
        },
      ],
    };
  }
  addNewUser = (user) => {
    user.id = uuid();
    this.setState({
      users: [...this.state.users, user],
    });
  };
  deleteUser = (id) => {
    let undeletedUser = this.state.users.filter((user) => user.id !== id);
    this.setState({
      users: undeletedUser,
    });
  };
  editUser = (id, updatedUserInfo) => {
    this.setState({
      users: this.state.users.map((user) =>
        user.id === id ? updatedUserInfo : user
      ),
    });
  };
  render() {
    return (
      <>
        <Container style={{ textAlign: "center" }}>
          <Row>
            <Col>
              <button className="btn btn-danger my-1">CONTACT MANAGER</button>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col>
              <AddUserForm addUser={this.addNewUser} />
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col>
              <Users
                usersData={this.state.users}
                deleteUser={this.deleteUser}
                editUser={this.editUser}
              />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default App;
