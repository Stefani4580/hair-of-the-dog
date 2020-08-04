import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Jumbotron from "react-bootstrap/Jumbotron";
import "../App.css";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Container className="title-div" fluid>
          <Jumbotron className="jumbo">
            <h1>Hair of the Dog</h1>
            <p>
              Imagine this. You've enjoyed a evening out with friends. The next morning,
              in the midst of your hangover, you've decided you'd like a little
              of the hair of the dog that bit you. But alas, the evening was so
              epic that you may have destroyed the brain cell that held the
              information. What do you do??
            </p>
            <p>Go to <strong>Hair of the Dog</strong>!</p>

            <p>
              Hair of the Dog is your one stop shop for all things alcoholic. Do
              you remember the name of the drink? We've got you! Can only
              remember the spirit? We've got you! Have a shelf full of alcohol
              and don't know what to make? We've got you! At Hair of the Dog,
              you can find recipes for your favorite alcoholic beverages, find
              recipes for the alcohol you have on hand and discover new drinks.
            </p>
          </Jumbotron>{" "}
        </Container>
      </div>
    );
  }
}
