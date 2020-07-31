import React, { Component } from "react";
import axios from "axios";
import DisplayRecipes from "./DisplayRecipes";

// React Bootstrap 4
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default class RecipeByName extends Component {
  constructor() {
    super();

    this.state = {
      drinkName: "",
      drinks: [],
    };
  }

  onDrinkNameChange = (e) => {
      console.log("In onDrinkNameChange");
    this.setState({
      drinkName: e.target.value,
    });
  };

  async searchRecipeByName() {
    try {
      const response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita`
      );
      // Returns matching drinks in an array
      const drinks = response.data.drinks;
      console.log('Drinks returned:', drinks);

      this.setState((prevState) => {
        const newDrinksArray = new Array(prevState.drinks);
        return {
          drinks: newDrinksArray,
        };
      });
    } catch (error) {
      console.log("error: ", error);
    }
  }

  handleFormSubmission = (e) =>{
    e.preventDefault();
    console.log("Form submitted1");

    this.searchRecipeByName();
    console.log("Form submitted");
  };

  render() {
    return (
      <div>
        <Form>
          <Form.Group>
            <Form.Label>Drink Name</Form.Label>
            <Form.Control
              type="Text"
              placeholder="Enter drink name"
              onChange={this.onDrinkNameChange}
            />
            <Form.Text className="text-muted">
              What drink recipe would you like
            </Form.Text>
          </Form.Group>
          <Button variant="primary" type="submit" onClick={this.handleFormSubmission}>
            Submit
          </Button>
        </Form>
        <CardGroup>

        </CardGroup>
      </div>
    );
  }
}
