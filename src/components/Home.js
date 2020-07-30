import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import "../App.css";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Container fluid>
          <Row>
            <Col>
            <h1 className="title">Welcome to the Hair of the Dog</h1>
            <Image fluid src="https://images.unsplash.com/photo-1508253730651-e5ace80a7025?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt=""/>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
