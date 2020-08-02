import React, { useState } from "react";

// React Bootstrap 4
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal"

import "../App.css";

const Home = (props) => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



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
                    <Modal.Title>Modal heading</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    Woohoo, you're reading this text in a modal!
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
  }
export default Home;