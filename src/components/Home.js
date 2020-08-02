import React, { useState } from "react";
import auth from "firebase";

// React Bootstrap 4
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

import "../App.css";

const Home = (props) => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onSubmit = (e) => {
    e.preventDefault();

    //Create User with Email and Password
    auth
      .createUserWithEmailAndPassword(email, password)
      .catch((error) => {
        // Handle Errors here.
        alert(error.message);
      });
  };

  const onEmailChange = (e) =>{
    setEmail(e.target.value);
  }

  const onPasswordChange = (e) =>{
    setPassword(e.target.value);
  }

  return (
    <div>
      <Container fluid>
        <Row>
          <Col>
            <h1 className="title">Welcome to the Hair of the Dog</h1>
            <>
              <Button variant="primary" onClick={handleShow}>
                Sign Up
              </Button>

              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Sign Up</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" onChange={onEmailChange} />
                      <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                      </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" onChange={onPasswordChange} />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                      Submit
                    </Button>
                  </Form>{" "}
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleClose}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>
            </>

            <Image
              fluid
              src="https://images.unsplash.com/photo-1508253730651-e5ace80a7025?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
              alt=""
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Home;
