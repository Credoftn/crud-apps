import React, { useState } from "react";
import profile from "../images/profile.png";
import "./User.css";
import { Col, Modal } from "react-bootstrap";
import EditUserForm from "./EditUserForn";

const User = (props) => {
  const handleDelete = (e) => {
    e.preventDefault();
    props.deleteUser(props.userInfo.id);
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="fw-bold">Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditUserForm
            userInfo={props.userInfo}
            editUser={props.editUser}
            closeModal={handleClose}
          />
        </Modal.Body>
      </Modal>

      <Col md="6">
        <div className="Card">
          <div className="Card-body">
            <div className="row align-items-center">
              <div className="col-md-4">
                <img
                  src={profile}
                  alt="profile"
                  className="img-fluid profile-img"
                />
              </div>
              <div className="col-md-7">
                <ul className="list-group">
                  <li className="list-group-item list-up-item-action">
                    Name: <span className="fw-bold">{props.userInfo.name}</span>
                  </li>
                  <li className="list-group-item list-up-item-action">
                    Email:{" "}
                    <span className="fw-bold">{props.userInfo.email}</span>
                  </li>
                  <li className="list-group-item list-up-item-action">
                    Phone:{" "}
                    <span className="fw-bold">{props.userInfo.phone}</span>
                  </li>
                </ul>
              </div>
              <div className="col-md-1 d-flex flex-column align-items-center">
                <button className="btn btn-success my-1">
                  <i className="fa fa-check" />
                </button>
                <button className="btn btn-warning my-1" onClick={handleShow}>
                  <i className="fa fa-pen" />
                </button>
                <button className="btn btn-danger my-1" onClick={handleDelete}>
                  <i className="fa fa-trash" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </Col>
    </>
  );
};

export default User;
