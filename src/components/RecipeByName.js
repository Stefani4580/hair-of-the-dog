import React, { Component } from "react";

// React Bootstrap 4
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default class RecipeByName extends Component {
  constructor() {
    super();

    this.state = {
        drinkName: "",
      data: [],
    };
  }

  onDrinkNameChange = (e) => {
    this.setState({
      drinkName: e.target.value
    })
  }


  handleFormSubmission = (e) => {
    e.preventDefault();
    searchRecipeByName();
    this.setState({
      formCompleted: true
    })
    console.log("Form submitted")
  }

  render() {
    return (
      <div>
        <Form>
          <Form.Group >
            <Form.Label>Drink Name</Form.Label>
            <Form.Control type="Text" placeholder="Enter drink name" onChange={this.onDrinkNameChange} />
            <Form.Text className="text-muted">
              What drink recipe would you like
            </Form.Text>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
